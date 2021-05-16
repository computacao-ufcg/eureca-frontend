import React from "react";

import "../style.css";

import TitleCardHome from "../TitleCardHome";
import WarningCards from "./WarningsCards";

import Mask3 from "../../../../assets/new_home_assets/mask_3.svg";

const WarningsCardHome = () => {
  return (
    <React.Fragment>
      <div className='card-home-area1'>
        <div className='card-home-content'>
          <div className='card-img-5'>
            <div className='card-img-5-up'>
              <div className='title-card-content'>
                <TitleCardHome title={"ALARMES"} />
              </div>
              <div className='mask3'>
                <img src={Mask3} alt='mask3' />
              </div>
            </div>
            <div className='summary-card-content2'>
              <WarningCards />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WarningsCardHome;
