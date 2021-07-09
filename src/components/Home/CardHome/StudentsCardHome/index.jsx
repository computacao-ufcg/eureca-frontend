import React, { useEffect, useState } from "react";

import "../style.css";

import { Link } from "react-router-dom";

import TitleCardHome from "../TitleCardHome";
import StudentsSummaryCardHome from "./StudentsSummaryCardHome";

import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";

import { labelActives, labelDropout, labelDelayed, labelAlumni } from "./util";

import { api_EB } from "../../../../services/api";

const StudentsCardHome = () => {
  const [dataStudents, setDataStudents] = useState();
  const [optionStudent, setOptionStudent] = useState("actives");
  const [titleStudent, setTitleStudent] = useState("Ativos");
  const [labels, setLabels] = useState(labelActives);
  const [cards, setCards] = useState({
    card1: true,
    card2: true,
    card3: true,
    card4: true,
    card5: true,
    card6: true,
    card7: true,
  });

  const [propStudents, setPropsStudents] = useState([]);

  useEffect(() => {
    getSummary();
  }, []);

  const getSummary = async () => {
    let query = `/statistics/students/summary`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setDataStudents(res.data);
      setPropsActives(res.data);
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

  const setPropsActives = data => {
    const successRate = data
      ? data.activesSummary.average.metrics.successRate * 100
      : 0;

    if (data) {
      const { risk, cost } = translateData(data.activesSummary, true);

      setPropsStudents([
        data.activesSummary.activesCount,
        risk + " (" + data.activesSummary.average.metrics.risk.toFixed(2) + ")",
        data.activesSummary.average.metrics.averageLoad.toFixed(1) +
          " créditos",
        successRate.toFixed(1) + "%",
        data.activesSummary.average.metrics.courseDurationPrediction.toFixed(
          1
        ) + " períodos",
        {
          custo: cost,
          valor:
            " (" + data.activesSummary.average.metrics.cost.toFixed(1) + ")",
        },
        data.activesSummary.average.termsCount.toFixed(1) + " períodos",
      ]);
      setCards({
        ...cards,
        card4: true,
        card5: true,
        card6: true,
        card7: true,
      });
    }
  };

  const setPropsAlumni = data => {
    if (data) {
      const { cost } = translateData(data.alumniSummary, false);

      setPropsStudents([
        data.alumniSummary.alumniCount,
        data.alumniSummary.minAlumniCount +
          " (" +
          data.alumniSummary.minAlumniCountTerm +
          ")",
        data.alumniSummary.maxAlumniCount +
          " (" +
          data.alumniSummary.maxAlumniCountTerm +
          ")",
        data.alumniSummary.averageAlumniCount.toFixed(1),
        data.alumniSummary.averageGpa.toFixed(2),
        {
          custo: cost,
          valor: "(" + data.alumniSummary.averageCost.toFixed(1) + ")",
        },
        data.alumniSummary.averageTermsCount.toFixed(1) + " períodos",
      ]);
      setCards({
        ...cards,
        card4: true,
        card5: true,
        card6: true,
        card7: false,
      });
    }
  };

  const setPropsDelayed = data => {
    if (data) {
      const successRate = data.delayedSummary.average.metrics.successRate * 100;
      const { cost, risk } = translateData(data.delayedSummary, true);

      setPropsStudents([
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
      ]);
      setCards({
        ...cards,
        card4: true,
        card5: true,
        card6: true,
        card7: false,
      });
    }
  };

  const setPropsDropout = data => {
    if (data) {
      const cancelamento =
        data.dropoutsSummary.dropouts.failed3Times +
        data.dropoutsSummary.dropouts.failedAll +
        data.dropoutsSummary.dropouts.cancelled +
        data.dropoutsSummary.dropouts.cancelledByDecree;
      const abandono =
        data.dropoutsSummary.dropouts.leftWithoutNotice +
        data.dropoutsSummary.dropouts.missedGraduation +
        data.dropoutsSummary.dropouts.cancelledUponRequest;
      const transferencia =
        data.dropoutsSummary.dropouts.reenterOtherCourse +
        data.dropoutsSummary.dropouts.cancelledCourseChange +
        data.dropoutsSummary.dropouts.transferred;

      const { cost } = translateData(data.dropoutsSummary, false);

      setPropsStudents([
        data.dropoutsSummary.dropoutCount,
        data.dropoutsSummary.dropouts.reenterSameCourse,
        cancelamento,
        abandono,
        transferencia,
        {
          custo: cost,
          valor: "(" + data.dropoutsSummary.averageCost.toFixed(1) + ")",
        },
        data.dropoutsSummary.averageTermsCount.toFixed(1) + " períodos",
      ]);

      setCards({
        ...cards,
        card4: true,
        card5: true,
        card6: true,
        card7: false,
      });
    }
  };

  return (
    <React.Fragment>
      <div className='card-home-area1'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"DISCENTES"} />
          </div>
          <div className='summary-card-content'>
            <StudentsSummaryCardHome
              cards={cards}
              option={optionStudent}
              dataStudents={propStudents}
              data={labels}
              title={titleStudent}
            />
            <div className='type-students-grid'>
              <div className='type-students'>
                <div
                  className={
                    optionStudent === "actives"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionStudent !== "actives") {
                        setOptionStudent("actives");
                        setTitleStudent("Ativos");
                        setLabels(labelActives);
                        setPropsActives(dataStudents);
                      }
                    }}
                  >
                    ATIVOS
                  </button>
                </div>
                <div
                  className={
                    optionStudent === "delayed"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionStudent !== "delayed") {
                        setOptionStudent("delayed");
                        setTitleStudent("Retidos");
                        setLabels(labelDelayed);
                        setPropsDelayed(dataStudents);
                      }
                    }}
                  >
                    RETIDOS
                  </button>
                </div>
                <div
                  className={
                    optionStudent === "dropout"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionStudent !== "dropout") {
                        setOptionStudent("dropout");
                        setTitleStudent("Evadidos");
                        setLabels(labelDropout);
                        setPropsDropout(dataStudents);
                      }
                    }}
                  >
                    EVADIDOS
                  </button>
                </div>
                <div
                  className={
                    optionStudent === "alumni"
                      ? "type-student-selected"
                      : "type-student"
                  }
                >
                  <button
                    className='type-button'
                    type='button'
                    onClick={() => {
                      if (optionStudent !== "alumni") {
                        setOptionStudent("alumni");
                        setTitleStudent("Egressos");
                        setLabels(labelAlumni);
                        setPropsAlumni(dataStudents);
                      }
                    }}
                  >
                    EGRESSOS
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='card-home-content-footer'>
            <Link to={"/statistics/students/" + optionStudent}>
              <button type='button'>VER MAIS</button>
            </Link>
            <Link to={"/statistics/students/glossary"}>
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

export default StudentsCardHome;
