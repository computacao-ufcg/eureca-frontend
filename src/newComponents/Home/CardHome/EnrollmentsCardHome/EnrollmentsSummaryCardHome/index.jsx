import React from "react";
import { MiniCardHome1, MiniCardHome2 } from "../../MiniCardHome";

import "./style.css";

const EnrollmentsSummaryCardHome = props => {
  return (
    <div className='enrollments-summary-card-main'>
      <div className='enrollments-summary-card-title'>
        <div className='enrollments-summary-card-info'>
          <div className='enrollments-summary-card-type'>{props.title}</div>
          <div className='enrollments-summary-card-range'>1950.1 a 2020.1</div>
          <div className='enrollments-summary-card-size'>
            {props.data.subjects}
          </div>
        </div>
        <div className='enrollments-summary-left-cards'>
          <MiniCardHome2
            option={"teste"}
            number={props.data.max.count}
            legend={"NUMERO MAXIMO"}
          />
          <MiniCardHome1
            option={"teste"}
            number={props.data.min.count}
            legend={"NUMERO MINIMO"}
          />
        </div>
      </div>
      <div className='enrollments-summary-card-cards'>
        <MiniCardHome1
          option={"teste"}
          number={props.data.averageEnrollmentsPerPeriod}
          legend={"MÉDIA DE MATRICULAS/PERIODO"}
        />
        <MiniCardHome1
          option={"teste"}
          number={props.data.averageEnrollmentsPerClass}
          legend={"MÉDIA DE MATRICULAS/TURMA"}
        />
        <MiniCardHome1
          option={"teste"}
          number={props.data.averageClassesPerPeriod}
          legend={"MÉDIA DE TURMAS/PERIODO"}
        />
        <MiniCardHome1
          option={"teste"}
          number={props.data.averageClassesPerDiscipline}
          legend={"MÉDIA DE TURMAS/DISCIPLINA"}
        />
      </div>
    </div>
  );
};

export default EnrollmentsSummaryCardHome;
