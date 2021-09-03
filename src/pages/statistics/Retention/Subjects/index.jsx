import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../../../components/Header";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import Export from "../../../../components/Export";
import DelayedGraph from "./Graph";
import "./style.css";
import RetentionSlider from "../../../../components/Slider";
import _ from 'underscore';
import { Alert, SelectPicker } from "rsuite";

import "rsuite/dist/styles/rsuite-default.css";

const RetentionSubjects = () => {
  const query = "/statistics/retention/subjects";
  const [delayedData, setDelayedData] = useState(null);
  const [dataCSV, setDataCSV] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [variable, setVariable] = useState("1411167");
  const [selectedData, setSelectedData] = useState({});
  const history = useHistory();
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const response = await updateGraph(query, loading);
      if (response) {
        setAllData(response);
      }
      const subject = findSubject(variable, response.data.subjectRetentionSummary);
      setSelectedData(subject)

      setLoading(false);
    };

    fetchData();
  }, []);

  const setAllData = response => {
    setDelayedData(parseDelayedData(response.data));
    setDataCSV(response.dataCSV.subjectRetention);
    const subject = findSubject(variable, response.data.subjectRetentionSummary);
    setFirstTerm(subject.from)
    setLastTerm(subject.to);
  };
    
  const handleSlider = async (from, to) => {
    const response = await updateGraph(query, loading, from, to);
    if (response) {
      setAllData(response);
      setSelectedData(findSubject(selectedData.subjectCode, response.data.subjectRetentionSummary));
    }
  };

  const selectableValues = () => {
    return delayedData.map(subj => {
      return {
        label: subj.subjectName,
        value: subj.subjectCode,
        role: "Master",
      };
    });
  };

  const handleVariableChange = variable => {
    setVariable(variable);
    const subject = findSubject(variable, delayedData);
    if (subject.retention.length === 0) {
      Alert.error("Disciplina sem dados!");
    } else {
      setSelectedData(subject)
    }
    console.log(subject)
    setFirstTerm(subject.from)
    setLastTerm(subject.to);
  };

  const findSubject = (code, subjects) => {
    return { ...subjects.find(subj => subj.subjectCode === code) };
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
            <RetentionSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} />
            <div className='graph-delayed'>
              <DelayedGraph data={selectedData || {}} option={variable} />
              <div className='select'>
                <h6>Disciplina</h6>
                <SelectPicker 
                  data={selectableValues(delayedData)}
                  onChange={value => handleVariableChange(value)}
                  defaultValue={variable}
                  className='selector-teachers'
                  searchable={false}
                  cleanable={false}
                />
              </div>
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
