import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../../../newComponents/Header";
import DelayedSlider from "./DelayedSlider";
import DelayedGraph from "./DelayedGraph";
import Export from "../../../../newComponents/Export";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { api_EB } from "../../../../services/api";

import "./style.css";

import { select_items } from "./util";

const Delayed = () => {
  const [dataEgressos, setDataEgressos] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [dataCSV, setDataCSV] = useState([]);

  const [optionSelected, setOptionSelected] = useState("risk");

  const history = useHistory();

  useEffect(() => {
    updateGraph("1966.1", "2020.1");
    handleCSV("1966.1", "2020.1");
  }, []);

  const handleSlider = (min, max) => {
    setMin(min);
    setMax(max);
    updateGraph(min, max);
    handleCSV(min, max);
  };

  const updateGraph = async (min, max) => {
    let query = `api/statistics/students/delayed?from=${min}&to=${max}`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      let delayedAux = [];
      res.data.terms.forEach(element => {
        let delayedElement = {
          ...element.metricsSummary.metrics,
          term: element.admissionTerm,
        };
        delayedAux.push(delayedElement);
      });
      setDataEgressos(delayedAux);
    } else {
      console.log(res.statusText);
    }
  };

  const handleCSV = async (min, max) => {
    let query = `api/statistics/students/alumni/csv?from=${min}&to=${max}`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setDataCSV(res.data);
    } else {
      console.log(res.statusText);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className='alumni-main'>
        <div className='alumni-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='alumni-slider'>
            <div className='alumni-title'>Retidos</div>
            <DelayedSlider changeSlider={handleSlider} />
            <div className='graph'>
              <DelayedGraph data={dataEgressos || {}} option={optionSelected} />
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
    </React.Fragment>
  );
};

export default Delayed;
