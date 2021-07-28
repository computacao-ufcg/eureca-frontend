import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import DelayedSlider from "../../../../components/Slider";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import Export from "../../../../components/Export";

import DelayedGraph from "./Graph";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./style.css";

import { select_items } from "./util";

const Delayed = () => {
  const query = "/statistics/students/delayed";
  const [delayedData, setDelayedData] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [loading, setLoading] = useState(true);

  const [optionSelected, setOptionSelected] = useState("risk");

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
    setDelayedData(parseDelayedData(response.data));
    setDataCSV(response.dataCSV);
    setFirstTerm(firstTerm || response.firstTerm);
    setLastTerm(lastTerm || response.lastTerm);
  };

  const parseDelayedData = data => {
    return data.terms.map(element => {
      return {
        ...element.metricsSummary.metrics,
        term: element.admissionTerm,
      };
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className='alumni-main'>
        {/* {loading ? (
          <h1>Carregando...</h1>
        ) : ( */}
          <div className='alumni-content'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='alumni-slider'>
              <div className='alumni-title'>Retidos</div>
              {/* <DelayedSlider
                changeSlider={handleSlider}
                firstTerm={firstTerm}
                lastTerm={lastTerm}
              /> */}
              <div className='graph-delayed'>
                <DelayedGraph
                  data={delayedData || {}}
                  option={optionSelected}
                />
                <SelectPicker
                  onChange={value => setOptionSelected(value)}
                  data={select_items}
                  className='selector'
                  defaultValue={optionSelected}
                  cleanable={false}
                />
              </div>
              <Export data={dataCSV} name={"delayed"} />
            </div>
          </div>
        {/* )} */}
      </div>
    </React.Fragment>
  );
};

export default Delayed;
