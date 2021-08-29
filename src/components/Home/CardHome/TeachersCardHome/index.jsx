import React, { useEffect, useState } from "react";

import "../style.css";
import TitleCardHome from "../TitleCardHome";
import TeachersSummaryCardHome from "./TeachersSummaryCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";

import { Link } from "react-router-dom";

import { api_EB } from "../../../../services/api";
import { labelTeachers } from "./util";
import {
  baseTeachersEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const TeachersCardHome = () => {
  const [dataTeachers, setDataTeachers] = useState();
  const [optionTeachers, setOptionTeachers] = useState("UASC");
  const [titleTeachers, setTitleTeachers] = useState("UASC");
  const [labels, setLabels] = useState(labelTeachers);
  const [cards, setCards] = useState({
    card1: true,
    card2: true,
    card3: true,
    card4: true,
    card5: true,
    card6: true,
    card7: true,
  });

  const [propsTeachers, setPropsTeachers] = useState([]);

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    const endpoint = `${baseTeachersEndpoint}/summary`;
    const query = endpointWithCourseAndCurriculum(endpoint);

    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res) {
      setDataTeachers(res.data);
      setPropsTeachersUASC(res.data);
    }
  };

  const formatProps = academicUnit => {
    return [
      academicUnit.teachersCount.toFixed(1),
      academicUnit.averageFailureDueToGradeRate.toFixed(1),
      academicUnit.averageFailureDueToAbsenceRate.toFixed(1),
      academicUnit.averageSuspendedRate.toFixed(1),
      academicUnit.averageSuccessRate.toFixed(1),
      `${academicUnit.max.count} (${academicUnit.max.term})`,
      `${academicUnit.min.count} (${academicUnit.min.term})`,
    ];
  };

  const setPropsTeachersUASC = data => {
    const props = formatProps(data.summaryMap[1411]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAF = data => { 
    const props = formatProps(data.summaryMap[1108]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };


  const setPropsTeachersUAMat = data => {
    const props = formatProps(data.summaryMap[1109]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAEst = data => {
    const props = formatProps(data.summaryMap[1114]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAAC = data => { 
    const props = formatProps(data.summaryMap[1301]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAAMi = data => { 
    const props = formatProps(data.summaryMap[1302]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAEF = data => { 
    const props = formatProps(data.summaryMap[1303]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };


  const setPropsTeachersUACS = data => { 
    const props = formatProps(data.summaryMap[1305]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  const setPropsTeachersUAL = data => {
    const props = formatProps(data.summaryMap[1307]);
    setPropsTeachers(props);
    setCards({ ...cards, card4: true, card5: true, card6: true, card7: true });
  };

  return (
    <React.Fragment>
      <div className='card-home-area1'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"DOCENTES"} />
          </div>
          <div className='summary-card-content'>
            <TeachersSummaryCardHome
              cards={cards}
              option={optionTeachers}
              dataTeachers={propsTeachers}
              data={labels}
              title={titleTeachers}
            />
            <div className='type-teachers-grid'>
              <div className='type-teachers'>
                <div className={optionTeachers === "UASC" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UASC") {
                        setOptionTeachers("UASC");
                        setTitleTeachers("UASC");
                        setLabels(labelTeachers);
                        setPropsTeachersUASC(dataTeachers);
                      }
                    }}
                  >
                    UASC
                  </button>
                </div>
                <div className={optionTeachers === "UAMat" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAMat") {
                        setOptionTeachers("UAMat");
                        setTitleTeachers("UAMat");
                        setLabels(labelTeachers);
                        setPropsTeachersUAMat(dataTeachers);
                      }
                    }}
                  >
                    UAMat
                  </button>
                </div>
                <div className={optionTeachers === "UAEst" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAEst") {
                        setOptionTeachers("UAEst");
                        setTitleTeachers("UAEst");
                        setLabels(labelTeachers);
                        setPropsTeachersUAEst(dataTeachers);
                      }
                    }}
                  >
                    UAEst
                  </button>
                </div>
                <div className={optionTeachers === "UAL" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAL") {
                        setOptionTeachers("UAL");
                        setTitleTeachers("UAL");
                        setLabels(labelTeachers);
                        setPropsTeachersUAL(dataTeachers);
                      }
                    }}
                  >
                    UAL
                  </button>
                </div>
                <div className={optionTeachers === "UACS" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UACS") {
                        setOptionTeachers("UACS");
                        setTitleTeachers("UACS");
                        setLabels(labelTeachers);
                        setPropsTeachersUACS(dataTeachers);
                      }
                    }}
                  >
                    UACS
                  </button>
                </div>
              </div>
              <div className='type-teachers'>
                <div className={optionTeachers === "UAAMi" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAAMi") {
                        setOptionTeachers("UAAMi");
                        setTitleTeachers("UAAMi");
                        setLabels(labelTeachers);
                        setPropsTeachersUAAMi(dataTeachers);
                      }
                    }}
                  >
                    UAAMi
                  </button>
                </div>
                <div className={optionTeachers === "UAF" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAF") {
                        setOptionTeachers("UAF");
                        setTitleTeachers("UAF");
                        setLabels(labelTeachers);
                        setPropsTeachersUAF(dataTeachers);
                      }
                    }}
                  >
                    UAF
                  </button>
                </div>
                <div className={optionTeachers === "UAAC" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAAC") {
                        setOptionTeachers("UAAC");
                        setTitleTeachers("UAAC");
                        setLabels(labelTeachers);
                        setPropsTeachersUAAC(dataTeachers);
                      }
                    }}
                  >
                    UAAC
                  </button>
                </div>
                <div className={optionTeachers === "UAEF" ? "type-teacher-selected" : "type-teacher"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionTeachers !== "UAEF") {
                        setOptionTeachers("UAEF");
                        setTitleTeachers("UAEF");
                        setLabels(labelTeachers);
                        setPropsTeachersUAEF(dataTeachers);
                      }
                    }}
                  >
                    UAEF
                  </button>
                </div>
              </div>
              
            </div>
          </div>

          <div className='card-home-content-footer'>
            <Link to={"/statistics/teachers/" + optionTeachers}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/statistics/teachers/glossary"}>
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

export default TeachersCardHome;
