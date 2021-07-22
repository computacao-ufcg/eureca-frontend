import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../../../components/Header";
import AlumniSlider from "../../../../components/Slider";
import AlumniGraph from "./Graph";
import Export from "../../../../components/Export";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { api_EB } from "../../../../services/api";

import "./style.css";

import { select_items } from "./util";

const Alumni = () => {
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
      await updateGraph();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSlider = async (from, to) => {
    await updateGraph(from, to);
  };

  const updateGraph = async (from, to) => {
    const querySummary = getSummaryQuery(from, to);
    const queryCSV = getCSVQuery(from, to);
    const options = {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    };

    const resSummary = await api_EB.get(querySummary, options);
    const resCSV = await api_EB.get(queryCSV, options);

    if (resSummary) {
      setDataEgressos(resSummary.data.alumniPerTermSummaries);

      if (loading) {
        setFirstTerm(resSummary.data.from);
        setLastTerm(resSummary.data.to);
      }
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
    return `/statistics/students/alumni${f}${t}`;
  };

  const getCSVQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/alumni/csv${f}${t}`;
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
