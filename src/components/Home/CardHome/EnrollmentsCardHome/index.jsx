import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

import TitleCardHome from "../TitleCardHome";
import { api_EB } from "../../../../services/api";

import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";

import EnrollmentsSummaryCardHome from "./EnrollmentsSummaryCardHome";
import {
  baseEnrollmentsEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const EnrollmentsCardHome = () => {
  const labelEnrollments = [
    "MÉDIA DE TURMAS/DISCIPLINA",
    "MÉDIA DE TURMAS/PERÍODO",
    "MÉDIA DE MATRÍCULAS/DISCIPLINA",
    "MÉDIA DE MATRÍCULAS/PERÍODO",
    "NUMERO MÁXIMO",
    "NUMERO MÍNIMO",
  ];
  const [data, setData] = useState();
  const [propsEnrollment, setPropsEnrollments] = useState([]);
  const [optionEnrollment, setOptionEnrollment] = useState("mandatory");
  const [title, setTitle] = useState("Obrigatórias");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const endpoint = `${baseEnrollmentsEndpoint}/summary`;
      const query = endpointWithCourseAndCurriculum(endpoint);

      const res = await api_EB.get(query, eurecaAuthenticationHeader);
      if (res) {
        setData(res.data);
        setPropsEnrollmentsMandatory(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formatProps = subject => {
    const enrollmentsSummary = subject.summary;

    return [
      enrollmentsSummary.averageSubjectsCount.toFixed(1),
      enrollmentsSummary.averageClassesPerSubject.toFixed(1),
      enrollmentsSummary.averageClassesPerTerm.toFixed(1),
      enrollmentsSummary.averageEnrollmentsPerSubject.toFixed(1),
      enrollmentsSummary.averageEnrollmentsPerTerm.toFixed(1),
      subject.max.count +" (" + subject.max.term +")",
      subject.min.count +" (" + subject.min.term +")",
    ];
  };
  
  const setPropsEnrollmentsMandatory = data => {
    const props = formatProps(data.mandatory);
    setPropsEnrollments(props);
  };

  const setPropsEnrollmentsOptional = data => {
    const props = formatProps(data.optional);
    setPropsEnrollments(props);
  };

  const setPropsEnrollmentsElective = data => {
    const props = formatProps(data.elective);
    setPropsEnrollments(props);
  };

  const setPropsEnrollmentsComplementary = data => {
    const props = formatProps(data.complementary);
    setPropsEnrollments(props);
  };

  return (
    <React.Fragment>
      <div className='card-home-area1'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"MATRÍCULAS"} />
          </div>
          <div className='summary-card-content'>
           <EnrollmentsSummaryCardHome data={propsEnrollment} option={optionEnrollment} title={title} labels ={labelEnrollments}/>
            <div className='type-students-grid'>
              <div className='type-students'>
                <div className={optionEnrollment === "mandatory" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "mandatory") {
                        setOptionEnrollment("mandatory");
                        setTitle("Obrigatórias");
                        setPropsEnrollmentsMandatory(data);
                      }
                    }}
                  >
                    OBRIGATÓRIAS
                  </button>
                </div>
                <div className={optionEnrollment === "optative" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "optative") {
                        setOptionEnrollment("optative");
                        setTitle("Optativas");
                        setPropsEnrollmentsOptional(data);
                      }
                    }}
                  >
                    OPTATIVAS
                  </button>
                </div>
                <div className={optionEnrollment === "elective" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "elective") {
                        setOptionEnrollment("elective");
                        setTitle("Eletivas");
                        setPropsEnrollmentsElective(data);
                      }
                    }}
                  >
                    ELETIVAS
                  </button>
                </div>
                <div className={optionEnrollment === "complementary" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "complementary") {
                        setOptionEnrollment("complementary");
                        setTitle("Complementares");
                        setPropsEnrollmentsComplementary(data);
                      }
                    }}
                  >
                    COMPLEMENTARES
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='card-home-content-footer'>
            <Link to={"/statistics/enrollments/" + optionEnrollment}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/statistics/enrollments/glossary"}>
              <button type='button'>GLOSSÁRIO</button>
            </Link>
            <div className='mask6'>
              <img src={Mask6} alt='mask6' />
            </div>
            <div className='mask5'>
              <img src={Mask5} alt='mask5' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnrollmentsCardHome;
