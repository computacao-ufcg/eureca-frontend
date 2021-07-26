import React, { useState, useEffect } from "react";
import TitleCardHome from "../TitleCardHome";
import RetentionSummaryCardHome from "./RetentionSummaryCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import { Link } from "react-router-dom";
import { api_EB } from "../../../../services/api";

const RetentionCardHome = () => {
  const labelSubjects = [
    "MÁXIMA",
    "MÍNIMA",
    "PRIMEIRO QUARTIL",
    "MEDIANA",
    "TERCEIRO QUARTIL",
    "MÉDIA",
  ];

  const labelStudents = [
    "RISCO MÉDIO",
    "CARGA MÉDIA",
    "TAXA DE SUCESS",
    "PREV. CONCLUSÃO",
    "CUSTO MÉDIO",
    "TEMPO MÉDIO",
  ];

  const [optionRetention, setOptionRetention] = useState("subjects");
  const [titleRetention, setTitleRetention] = useState("Disciplinas");
  const [propsRetention, setPropsRetention] = useState([]);
  const [labels, setLabels] = useState(labelSubjects);
  const [dataRetention, setDataRetention] = useState();

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    let query = `/statistics/retention/summary?from=1950.0&language=PORTUGUESE&to=2049.9`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setDataRetention(res.data);
      console.log(res.data);
      setPropsSubjectRetention(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  const translateData = (data, isAverage) => {
    const summary = isAverage ? data.average : data;
    let risk;
    let cost;

    if (summary.riskClass === "INACCURATE") {
      risk = "Inexato";
    } else if (summary.riskClass === "SAFE") {
      risk = "Seguro";
    } else if (summary.riskClass === "LOW") {
      risk = "Baixo";
    } else if (summary.riskClass === "AVERAGE") {
      risk = "Médio";
    } else if (summary.riskClass === "HIGH") {
      risk = "Alto";
    } else if (summary.riskClass === "UNFEASIBLE") {
      risk = "Inviável";
    } else {
      risk = "Não Aplicável";
    }

    if (summary.costClass === "INACCURATE") {
      cost = "Inexato";
    } else if (summary.costClass === "ADEQUATE") {
      cost = "Adequado";
    } else if (summary.costClass === "REGULAR") {
      cost = "Regular";
    } else if (summary.costClass === "HIGH") {
      cost = "Alto";
    } else if (summary.costClass === "VERY_HIGH") {
      cost = "Muito Alto";
    } else if (summary.costClass === "UNACCEPTABLE") {
      cost = "Inaceitável";
    } else {
      cost = "Não Aplicável";
    }

    return { risk, cost };
  };

  const setPropsStudentsRetention = data => {
    const successRate = data.delayedSummary.average.metrics.successRate * 100;
    const { cost, risk } = translateData(data.delayedSummary, true);
    setPropsRetention([
        data.delayedSummary.delayedCount,
        risk + " (" + data.delayedSummary.average.metrics.risk.toFixed(2) + ")",
        data.delayedSummary.average.metrics.averageLoad.toFixed(1) +
          " créditos",
        successRate.toFixed(1) + "%",
        data.delayedSummary.average.metrics.courseDurationPrediction.toFixed(
          1
        ) + " períodos",
        {
          custo: cost,
          valor:
            "(" + data.delayedSummary.average.metrics.cost.toFixed(1) + ")",
        },
        data.delayedSummary.average.termsCount.toFixed(1) + " períodos",

    ])
  }

  const setPropsSubjectRetention = data => {
    setPropsRetention([
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
      data.subjectRetentionSummary.average,
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
            <RetentionSummaryCardHome
              option={optionRetention}
              dataRetention={propsRetention}
              data={labels}
              title={titleRetention}
            />
            <div className='type-students-grid'>
              <div className='type-students'>
                <div
                  className={
                    optionRetention === "subjects"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionRetention !== "subjects") {
                        setOptionRetention("subjects");
                        setTitleRetention("Disciplinas");
                        setPropsSubjectRetention(dataRetention);
                        setLabels(labelSubjects)
                      }
                    }}
                  >
                    DISCIPLINAS
                  </button>
                </div>
                <div
                  className={
                    optionRetention === "students"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionRetention !== "students") {
                        setOptionRetention("students");
                        setTitleRetention("Discentes");
                        setPropsStudentsRetention(dataRetention);
                        setLabels(labelStudents)
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

export default RetentionCardHome;
