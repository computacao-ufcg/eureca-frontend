import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

import TitleCardHome from "../TitleCardHome";
import { api_EB } from "../../../../services/api";

import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";

import EnrollmentsSummaryCardHome from "./EnrollmentsSummaryCardHome";

const EnrollmentsCardHome = props => {
  const [data, setData] = useState();
  const [optionEnrollment, setOptionEnrollment] = useState("mandatory");
  const [title, setTitle] = useState("Obrigatórias");
  const [labels, setLabels] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api_EB.get("/statistics/enrollments/summary", {
        headers: {
          "Authentication-Token": sessionStorage.getItem("eureca-token"),
        },
      });
      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div className='card-home-area1'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"MATRÍCULAS"} />
          </div>
          <div className='summary-card-content'>
            {data && <EnrollmentsSummaryCardHome data={data} title={title} />}
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
                        setLabels([]);
                        setData(data);
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
                        setLabels([]);
                        setData(data);
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
                        setLabels([]);
                        setData(data);
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
                        setLabels([]);
                        setData(data);
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
