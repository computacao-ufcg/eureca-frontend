import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Export from "../../../../components/Export";
import Header from "../../../../components/Header";

import EnrollmentsGraph from "./Graph";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import EnrollmentSlider from "../Slider";

import { api_EB } from "../../../../services/api";

import "./style.css";
import {
  baseEnrollmentsEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const EnrollmentsOptative = () => {
  const [data, setData] = useState([]);
  const [variable, setVariable] = useState("totalEnrollments");
  const [label, setLabel] = useState("Total de matrículas");

  useEffect(() => {
    (async function () {
      const endpoint = `${baseEnrollmentsEndpoint}/summary/csv`;
      const query = endpointWithCourseAndCurriculum(endpoint);

      try {
        const res = await api_EB.get(query, eurecaAuthenticationHeader);

        if (res) {
          setData(res.data.enrollmentsSummary);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  const variables = [
    {
      label: "Total de matrículas",
      value: "totalEnrollments",
      role: "Master",
    },
    {
      label: "Média de matrículas por turma",
      value: "averageEnrollmentsPerClass",
      role: "Master",
    },
    {
      label: "Número de turmas",
      value: "totalClasses",
      role: "Master",
    },
  ];

  const history = useHistory();

  return (
    <React.Fragment>
      <Header />
      <div className='enrollments-optative-main'>
        <div className='enrollments-optative-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='enrollments-optative-slider'>
            <div className='enrollments-optative-title'>Matrículas - Disciplinas Optativas</div>
            <EnrollmentSlider changeSlider={() => {}} />
            <div className='graph'>
              <EnrollmentsGraph variable={variable} data={data} label={label} />
              <div className='selectors'>
                <h6>Variável</h6>
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                  searchable={false}
                  cleanable={false}
                />
              </div>
            </div>
            <Export data={data} name={"enrollments"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnrollmentsOptative;
