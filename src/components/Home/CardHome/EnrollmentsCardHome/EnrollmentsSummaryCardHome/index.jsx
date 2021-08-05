import React from "react";
import { MiniCardHomeRightBottom, MiniCardHomeRightTop, MiniCardHomeEnrollments } from "../../MiniCardHome";

import "./style.css";

const EnrollmentsSummaryCardHome = props => {
  return (
    <div className='enrollments-summary-card-main'>
      <div className='enrollments-summary-card-title'>
        <div className='enrollments-summary-card-info'>
          <div className='enrollments-summary-card-type'>{props.title}</div>
          <div className='enrollments-summary-card-range'>
            (Currículo: {props.data.curriculum}, períodos {props.data.from} a {props.data.to})
          </div>
          <div className='enrollments-summary-card-size'>{props.data.subjects}</div>
        </div>
        <div className='enrollments-summary-left-cards'>
          <MiniCardHomeRightTop
            option={"teste"}
            number={props.data.max.count + " (" + props.data.max.term + ")"}
            legend={"NUMERO MÁXIMO"}
          />
          <MiniCardHomeRightBottom
            option={"teste"}
            number={props.data.min.count + " (" + props.data.min.term + ")"}
            legend={"NUMERO MÍNIMO"}
          />
        </div>
      </div>
      <div className='enrollments-summary-card-cards'>
        <MiniCardHomeEnrollments
          option={"teste"}
          number={props.data.averageEnrollmentsPerPeriod.toFixed(1)}
          legend={"MÉDIA DE MATRÍCULAS/PERÍODO"}
          id={"teste"}
        />
        <MiniCardHomeEnrollments
          option={"teste"}
          number={props.data.averageEnrollmentsPerClass.toFixed(1)}
          legend={"MÉDIA DE MATRÍCULAS/TURMA"}
        />
        <MiniCardHomeEnrollments
          option={"teste"}
          number={props.data.averageClassesPerPeriod.toFixed(1)}
          legend={"MÉDIA DE TURMAS/PERÍODO"}
        />
        <MiniCardHomeEnrollments
          option={"teste"}
          number={props.data.averageClassesPerDiscipline.toFixed(1)}
          legend={"MÉDIA DE TURMAS/DISCIPLINA"}
        />
      </div>
    </div>
  );
};

export default EnrollmentsSummaryCardHome;
