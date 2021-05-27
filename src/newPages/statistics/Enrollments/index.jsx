import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Export from "../../../newComponents/Export";
import Header from "../../../newComponents/Header";

import EnrollmentsGraph from "./Graph";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import EnrollmentSlider from "./Slider";

import { api_EB } from "../../../services/api";

import "./style.css";

const Enrollments = () => {
  const [data, setData] = useState([]);
  const [disciplineOption, setDisciplineOption] = useState("Obrigatórias");
  const [variable, setVariable] = useState("totalEnrollments");
  const [label, setLabel] = useState("Total de matrículas");

  useEffect(() => {
    (async function () {
      const query = `/statistics/enrollments/summary/csv?from=1950.0&language=PORTUGUESE&to=2049.9`;
      try {
        const res = await api_EB.get(query, {
          headers: {
            "Authentication-Token": sessionStorage.getItem("eureca-token"),
          },
        });

        // console.log(res.data);
        if (res) {
          setData(res.data);
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

  const disciplineTypes = [
    {
      label: "Obrigatórias",
      value: "obrigatorias",
      role: "Master",
    },
    {
      label: "Eletivas",
      value: "eletivas",
      role: "Master",
    },
    {
      label: "Optativas",
      value: "optatives",
      role: "Master",
    },
    {
      label: "Complementares",
      value: "complementary",
      role: "Master",
    },
  ];

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
                <SelectPicker
                  onChange={value => setDisciplineOption(value)}
                  data={disciplineTypes}
                  className='selector-enrollments'
                  defaultValue={disciplineOption}
                />
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                />
              </div>
            </div>
            <Export data={[]} name={"enrollments"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Enrollments;
