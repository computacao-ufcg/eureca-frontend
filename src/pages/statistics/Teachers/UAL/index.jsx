import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { SelectPicker } from "rsuite";
import { FiArrowLeft } from "react-icons/fi";

import TeachersSlider from "../Slider";
import TeachersGraph from "./Graph";

import Export from "../../../../components/Export";
import Header from "../../../../components/Header";

import { api_EB } from "../../../../services/api";

import "./style.css";
import {
  baseTeachersEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const UALTeachers = () => {
  const [variable, setVariable] = useState("successRate");
  const [label, setLabel] = useState("Taxa de sucesso");
  const [data, setData] = useState([]);
  const [dataExport, setDataExport] = useState([]);

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  useEffect(() => {
    (async function () {
      const endpoint = `${baseTeachersEndpoint}/summary`;
      const query = endpointWithCourseAndCurriculum(endpoint);

      try {
        const res = await api_EB.get(query, eurecaAuthenticationHeader);

        if (res) {
          setData(res.data);
          setDataExport(res.dataCSV.teachers);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
      <div className='teachers-ual-main'>
        <div className='teachers-ual-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='teachers-ual-slider'>
            <div className='teachers-ual-title'>Docentes - UAL</div>
            <TeachersSlider changeSlider={() => {}} />
            <div className='graph'>
              <TeachersGraph variable={variable} data={data} label={label} />
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
              </div>
            </div>
            <Export data={dataExport} name={"teachers"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UALTeachers;
