import React from "react";

import { MiniCardHome1,MiniCardHomeRightBottom,MiniCardHome4,MiniCardHome3,MiniCardHome5,MiniCardHome2} from "../../MiniCardHome";
import "./style.css";

const AlumniCards = props => {
  const data = props.data;
  return (
    <React.Fragment>
      {data ? (
        <div className='alumni-summary-card-main'>
          <div className='alumni-summary-card-title'>
            <div className='alumni-summary-card-info'>
              <div className='alumni-summary-card-type'>EGRESSOS</div>
              <div className='alumni-summary-card-size'>
                {data.numberAlumniCourse || 0}
              </div>
            </div>
            <div className='alumni-summary-left-cards'>
              <MiniCardHome4
              number={data.numberMatchedAlumniCourse || 0}
              legend={"RASTREADOS"} />
              <MiniCardHome1
              number={0} legend={"EMP. CONSOLIDADAS"}
              />
            </div>
          </div>
          <div className='alumni-summary-card-cards'>
            <MiniCardHome1
              number={data.numberIndustryEmployedLevel || 0}
              legend={"NA INDÚSTRIA"}
            />
            <MiniCardHome1
              number={data.numberGovernmentEmployedCourse || 0}
                legend={"NO GOVERNO"}
            />
            <MiniCardHome1
             number={data.numberAcademyEmployedCourse || 0}
             legend={"NA ACADEMIA"}
            />
            <MiniCardHome1
              number={data.numberOngEmployedCourse || 0}
              legend={"EM ONGS"}
            />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default AlumniCards;
