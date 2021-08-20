import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import eureca_logo from "../../assets/header/eureca.svg";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { api_EB } from "../../services/api";
import { courseName, curriculum } from "../../config/storage";

import "./styles.css";

const Header = () => {
  const [curriculumData, setCurriculumData] = useState([]);
  const [curriculumSelected, setCurriculumSelected] = useState(curriculum);
  const history = useHistory();

  const handleLogOut = () => {
    sessionStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    console.log(courseName);
    async function fetchCurriculumData() {
      try {
        const res = await api_EB.get("/curricula", {
          headers: {
            "Authentication-Token": sessionStorage.getItem("eureca-token"),
          },
        });

        if (res?.status === 200) {
          console.log(parseData(res.data.curriculumCodes));
          setCurriculumData(parseData(res.data.curriculumCodes));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurriculumData();
  }, []);

  const parseData = data => {
    return data.map(c => {
      return {
        label: c,
        value: c,
        role: "Master",
      };
    });
  };

  const handleChange = curriculum => {
    setCurriculumSelected(curriculum);
    sessionStorage.setItem("curriculum", curriculum);
  };

  return (
    <div className='header-container'>
      <div className='header-1'>
        <div onClick={() => history.push("/home")} className='header-1-eureca-logo'>
          <img src={eureca_logo} alt='eureca logo' />
        </div>
        <div className='header-1-user'>
          <div></div>
          <p>{sessionStorage.getItem("username")}</p>
        </div>
        <div className='logout-button'>
          <button onClick={handleLogOut}>Sair</button>
        </div>
      </div>
      <div className='header-2'>
        <p>{courseName}</p>
        <div className='select-curriculum'>
          <p>Currículo:</p>
          <SelectPicker
            onChange={value => handleChange(value)}
            data={curriculumData}
            dafaultValue={curriculumSelected}
            searchable={false}
            cleanable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
