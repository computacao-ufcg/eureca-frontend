import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Header } from "../../../../components";
import Export from "../../../../components/Export";

import TeachersSlider from "../../../../components/Slider";
import TeachersGraph from "./Graph";
import { Alert, SelectPicker } from "rsuite";

import "./style.css";
import updateTeachersGraph from "../../../../components/Slider/util/updateTeachersGraph";

const UASC = ({ query, title, csvQuery }) => {
  const academicUnit = query.substring(query.length - 4, query.length);

  const teachersId = {
    1411: "1610274",
    1307: "1030412",
    1305: "335092",
    1303: "1633361",
    1302: "6337241",
    1301: "338280",
    1114: "1740746",
    1109: "2051179",
    1108: "1154515",
  };

  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [variable, setVariable] = useState("succeededRate");
  const [label, setLabel] = useState("Taxa de sucesso");
  const [teacher, setTeacher] = useState(teachersId[academicUnit]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await updateTeachersGraph(query, csvQuery, loading);
      if (res) {
        const teacherData = findTeacher(teacher, res.data.teachers);
        setSelectedData(teacherData);
        setAllData(res);
        setFirstTerm(teacherData.from);
        setLastTerm(teacherData.to);
        console.log(res);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const findTeacher = (id, teachers) => {
    return { ...teachers.find(teacher => teacher.teacherId === id) };
  };

  const setAllData = res => {
    setData(res.data.teachers);
    setDataExport(res.dataCSV);
  };

  const selectableValues = () => {
    return data.map(teacher => {
      return {
        label: teacher.teacherName,
        value: teacher.teacherId,
        role: "Master",
      };
    });
  };

  const handleSlider = async (from, to) => {
    const response = await updateTeachersGraph(query, csvQuery, loading, from, to);
    if (response) {
      setAllData(response);
      setTeacher(findTeacher(teacher.teacherName, response.data.teachers));
    }
  };

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  const handleTeacherVariableChange = variable => {
    setTeacher(variable);
    const teacher = findTeacher(variable, data);
    if (teacher.terms.length === 0) {
      Alert.error("sem dados!");
    } else {
      setSelectedData(teacher);
    }
    setFirstTerm(teacher.from);
    setLastTerm(teacher.to);
  };

  const variables = [
    {
      label: "Taxa de sucesso",
      value: "succeededRate",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por nota",
      value: "failedDueToGradeRate",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por falta",
      value: "failedDueToAbsencesRate",
      role: "Master",
    },
    {
      label: "Taxa de trancamento",
      value: "suspendedRate",
      role: "Master",
    },
    {
      label: "Número de matrículas",
      value: "totalEnrolled",
      role: "Master",
    },
    {
      label: "Média de matrículas por turma",
      value: "averageEnrollmentsPerClass",
      role: "Master",
    },
    {
      label: "Cancelados",
      value: "cancelledRate",
      role: "Master",
    },
    {
      label: "Número de turmas",
      value: "classesCount",
      role: "Master",
    },
    {
      label: "Número de dispensas",
      value: "exemptedRate",
      role: "Master",
    },
    {
      label: "undefined",
      value: "ongoingRate",
      role: "Master",
    },
    {
      label: "Número de disciplinas",
      value: "subjectsCount",
      role: "Master",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <div className='teachers-main'>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <div className='teachers-content'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='teachers-slider'>
              <div className='teachers-title'>Docentes da {`${title || ""}`} </div>
              <TeachersSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} />
              <div className='graph'>
                <TeachersGraph variable={variable} data={selectedData.terms || {}} label={label} />
                <div className='selector'>
                  <div className='selector-teachers'>
                    <h6>Variável</h6>
                    <SelectPicker
                      onChange={value => handleVariableChange(value)}
                      data={variables}
                      defaultValue={variable}
                      searchable={false}
                      cleanable={false}
                    />
                  </div>
                  <div className='selector-teachers'>
                    <h6>Nome do docente</h6>
                    <SelectPicker
                      onChange={value => handleTeacherVariableChange(value)}
                      data={selectableValues(data)}
                      defaultValue={teacher}
                      cleanable={false}
                    />
                  </div>
                </div>
              </div>
              {/*<Export data={dataExport} name={"teachers"} />*/}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default UASC;
