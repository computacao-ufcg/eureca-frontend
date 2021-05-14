import React, { useEffect, useState } from "react";

// RSuite components
import { Loader } from "rsuite";

// General Components
import Header from "../../../../components/General/Header";
import NavBar from "../../../../components/StatisticsComponents/NavBar";
import SideBar from "../../../../components/StatisticsComponents/SideBar";
import Title from "../../../../components/General/Title";
import {
  navOptions,
  subjectsOptions,
  nameSubjects,
} from "../../statisticsUtil";

// Inter Components
import SummarySlider from "./SummarySlider";
import SummaryGraph from "./SummaryGraph";

// Api
import api from "../../../../services/api";

import "./styles.css";

const Summary = () => {
  const [loading, setLoading] = useState(true);

  const [dataGraph, setDataGraph] = useState([]);
  const [label, setLabel] = useState([]);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
  };

  const fetchDataApiWithLabel = async (min, max) => {
    setLoading(true);
    const query = `disciplinas/sumario?de=${label[min]}&ate=${label[max]}`;

    const resSummary = await api.get(`api/estatisticas/${query}`, {});

    if (resSummary.statusText === "OK") {
      setDataGraph(resSummary.data);
    } else {
      console.log("Error Data Ativos");
    }

    setLoading(false);
  };

  useEffect(() => {
    const fetchDataApiWithoutLabel = async () => {
      setLoading(true);
      const query = `disciplinas/sumario`;

      const resSummary = await api.get(`api/estatisticas/${query}`, {});

      if (resSummary.statusText === "OK") {
        setDataGraph(resSummary.data.dados);
        setLabel(resSummary.data.periodos);
      } else {
        console.log("Error Data Ativos");
      }

      setLoading(false);
    };

    fetchDataApiWithoutLabel();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={"mainStatistics"}>
        <Title name={"Estatísticas"} />
        <div className={"contentStatistics"}>
          <NavBar selectedOption={"Subjects"} listEnum={navOptions} />
          <div className={"modelStatistics"}>
            <div className={"listStatistics"}>
              <SideBar
                selectedOption={"Sumário"}
                navSelected={"subjects"}
                listOption={subjectsOptions}
                names={nameSubjects}
              />
              <div className={"compStatistics"}>
                <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                  <SummarySlider
                    changeSlider={handleSlider}
                    labels={label}
                    min={min}
                    max={max}
                  ></SummarySlider>
                </div>
                <div className={"main-content-graph"}>
                  {loading ? (
                    <Loader></Loader>
                  ) : (
                    <React.Fragment>
                      <h2>Sumário</h2>
                      <div>
                        <p>Taxa de Sucesso (%)</p>
                        <SummaryGraph data={dataGraph}></SummaryGraph>
                      </div>
                      <p>
                        <strong>taxa de sucesso</strong>: Percentual de
                        aprovação para cada grupo disciplinar.
                      </p>
                    </React.Fragment>
                  )}
                </div>
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

export default Summary;
