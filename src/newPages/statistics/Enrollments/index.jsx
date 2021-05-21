import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Export from "../../../newComponents/Export";
import Header from "../../../newComponents/Header";

import EnrollmentsGraph from "./Graph";

import { FiArrowLeft } from "react-icons/fi";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import EnrollmentSlider from "./Slider";

import "./style.css";

const Enrollments = () => {
  const [disciplineOption, setDisciplineOption] = useState("Obrigatórias");
  const [variable, setVariable] = useState("Total de matrículas");

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
              <EnrollmentsGraph />
              <div className='selectors'>
                <SelectPicker
                  onChange={value => setDisciplineOption(value)}
                  data={disciplineTypes}
                  className='selector-enrollments'
                  defaultValue={disciplineOption}
                />
                <SelectPicker
                  onChange={value => setVariable(value)}
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
