import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import DelayedSlider from "../../../../components/Slider";
import DelayedGraph from "./Graph";
import Export from "../../../../components/Export";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { api_EB } from "../../../../services/api";

import "./style.css";

import { select_items } from "./util";

const Delayed = () => {
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
      await updateGraph();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSlider = async (from, to) => {
    await updateGraph(from, to);
  };

  const updateGraph = async (from, to) => {
    const queryStatistics = getSummaryQuery(from, to);
    const queryCSV = getCSVQuery(from, to);
    const options = {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    };

    const resSummary = await api_EB.get(queryStatistics, options);
    const resCSV = await api_EB.get(queryCSV, options);

    if (resSummary) {
      console.log(resSummary.data);
      const delayed = resSummary.data.terms.map(element => {
        return {
          ...element.metricsSummary.metrics,
          term: element.admissionTerm,
        };
      });

      if (loading) {
        setFirstTerm(resSummary.data.from);
        setLastTerm(resSummary.data.to);
      }

      setDelayedData(delayed);
    } else {
      console.error(resSummary.statusText);
    }

    if (resCSV) {
      setDataCSV(resCSV.data);
    } else {
      console.error(resCSV.statusText);
    }
  };

  const getSummaryQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/delayed${f}${t}`;
  };

  const getCSVQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/delayed/csv${f}${t}`;
  };

  return (
    <React.Fragment>
      <Header />
      <div className='alumni-main'>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <div className='alumni-content'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='alumni-slider'>
              <div className='alumni-title'>Retidos</div>
              <DelayedSlider
                changeSlider={handleSlider}
                firstTerm={firstTerm}
                lastTerm={lastTerm}
              />
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
        )}
      </div>
    </React.Fragment>
  );
};

export default Delayed;
