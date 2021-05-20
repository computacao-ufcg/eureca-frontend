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
  const [optionEnrollment, setOptionEnrollment] = useState("obrigatorias");
  const [title, setTitle] = useState("OBRIGATÓRIAS");
  const [labels, setLabels] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api_EB.get("api/statistics/enrollments/summary", {
        headers: {
          "Authentication-Token": sessionStorage.getItem("eureca-token"),
        },
      });
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data);

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
                <div
                  className={
                    optionEnrollment === "obrigatorias"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "obrigatorias") {
                        setOptionEnrollment("obrigatorias");
                        setTitle("OBRIGATÓRIAS");
                        setLabels([]);
                        setData(data);
                      }
                    }}
                  >
                    OBRIGATÓRIAS
                  </button>
                </div>
                <div
                  className={
                    optionEnrollment === "optative"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "optative") {
                        setOptionEnrollment("optative");
                        setTitle("OPTATIVAS");
                        setLabels([]);
                        setData(data);
                      }
                    }}
                  >
                    OPTATIVAS
                  </button>
                </div>
                <div
                  className={
                    optionEnrollment === "eletivas"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "electives") {
                        setOptionEnrollment("electives");
                        setTitle("ELETIVAS");
                        setLabels([]);
                        setData(data);
                      }
                    }}
                  >
                    ELETIVAS
                  </button>
                </div>
                <div
                  className={
                    optionEnrollment === "complementares"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionEnrollment !== "complementares") {
                        setOptionEnrollment("complementares");
                        setTitle("COMPLEMENTARES");
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
            <Link to={"/newDesign/statistics/students/" + optionEnrollment}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/newDesign/statistics/enrollments/glossary"}>
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
