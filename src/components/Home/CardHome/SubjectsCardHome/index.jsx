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
      setDataSubjects(res.data);
      setPropsSubjectsMandatory(res.data);
    } else {
      console.log(res.statusText);
    }
  };

  const formatProps = subject => {
    return [
      "",
      subject.failedDueToGrade.average.toFixed(1) + "% ",
      subject.failedDueToAbsences.average.toFixed(1) + "% ",
      subject.failedDueToCanceling.average.toFixed(1) + "% ",
      subject.success.average.toFixed(1) + "% ",
      subject.absoluteRetention.average.toFixed(1) + "% ",
      subject.relativeRetention.average.toFixed(1) + "% ",
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
