import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../AlumniCardHome/style.css";

import TitleCardHome from "../TitleCardHome";
import AlumniCards from "./AlumniCards";

import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";

import { api_AS, api_EB } from "../../../../services/api";

const AlumniCardHome = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    async function fetchAlumniData() {
      try {
        const res = await api_AS.get("/statistics", {
          headers: {
            "Authentication-Token": sessionStorage.getItem("eureca-token"),
          },
        });

        if (res?.status === 200) {
          console.log(res.data);
          setAlumniData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchAlumniData();
  }, []);

  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"EGRESSOS"} />
          </div>
          <div className='summary-card-content'>
            <AlumniCards data={alumniData} />
          </div>
          <div className='card-home-content-footer'>
            <div className='seemore-button'>
              <Link to={"newDesign/alumniufcg/seemore"}>
                <button type='submit'>VER MAIS</button>
              </Link>
            </div>
            <div className='updatedata-button'>
              <Link to={"newDesign/alumniufcg/updatedata"}>
                <button type='submit'>ATUALIZAR DADOS</button>
              </Link>
            </div>
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
export default AlumniCardHome;
