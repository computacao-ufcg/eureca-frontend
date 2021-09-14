import React, { useState, useEffect } from "react";
import TitleCardHome from "../TitleCardHome";
import RetentionSummaryCardHome from "./RetentionSummaryCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import { Link } from "react-router-dom";
import { api_EB } from "../../../../services/api";
import { translateRiskAndCost } from "../util";

import {
  baseRetentionEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const RetentionCardHome = () => {
  const labelSubjects = ["MÁXIMA", "MÍNIMA", "PRIMEIRO QUARTIL", "MEDIANA", "TERCEIRO QUARTIL", "MÉDIA"];

  const labelStudents = [
    "RISCO MÉDIO",
    "CARGA MÉDIA",
    "TAXA DE SUCESSO",
    "PREV. CONCLUSÃO",
    "CUSTO MÉDIO",
    "RITMO MÉDIO",
  ];

  const [option, setOption] = useState("subjects");
  const [title, setTitle] = useState("Disciplinas");
  const [propsRetention, setPropsRetention] = useState([]);
  const [labels, setLabels] = useState(labelSubjects);
  const [subjectRetention, setSubjectRetention] = useState();
  const [studentRetention, setStudentRetention] = useState();

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    const endpoint = `${baseRetentionEndpoint}/summary`;
    const query = endpointWithCourseAndCurriculum(endpoint);

    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res) {
      setStudentRetention(res.data.studentsRetentionSummary);
      setSubjectRetention(res.data.subjectsRetentionSummary);
      setPropsSubjectRetention(res.data.subjectsRetentionSummary);
      console.log(res)
    } else {
      console.error(res.statusText);
    }
  };
  //TODO: falta uma metrica p/substituir tempo médio
  const setPropsStudentsRetention = data => {
    const successRate = data.average.metrics.successRate * 100;
    const { cost, risk } = translateRiskAndCost(data, true);
    setPropsRetention([
      data.studentsRetentionCount,
      `${risk} (${data.average.metrics.risk.toFixed(2)})`,
      `${data.average.metrics.averageLoad.toFixed(2)} créditos`,
      `${successRate.toFixed(1)}%`,
      `${data.average.metrics.courseDurationPrediction.toFixed(1)} períodos`,
      `${cost} (${data.average.metrics.cost.toFixed(1)})`,
      `${data.average.metrics.pace.toFixed(1)}`
    ]);
  };

  const setPropsSubjectRetention = subjectRetention => {
    setPropsRetention([
      subjectRetention.adequate.sampleSize,
      subjectRetention.adequate.max,
      subjectRetention.adequate.min,
      subjectRetention.adequate.firstQuartile,
      subjectRetention.adequate.median,
      subjectRetention.adequate.thirdQuartile,
      subjectRetention.adequate.average.toFixed(1),
    ]);
  };

  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"RETENÇÃO"} />
          </div>
          <div className='summary-card-content'>
            <RetentionSummaryCardHome option={option} dataRetention={propsRetention} data={labels} title={title} />
            <div className='type-retention-grid'>
              <div className='type-retentions'>
                <div className={option === "subjects" ? "type-retention-selected" : "type-retention"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (option !== "subjects") {
                        setOption("subjects");
                        setTitle("Disciplinas");
                        setPropsSubjectRetention(subjectRetention);
                        setLabels(labelSubjects);
                      }
                    }}
                  >
                    DISCIPLINAS
                  </button>
                </div>
                <div className={option === "students" ? "type-retention-selected" : "type-retention"}>
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (option !== "students") {
                        setOption("students");
                        setTitle("Discentes");
                        setPropsStudentsRetention(studentRetention);
                        setLabels(labelStudents);
                      }
                    }}
                  >
                    DISCENTES
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='card-home-content-footer'>
            <Link to={"/statistics/retention/" + option}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/statistics/retention/glossary"}>
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

export default RetentionCardHome;
