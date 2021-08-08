import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import DropoutSlider from "../../../../components/Slider";
import DropoutGraph from "./Graph";
import Export from "../../../../components/Export";

import "./style.css";
import updateGraph from "../../../../components/Slider/util/updateGraph";

const Dropout = () => {
  const query = "/statistics/students/dropouts";
  const [dataEgressos, setDataEgressos] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
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
    setDataEgressos(response.data.dropoutPerTermSummaries);
    setDataCSV(response.dataCSV.students);
    setFirstTerm(firstTerm || response.firstTerm);
    setLastTerm(lastTerm || response.lastTerm);
  };

  return (
    <React.Fragment>
      <Header />
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='dropout-main'>
          <div className='dropout-content'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='dropout-slider'>
              <div className='dropout-title'>Evadidos</div>
              <DropoutSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} />
              <DropoutGraph data={dataEgressos} />
              <Export data={dataCSV} name={"dropout"} />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dropout;
