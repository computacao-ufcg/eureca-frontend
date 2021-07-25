import React, { useState, useEffect } from "react";
import TitleCardHome from "../TitleCardHome";
import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";
import { Link } from "react-router-dom";
import { api_EB } from "../../../../services/api";

const RetentionCardHome = () => {
  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"RETENÇÃO"} />
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
