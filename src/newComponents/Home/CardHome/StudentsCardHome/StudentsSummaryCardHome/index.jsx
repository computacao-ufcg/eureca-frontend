import React from "react";

import "./style.css";

import {
  MiniCardHome1,
  MiniCardHome2,
  MiniCardHome3,
} from "../../MiniCardHome";

const StudentsSummaryCardHome = props => {
  // console.log(props.dataStudents);
  const labels = props.data;
  const data = props.dataStudents;

  return (
    <div className='students-summary-card-main'>
      <div className='students-summary-card-title'>
        <div className='students-summary-card-info'>
          <div className='students-summary-card-type'>{props.title}</div>
          <div className='students-summary-card-age'>1986.1 a 2019.2</div>
          <div className='students-summary-card-size'>{data[0] || 0}</div>
          {/**<div className='students-summary-card-legend'>DISCENTES</div>*/}
        </div>
        <div className='students-summary-left-cards'>
          {props.cards.card6 && (
            <MiniCardHome2
              option={props.option}
              number={data[5] || 0}
              legend={labels[4]}
            />
          )}
          {props.cards.card5 && (
            <MiniCardHome1
              option={props.option}
              number={data[6] || 0}
              legend={labels[5]}
            />
          )}
        </div>
      </div>
      <div className={"students-summary-card-cards"}>
        <MiniCardHome1
          option={props.option}
          number={data[1] || 0}
          legend={labels[0]}
        />
        <MiniCardHome1
          option={props.option}
          number={data[2] || 0}
          legend={labels[1]}
        />
        {props.cards.card4 ? (
          <MiniCardHome1
            option={props.option}
            number={data[3] || 0}
            legend={labels[2]}
          />
        ) : (
          <MiniCardHome3
            option={props.option}
            number={data[3] || 0}
            legend={labels[2]}
          />
        )}
        {props.cards.card4 && (
          <MiniCardHome1
            option={props.option}
            number={data[4] || 0}
            legend={labels[3]}
          />
        )}
      </div>
    </div>
  );
};

export default StudentsSummaryCardHome;
