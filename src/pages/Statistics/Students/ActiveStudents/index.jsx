import React, { useState, useEffect } from "react";

import Header from "../../../../components/General/Header";
import NavBar from "../../../../components/StatisticsComponents/NavBar";
import SideBar from "../../../../components/StatisticsComponents/SideBar";
import Title from "../../../../components/General/Title/";
import Export from "../../../../components/StatisticsComponents/Export";

import {
  navOptions,
  studentsOptions,
  nameStudents,
} from "../../statisticsUtil";

import ActiveSlider from "./ActiveSlider";
import ActiveGraph from "./ActiveGraph";

import api from "../.././../../services/api";

import "../../styles.css";

const DiscentesAtivos = () => {
  const [dataAtivos, setDataAtivos] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [label, setLabel] = useState([]);
  // const [load, setLoad] = useState(true);

  const getLabel = data => {
    const aux = new Set();
    let newLabel = [];

    data.forEach(e => {
      aux.add(e.periodo_ingresso); // montando o novo label com elementos unicos.
    });

    newLabel = Array.from(aux).sort((a, b) => a - b); // Transformando em array e ordenando o Label

    setMin(0);
    setMax(newLabel.length - 1);

    return newLabel;
  };

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
  };

  const fetchDataApiWithLabel = async (min, max) => {
    const query = `ativos?de=${label[min]}&ate=${label[max]}`;
    const queryExport = `ativos/csv?de=${label[min]}&ate=${label[max]}`;

    const resAtivos = await api.get(`api/estatisticas/${query}`, {});
    const resExport = await api.get(`api/estatisticas/${queryExport}`, {});

    if (resAtivos.statusText === "OK") {
      setDataAtivos(resAtivos.data);
    } else {
      console.log("Error Data Ativos");
    }

    if (resExport.statusText === "OK") {
      setDataExport(resExport.data);
    } else {
      console.log("Error Data Export");
    }
  };

  useEffect(() => {
    const fetchDataApiWithoutLabel = async () => {
      const query = "ativos";
      const queryExport = "ativos/csv";

      const resAtivos = await api.get(`api/estatisticas/${query}`, {});
      const resExport = await api.get(`api/estatisticas/${queryExport}`, {});

      if (resAtivos.statusText === "OK") {
        setDataAtivos(resAtivos.data);
        setLabel(getLabel(resAtivos.data));
      } else {
        console.log("Error Data Ativos");
      }

      if (resExport.statusText === "OK") {
        setDataExport(resExport.data);
      } else {
        console.log("Error Data Export");
      }
    };

    fetchDataApiWithoutLabel();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={"mainStatistics"}>
        <Title name={"Estatísticas"} />
        <div className={"contentStatistics"}>
          <NavBar selectedOption={"Students"} listEnum={navOptions} />
          <div className={"modelStatistics"}>
            <div className={"listStatistics"}>
              <SideBar
                selectedOption={"Ativos"}
                navSelected={"students"}
                listOption={studentsOptions}
                names={nameStudents}
              />
              <div className={"compStatistics"}>
                <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                  <ActiveSlider
                    changeSlider={handleSlider}
                    labels={label}
                    min={min}
                    max={max}
                  ></ActiveSlider>
                </div>
                <ActiveGraph
                  data={dataAtivos}
                  periodoMin={label[min]}
                  periodoMax={label[max]}
                ></ActiveGraph>
                <Export data={dataExport} name='ativos'></Export>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DiscentesAtivos;
