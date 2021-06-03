import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import TitleCardHome from "../TitleCardHome";
import SubjectsSummaryCardHome from "./SubjectsSummaryCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import { api_EB } from "../../../../services/api";
import "../style.css";

const SubjectsCardHome = () => {
  const labelActives = [
    "REPROVAÇÕES/NOTA",
    "REPROVAÇÕES/FALTA",
    "TRANCAMENTOS",
    "TAXA DE SUCESSO",
    "RETENÇÃO ABSOLUTA",
    "RETENÇÃO RELATIVA",
  ];
  const [optionSubject, setOptionSubject] = useState("obrigatórias");
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
  const [labels, setLabels] = useState(labelActives);
  const [dataSubjects, setDataSubjects] = useState();

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    let query = `/statistics/subjects/summary`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      console.log(res.data);
      setDataSubjects(res.data);
      setPropsSubjectsMandatory(res.data);
    } else {
      console.log(res.statusText);
    }
  };

  const setPropsSubjectsMandatory = data => {
    setPropsSubjects([
      "",
      data.mandatory.failedDueToGrade.average.toFixed(1) + "% ",
      data.mandatory.failedDueToAbsences.average.toFixed(1) + "% ",
      data.mandatory.failedDueToCanceling.average.toFixed(1) + "% ",
      data.mandatory.success.average.toFixed(1) + "% ",
      data.mandatory.absoluteRetention.average.toFixed(1) + "% ",
      data.mandatory.relativeRetention.average.toFixed(1) + "% ",
    ]);
  };

  const setPropsSubjectsOptional = data => {
    setPropsSubjects([
      "",
      data.optional.failedDueToGrade.average.toFixed(1) + "% ",
      data.optional.failedDueToAbsences.average.toFixed(1) + "% ",
      data.optional.failedDueToCanceling.average.toFixed(1) + "% ",
      data.optional.success.average.toFixed(1) + "% ",
      data.optional.absoluteRetention.average.toFixed(1) + "% ",
      data.optional.relativeRetention.average.toFixed(1) + "% ",
    ]);
  };

  const setPropsSubjectsElective = data => {
    setPropsSubjects([
      "",
      data.elective.failedDueToGrade.average.toFixed(1) + "% ",
      data.elective.failedDueToAbsences.average.toFixed(1) + "% ",
      data.elective.failedDueToCanceling.average.toFixed(1) + "% ",
      data.elective.success.average.toFixed(1) + "% ",
      data.elective.absoluteRetention.average.toFixed(1) + "% ",
      data.elective.relativeRetention.average.toFixed(1) + "% ",
    ]);
  };

  const setPropsSubjectsComplementary = data => {
    setPropsSubjects([
      "",
      data.complementary.failedDueToGrade.average.toFixed(1) + "% ",
      data.complementary.failedDueToAbsences.average.toFixed(1) + "% ",
      data.complementary.failedDueToCanceling.average.toFixed(1) + "% ",
      data.complementary.success.average.toFixed(1) + "% ",
      data.complementary.absoluteRetention.average.toFixed(1) + "% ",
      data.complementary.relativeRetention.average.toFixed(1) + "% ",
    ]);
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
              data={labels}
              title={titleSubject}
            />
            <div className='type-students-grid'>
              <div className='type-students'>
                <div
                  className={
                    optionSubject === "obrigatórias"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "obrigatórias") {
                        setOptionSubject("obrigatórias");
                        setTitleSubject("Obrigatórias");
                        setPropsSubjectsMandatory(dataSubjects);
                      }
                    }}
                  >
                    OBRIGATÓRIAS
                  </button>
                </div>
                <div
                  className={
                    optionSubject === "optativas"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "optativas") {
                        setOptionSubject("optativas");
                        setTitleSubject("Optativas");
                        setPropsSubjectsOptional(dataSubjects);
                      }
                    }}
                  >
                    OPTATIVAS
                  </button>
                </div>
                <div
                  className={
                    optionSubject === "eletivas"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "eletivas") {
                        setOptionSubject("eletivas");
                        setTitleSubject("Eletivas");
                        setPropsSubjectsElective(dataSubjects);
                      }
                    }}
                  >
                    ELETIVAS
                  </button>
                </div>
                <div
                  className={
                    optionSubject === "complementares"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionSubject !== "complementares") {
                        setOptionSubject("complementares");
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
            <Link to={"/statistics/subjects/"}>
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
