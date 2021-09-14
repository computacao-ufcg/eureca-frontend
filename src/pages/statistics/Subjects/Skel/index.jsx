import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Header } from "../../../../components";
import updateGraph from "../../../../components/Slider/util/updateGraph";
import SubjectSlider from "../../../../components/Slider";
import Export from "../../../../components/Export";

import Graph from "./Graph";

import { variables } from "./util";
import { Alert, SelectPicker } from "rsuite";

const Mandatory = ({ query, title }) => {
  const [subjectsData, setSubjectsData] = useState([]);
  const [subjectsCSV, setSubjectsCSV] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [variable, setVariable] = useState("totalEnrolled");
  const [label, setLabel] = useState("Total de matrículas");
  const [selectedSubject, setSelectedSubject] = useState();

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await updateGraph(query, loading);
      if (response) {
        const firstSubjectWithValues = findFirstSubjectWithValues(response.data.subjects);
        setSelectedSubject(firstSubjectWithValues);
        setAllData(response);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const findFirstSubjectWithValues = subjects => {
    return { ...(subjects.find(subject => subject.terms.length > 0) || {}) };
  };

  const handleSlider = async (from, to) => {
    const response = await updateGraph(query, loading, from, to);
    if (response) {
      setAllData(response);
      setSelectedSubject(findSubject(selectedSubject.subjectCode, response.data.subjects));
    }
  };

  const setAllData = response => {
    setSubjectsData(response.data.subjects);
    setSubjectsCSV(response.dataCSV.subjects);
    const subject = findFirstSubjectWithValues(response.data.subjects);
    console.log(subject);
    setFirstTerm(subject.terms[0].term);
    setLastTerm(subject.terms[subject.terms.length - 1].term);
  };

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  const handleSubjectChange = code => {
    const subject = findSubject(code);
    if (subject.terms.length === 0) {
      Alert.error("Disciplina sem dados!");
    } else {
      setSelectedSubject(subject);
    }
    setFirstTerm(subject.terms[0].term);
    setLastTerm(subject.terms[subject.terms.length - 1].term);
  };

  const findSubject = (code, subjects = subjectsData) => {
    return { ...subjects.find(subj => subj.subjectCode === code) };
  };

  const selectableValues = () => {
    return subjectsData.map(subj => {
      return {
        label: subj.subjectName,
        value: subj.subjectCode,
        role: "Master",
      };
    });
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
              <div className='alumni-title'>Disciplinas {`${title || ""}`}</div>
              <SubjectSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} />
              <div className='graph-delayed'>
                <Graph data={selectedSubject?.terms || []} variable={variable} label={label} />
                <div className='selectors'>
                  <SelectPicker
                    onChange={value => handleVariableChange(value)}
                    data={variables}
                    className='selector'
                    defaultValue={variable}
                    cleanable={false}
                  />
                  <SelectPicker
                    onChange={value => handleSubjectChange(value)}
                    data={selectableValues(subjectsData)}
                    className='selector'
                    defaultValue={selectedSubject.subjectCode}
                    cleanable={false}
                  />
                </div>
              </div>
              <Export data={subjectsCSV} name={"subjects"} />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Mandatory;
