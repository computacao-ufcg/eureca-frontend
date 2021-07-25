import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../../../components/Header";
import AlumniSlider from "../../../../components/Slider";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import Export from "../../../../components/Export";

import AlumniGraph from "./Graph";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./style.css";

import { select_items } from "./util";

const Alumni = () => {
  const query = "/statistics/students/alumni";
  const [dataEgressos, setDataEgressos] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [loading, setLoading] = useState(true);

  const [optionSelected, setOptionSelected] = useState("alumniCount");

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
    setDataEgressos(response.data.alumniPerTermSummaries);
    setDataCSV(response.dataCSV);
    setFirstTerm(firstTerm || response.firstTerm);
    setLastTerm(lastTerm || response.lastTerm);
  };

  return (
    <React.Fragment>
      <Header />
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className='alumni-main'>
          <div className='alumni-content'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='alumni-slider'>
              <div className='alumni-title'>Egressos</div>
              <AlumniSlider
                changeSlider={handleSlider}
                firstTerm={firstTerm}
                lastTerm={lastTerm}
              />
              <div className='graph'>
                <AlumniGraph
                  data={dataEgressos || {}}
                  option={optionSelected}
                />
                <SelectPicker
                  onChange={value => setOptionSelected(value)}
                  data={select_items}
                  className='selector'
                  defaultValue={optionSelected}
                />
              </div>
              <Export data={dataCSV} name={"alumni"} />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Alumni;
