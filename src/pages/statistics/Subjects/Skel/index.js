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
        let firstSubjectWithValues = findFirstSubjectWithValues(response.data.subjects);
        firstSubjectWithValues["terms"] = formatTerms(firstSubjectWithValues);
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
    }
  };

  const setAllData = response => {
    setSubjectsData(response.data.subjects);
    setSubjectsCSV(response.dataCSV.subjects);
    setFirstTerm(firstTerm || response.firstTerm);
    setLastTerm(lastTerm || response.lastTerm);
  };

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  const handleSubjectChange = code => {
    let subject = findSubject(code);
    subject["terms"] = formatTerms(subject);
    if (subject.terms.length === 0) {
      Alert.error("Disciplina sem dados!");
    } else {
      setSelectedSubject(subject);
    }
  };

  const findSubject = code => {
    return { ...subjectsData.find(subj => subj.code === code) };
  };

  const formatTerms = subject => {
    return subject.terms.map(term => {
      return {
        term: term.term,
        ...term.metrics,
      };
    });
  };

  const selectableValues = () => {
    return subjectsData.map(subj => {
      return {
        label: subj.name,
        value: subj.code,
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
                    defaultValue={selectedSubject.code}
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
