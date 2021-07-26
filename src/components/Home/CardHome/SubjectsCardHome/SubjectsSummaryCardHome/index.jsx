import React from "react";

import "./styles.css";

import {
  MiniCardHomeSubjects,
  MiniCardHomeSubjectsTop,
} from "../../MiniCardHome";

const SubjectsSummaryCardHome = props => {
  const labels = props.data;
  const data = props.dataSubjects;
  
  
  return (
    <div className='subjects-summary-card-main'>
      <div className='subjects-summary-card-title'>
        <div className='subjects-summary-card-info'>
          <div className='subjects-summary-card-type'>{props.title}</div>
          <div className='subjects-summary-card-age'>
            (Currículo 2017, períodos 2018.1 a 2020.1)
          </div>
          <div className='subjects-summary-card-size'>{data[0] || 0}</div>
        </div>
        <div className='subjects-summary-left-cards'>
          {props.cards.card6 && (
            <MiniCardHomeSubjectsTop
              option={props.option}
              number={data[5] || 0}
              legend={labels[4]}
            />
          )}
          {props.cards.card5 && (
            <MiniCardHomeSubjects
              option={props.option}
              number={data[6] || 0}
              legend={labels[5]}
            />
          )}
        </div>
      </div>
      <div className={"subjects-summary-card-cards"}>
        <MiniCardHomeSubjects
          option={props.option}
          number={data[1] || 0}
          legend={labels[0]}
        />
        <MiniCardHomeSubjects
          option={props.option}
          number={data[2] || 0}
          legend={labels[1]}
        />
        {props.cards.card4 ? (
          <MiniCardHomeSubjects
            option={props.option}
            number={data[3] || 0}
            legend={labels[2]}
          />
        ) : (
          <MiniCardHomeSubjects
            option={props.option}
            number={data[3] || 0}
            legend={labels[2]}
          />
        )}
        {props.cards.card4 && (
          <MiniCardHomeSubjects
            option={props.option}
            number={data[4] || 0}
            legend={labels[3]}
          />
        )}
      </div>
    </div>
  );
};

export default SubjectsSummaryCardHome;
