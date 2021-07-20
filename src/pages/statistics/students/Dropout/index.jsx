import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import DropoutSlider from "../../../../components/Slider";
import DropoutGraph from "./Graph";
import Export from "../../../../components/Export";

import { api_EB } from "../../../../services/api";

import "./style.css";

const Dropout = () => {
  const [dataEgressos, setDataEgressos] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
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

  const getSummaryQuery = (from = null, to = null) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/dropouts${f}${t}`;
  };

  const getCSVQuery = (from, to) => {
    const f = from ? `?from=${from}` : "";
    const t = to ? `&to=${to}` : "";
    return `/statistics/students/dropouts/csv${f}${t}`;
  };

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
      setDataEgressos(resSummary.data.dropoutPerTermSummaries);

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
              <DropoutSlider
                changeSlider={handleSlider}
                firstTerm={firstTerm}
                lastTerm={lastTerm}
              />
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
