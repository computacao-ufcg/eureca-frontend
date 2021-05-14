import React from "react";

import "../style.css";

import TitleCardHome from "../TitleCardHome";
import SummaryCardHome from "../SummaryCardHome";

import Mask7 from "../../../../assets/new_home_assets/mask_7.svg";

const SubjectsCardHome = () => {
  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='card-img-2'>
            <div className='mask7'>
              <img src={Mask7} alt='mask7' />
            </div>
            <div className='title-card-content'>
              <TitleCardHome title={"Disciplinas"} />
            </div>
            <div className='summary-card-content2'>
              <SummaryCardHome />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubjectsCardHome;
