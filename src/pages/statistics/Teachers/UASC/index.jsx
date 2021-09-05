import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { SelectPicker } from "rsuite";
import { FiArrowLeft } from "react-icons/fi";

import TeachersSlider from "../../../../components/Slider";
import TeachersGraph from "./Graph";
import updateGraph from "../../../../components/Slider/util/updateGraph";

import Export from "../../../../components/Export";
import Header from "../../../../components/Header";

import { api_EB } from "../../../../services/api";

import "./style.css";
import {
  baseTeachersEndpoint,
  endpointWithCourseAndCurriculumAlternative,
  eurecaAuthenticationHeader,
  baseTeachersEndpointCsv
} from "../../../../config/defaultValues";

const UASCTeachers = () => {
  const endpoint = `${baseTeachersEndpoint}?academicUnitId=${1411}`;
  const query = endpointWithCourseAndCurriculumAlternative(endpoint);

  const [variable, setVariable] = useState("successRate");
  const [label, setLabel] = useState("Taxa de sucesso");
  const [teacher, setTeacher] = useState('1010160')
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [firstTerm, setFirstTerm] = useState();
  const [lastTerm, setLastTerm] = useState();
  const [loading, setLoading] = useState(true);

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };


  useEffect(() => {
    (async function () {
      const endpoint = `${baseTeachersEndpoint}?academicUnitId=${1411}`;
      const endpointCsv = `${baseTeachersEndpointCsv}?academicUnitId=${1411}`;
      const query = endpointWithCourseAndCurriculumAlternative(endpoint);
      const query2 = endpointWithCourseAndCurriculumAlternative(endpointCsv);

      try {
        const res = await api_EB.get(query, eurecaAuthenticationHeader);
        const res2 = await api_EB.get(query2, eurecaAuthenticationHeader);
        if (res && res2) {
          
          setData(res.data.teachers);
          setDataExport(res2.data.teachers);
          const teacherData = findTeacher(teacher, res.data.teachers);
          setSelectedData(teacherData)
          setFirstTerm(teacherData.from)
          setLastTerm(teacherData.to);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
    const response = await updateGraph(query, loading, from, to);
    if (response) {
 
    }
  };

  const handleTeacherVariableChange = variable => {
    setTeacher(variable);
    const teacher = findTeacher(variable, data);
    setSelectedData(teacher)
  };

  const findTeacher = (id, teachers) => {
    return { ...teachers.find(teacher => teacher.teacherId === id) };
  };

  const variables = [
    {
      label: "Taxa de sucesso",
      value: "successRate",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por nota",
      value: "averageFailDueToGrade",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por falta",
      value: "averageFailDueToAbsences",
      role: "Master",
    },
    {
      label: "Taxa de trancamento",
      value: "suspendedRate",
      role: "Master",
    },
    {
      label: "Número de matrículas",
      value: "totalEnrollments",
      role: "Master",
    },
  ];
  const history = useHistory();

  return (
    <React.Fragment>
      <Header />
      <div className='teachers-uasc-main'>
        <div className='teachers-uasc-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='teachers-uasc-slider'>
            <div className='teachers-uasc-title'>Docentes - UASC</div>
            {console.log(selectedData)}
            {/* <TeachersSlider changeSlider={handleSlider} firstTerm={firstTerm} lastTerm={lastTerm} /> */}
            <div className='graph'>
              <TeachersGraph variable={variable} data={selectedData || {}} label={label} />
              <div className='selectors'>
                <h6>Variável</h6>
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-teachers'
                  defaultValue={variable}
                  searchable={false}
                  cleanable={false}
                />
                <SelectPicker
                    onChange={value => handleTeacherVariableChange(value)}
                    data={selectableValues(data)}
                    className='selector'
                    defaultValue={teacher}
                    cleanable={false}
                  />
              </div>
            </div>
            <Export data={dataExport} name={"teachers"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UASCTeachers;
