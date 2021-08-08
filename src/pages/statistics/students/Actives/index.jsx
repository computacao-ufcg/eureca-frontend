import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import ActiveSlider from "../../../../components/Slider";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import ActiveGraph from "./Graph";
import Export from "../../../../components/Export";

import "./styles.css";

const Actives = () => {
  const query = "/statistics/students/actives";
  const [dataActives, setDataActives] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await updateGraph(query, loading);
      if (response) {
        setAllData(response);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSlider = async (from, to) => {
    const response = await updateGraph(query, loading, from, to);
    if (response) {
      setAllData(response);
    }
  };

  const setAllData = response => {
    setDataActives(response.data.activesPerTermSummaries);
    setDataExport(response.dataCSV.students);
    setFirstTerm(firstTerm || response.firstTerm);
    setLastTerm(lastTerm || response.lastTerm);
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
            <ActiveSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} />
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
