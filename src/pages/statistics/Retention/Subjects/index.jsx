import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../../../components/Header";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import Export from "../../../../components/Export";
import DelayedGraph from "./Graph";
import _ from 'underscore';

import "rsuite/dist/styles/rsuite-default.css";

const RetentionSubjects = () => {
  const query = "/statistics/retention/subjects";
  const [delayedData, setDelayedData] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
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

  const setAllData = response => {
    setDelayedData(parseDelayedData(response.data));
    setDataCSV(response.dataCSV.subjectRetention);
  };

  const parseDelayedData = data => {

    const groupedByIdealTerm = _.groupBy(data.subjectRetentionSummary, 'idealTerm');
   
    return Object.values(groupedByIdealTerm)
                                    .map(idealTerm => {
                                      return idealTerm.sort((a, b) =>  {
                                        return b.retention - a.retention;
                                      })
                                    }).flat();
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
            <div className='alumni-title'>Disciplinas</div>
            <div className='graph-delayed'>
              <DelayedGraph data={delayedData || {}} option="retention" />
            </div>
            <Export data={dataCSV} name={"delayed"} />
          </div>
        </div>
        )} 
      </div>
    </React.Fragment>
  );
};

export default RetentionSubjects;
