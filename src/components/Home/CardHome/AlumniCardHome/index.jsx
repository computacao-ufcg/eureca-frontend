import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../AlumniCardHome/style.css";

import TitleCardHome from "../TitleCardHome";
import AlumniCards from "./AlumniCards";

import Mask6 from "../../../../assets/new_home_assets/mask_6.svg";
import Mask5 from "../../../../assets/new_home_assets/mask_5.svg";

import { api_AB } from "../../../../services/api";

const AlumniCardHome = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [employersData, setEmployersData] = useState([]);

  useEffect(() => {
    async function fetchAlumniData() {
      try {
        const res = await api_AB.get("/statistics", {
          headers: {
            "Authentication-Token": sessionStorage.getItem("alumni-token"),
          },
        });

        if (res?.status === 200) {
          setAlumniData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchAlumniData();

    async function fetchEmployersData() {
      try {
        const res = await api_AB.get("/employer/unclassified/1", {
          headers: {
            "Authentication-Token": sessionStorage.getItem("alumni-token"),
          },
        });

        if (res?.status === 200) {
          setEmployersData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchEmployersData();
  }, []);

  let totalData = Object.assign(alumniData,employersData);

  return (
    <React.Fragment>
      <div className='card-home-area2'>
        <div className='card-home-content'>
          <div className='title-card-content'>
            <TitleCardHome title={"EGRESSOS"} />
          </div>
          <div className='summary-card-content'>
            <AlumniCards data={totalData} />
          </div>
          <div className='card-home-content-footer'>
            <div className='card-search-button'>
              <Link to={"alumniufcg/search"}>
                <button type='submit'>BUSCAR</button>
              </Link>
            </div>
            <div className='updatedata-button'>
              <Link to={"alumniufcg/updatedata"}>
                <button type='submit'>ATUALIZAR DADOS</button>
              </Link>
            </div>
            <div className='updatedata-button'>
              <Link to={"alumniufcg/glossary"}>
                <button type='submit'>GLOSSÁRIO</button>
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
