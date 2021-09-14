import React from "react";
import { MiniCardHomeRightBottom, MiniCardHomeRightTop, MiniCardHomeEnrollments } from "../../MiniCardHome";
import { curriculum } from "../../../../../config/storage";
import "./style.css";

const EnrollmentsSummaryCardHome = props => {
  const labels = props.labels;
  const data = props.data;

  return (
    <div className='enrollments-summary-card-main'>
      <div className='enrollments-summary-card-title'>
        <div className='enrollments-summary-card-info'>
          <div className='enrollments-summary-card-type'>{props.title}</div>
          <div className='enrollments-summary-card-range'>
            (Currículo: {curriculum}, períodos {data.from} a {data.to})
          </div>
          <div className='enrollments-summary-card-size'> {data[0] || 0}</div>
        </div>
        <div className='enrollments-summary-left-cards'>
          <MiniCardHomeRightTop option={props.option} number={data[5] || 0} legend={labels[4]} />
          <MiniCardHomeRightBottom option={props.option} number={data[6] || 0} legend={labels[5]} />
        </div>
      </div>
      <div className='enrollments-summary-card-cards'>
        <MiniCardHomeEnrollments option={props.option} number={data[1] || 0} legend={labels[0]} />
        <MiniCardHomeEnrollments option={props.option} number={data[2] || 0} legend={labels[1]} />
        <MiniCardHomeEnrollments option={props.option} number={data[3] || 0} legend={labels[2]} />
        <MiniCardHomeEnrollments ption={props.option} number={data[4] || 0} legend={labels[3]} />
      </div>
    </div>
  );
};

export default EnrollmentsSummaryCardHome;
