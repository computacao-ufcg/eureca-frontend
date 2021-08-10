import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Export from "../../../components/Export";
import Header from "../../../components/Header";

import EnrollmentsGraph from "./Graph";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import EnrollmentSlider from "./Slider";

import { api_EB } from "../../../services/api";

import "./style.css";

const Enrollments = () => {
  const [data, setData] = useState([]);
  const [disciplineOption, setDisciplineOption] = useState("obrigatorias");
  const [variable, setVariable] = useState("totalEnrollments");
  const [label, setLabel] = useState("Total de matrículas");

  useEffect(() => {
    (async function () {
      const query = `/statistics/enrollments/summary/csv`;
      try {
        const headers = {
          "Authentication-Token": sessionStorage.getItem("eureca-token"),
        };
        const res = await api_EB.get(query, { headers });

        if (res) {
          setData(res.data.enrollmentsSummary);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [disciplineOption]);

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
      <div className='alumni-main'>
        <div className='alumni-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='alumni-slider'>
            <div className='alumni-title'>Matrículas</div>
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

export default Enrollments;
