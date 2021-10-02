import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import TitleCardHome from "../TitleCardHome";
import SubjectsSummaryCardHome from "./SubjectsSummaryCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import { api_EB } from "../../../../services/api";
import "../style.css";
import {
  baseSubjectsEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const SubjectsCardHome = () => {
  const labelActives = [
    "MÉDIA DE REPROVAÇÕES/NOTA",
    "MÉDIA DE REPROVAÇÕES/FALTA",
    "MÉDIA DE TRANCAMENTOS",
    "MÉDIA DE APROVAÇÕES",
    "MÉDIA DE MATRÍCULADOS",
    "MÉDIA DE DISPENSAS",
  ];

  const [optionSubject, setOptionSubject] = useState("mandatory");
  const [titleSubject, setTitleSubject] = useState("Obrigatórias");
  const [cards, setCards] = useState({
    card1: true,
    card2: true,
    card3: true,
    card4: true,
    card5: true,
    card6: true,
    card7: true,
  });
  const [propSubjects, setPropsSubjects] = useState([]);
  const [dataSubjects, setDataSubjects] = useState();

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    const endpoint = `${baseSubjectsEndpoint}/summary`;
    const query = endpointWithCourseAndCurriculum(endpoint);

    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res) {
      setDataSubjects(res.data);
      setPropsSubjectsMandatory(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  const formatProps = subject => {
    const subjectStatistics = subject.subjectMetricsStatistics;

    return [
      subject.subjectsCount,
      subjectStatistics.failedDueToGrade.average.toFixed(1) + "% ",
      subjectStatistics.failedDueToAbsences.average.toFixed(1) + "% ",
      subjectStatistics.cancelled.average.toFixed(1) + "% ",
      subjectStatistics.succeeded.average.toFixed(1) + "% ",
      subjectStatistics.totalEnrolled.average.toFixed(1) + "% ",
      subjectStatistics.exempted.average.toFixed(1) + "% ",
    ];
  };

  const setPropsSubjectsMandatory = data => {
    const props = formatProps(data.mandatory);
    setPropsSubjects(props);
  };

  const setPropsSubjectsOptional = data => {
    const props = formatProps(data.optional);
    setPropsSubjects(props);
  };

  const setPropsSubjectsElective = data => {
    const props = formatProps(data.elective);
    setPropsSubjects(props);
  };

  const setPropsSubjectsComplementary = data => {
    const props = formatProps(data.complementary);
    setPropsSubjects(props);
  };

  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"DISCIPLINAS"} />
          </div>

          <div className='summary-card-content'>
            <SubjectsSummaryCardHome
              cards={cards}
              option={optionSubject}
              dataSubjects={propSubjects}
              labels={labelActives}
              title={titleSubject}
            />
            <div className='type-students-grid'>
              <div className='type-students'>
                <div className={optionSubject === "mandatory" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "mandatory") {
                        setOptionSubject("mandatory");
                        setTitleSubject("Obrigatórias");
                        setPropsSubjectsMandatory(dataSubjects);
                      }
                    }}
                  >
                    OBRIGATÓRIAS
                  </button>
                </div>
                <div className={optionSubject === "optional" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "optional") {
                        setOptionSubject("optional");
                        setTitleSubject("Optativas");
                        setPropsSubjectsOptional(dataSubjects);
                      }
                    }}
                  >
                    OPTATIVAS
                  </button>
                </div>
                <div className={optionSubject === "elective" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "elective") {
                        setOptionSubject("elective");
                        setTitleSubject("Eletivas");
                        setPropsSubjectsElective(dataSubjects);
                      }
                    }}
                  >
                    ELETIVAS
                  </button>
                </div>
                <div className={optionSubject === "complementary" ? "type-student-selected" : "type-student"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "complementary") {
                        setOptionSubject("complementary");
                        setTitleSubject("Complementares");
                        setPropsSubjectsComplementary(dataSubjects);
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
            <Link to={"/statistics/subjects/search"}>
              <button type='button'>BUSCAR</button>
            </Link>
            <Link to={`/statistics/subjects/${optionSubject}`}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/statistics/subjects/glossary"}>
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

export default SubjectsCardHome;
