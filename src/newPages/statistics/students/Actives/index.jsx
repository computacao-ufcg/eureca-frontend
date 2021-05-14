import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../newComponents/Header";
import ActiveSlider from "./ActiveSlider";
import ActiveGraph from "./ActiveGraph";
import Export from "../../../../newComponents/Export";

import { api_EB } from "../../../../services/api";

import "./styles.css";

const Actives = () => {
  const [dataActives, setDataActives] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [label, setLabel] = useState([]);

  const [loadding, setLoadding] = useState(true);

  const history = useHistory();

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
  };

  const fetchDataApiWithLabel = async (min, max) => {
    const queryActives = `api/statistics/students/actives?from=${label[min]}&to=${label[max]}`;
    const queryActivesCSV = `api/statistics/students/actives/csv?from=${label[min]}&to=${label[max]}`;

    const token = sessionStorage.getItem("eureca-token");

    const options = {
      headers: {
        "Authentication-Token": token,
      },
    };

    const resActives = await api_EB.get(queryActives, options);
    const resActivesCSV = await api_EB.get(queryActivesCSV, options);

    if (resActives.status === 200) {
      setDataActives(resActives.data.terms);
    } else {
      console.log("Error Data Ativos");
    }

    if (resActivesCSV.status === 200) {
      setDataExport(resActivesCSV.data);
    } else {
      console.log("Error Data Export");
    }
  };

  useEffect(() => {
    const fetchDataApiWithoutLabel = async () => {
      setLoadding(true);
      const queryActives =
        "api/statistics/students/actives?from=1950.0&to=2049.9";
      const queryActivesCSV =
        "api/statistics/students/actives/csv?from=1950.0&to=2049.9";

      const token = sessionStorage.getItem("eureca-token");

      const options = {
        headers: {
          "Authentication-Token": token,
        },
      };

      const resActives = await api_EB.get(queryActives, options);
      const resActivesCSV = await api_EB.get(queryActivesCSV, options);

      if (resActives.status === 200) {
        setDataActives(resActives.data.terms);
        setLabel(resActives.data.sliderLabel);
        setMax(resActives.data.sliderLabel.length - 1);
      } else {
        console.error("Error Data Ativos");
      }

      if (resActivesCSV.status === 200) {
        setDataExport(resActivesCSV.data);
      } else {
        console.error("Error Data Export");
      }
      setLoadding(false);
    };

    fetchDataApiWithoutLabel();
  }, []);

  return (
    <div className='main-container'>
      <Header></Header>
      {loadding ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='main-actives'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='actives-title'>Ativos</div>
          <div className='actives-graph-box'>
            <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
              <ActiveSlider
                changeSlider={handleSlider}
                labels={label}
                min={min}
                max={max}
              />
            </div>
            <ActiveGraph data={dataActives} />
            <div className='main-actives-export'>
              <Export data={dataExport} name={"Actives"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actives;
