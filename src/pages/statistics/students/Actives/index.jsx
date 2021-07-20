import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import ActiveSlider from "../../../../components/Slider";
import ActiveGraph from "./Graph";
import Export from "../../../../components/Export";

import { api_EB } from "../../../../services/api";

import "./styles.css";

const Actives = () => {
  const [dataActives, setDataActives] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await updateGraph();
      setLoading(false);
    };

    fetchData();
  }, []);

  const getSummaryQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/actives${f}${t}`;
  };

  const getCSVQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/actives/csv${f}${t}`;
  };

  const handleSlider = async (from, to) => {
    await updateGraph(from, to);
  };

  const updateGraph = async (from, to) => {
    const queryActives = getSummaryQuery(from, to);
    const queryActivesCSV = getCSVQuery(from, to);

    const token = sessionStorage.getItem("eureca-token");

    const options = {
      headers: {
        "Authentication-Token": token,
      },
    };

    const resActives = await api_EB.get(queryActives, options);
    const resActivesCSV = await api_EB.get(queryActivesCSV, options);

    if (resActives.status === 200) {
      setDataActives(resActives.data.activesPerTermSummaries);

      if (loading) {
        setFirstTerm(resActives.data.from);
        setLastTerm(resActives.data.to);
      }
    } else {
      console.log("Error Data Ativos");
    }

    if (resActivesCSV.status === 200) {
      setDataExport(resActivesCSV.data);
    } else {
      console.log("Error Data Export");
    }
  };

  return (
    <div className='main-container'>
      <Header></Header>
      {loading ? (
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
            <ActiveSlider
              changeSlider={handleSlider}
              firstTerm={firstTerm}
              lastTerm={lastTerm}
            />
          </div>
          <ActiveGraph data={dataActives} />
          <div className='main-actives-export'>
            <Export data={dataExport} name={"Actives"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Actives;
