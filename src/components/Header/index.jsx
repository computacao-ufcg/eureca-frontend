import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import eureca_logo from "../../assets/header/eureca.svg";

import { SelectPicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { api_EB } from "../../services/api";
import { courseName, courseCode, curriculum } from "../../config/storage";

import "./styles.css";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";

const Header = () => {
  const [curriculumData, setCurriculumData] = useState([]);
  const [curriculumSelected, setCurriculumSelected] = useState();
  const history = useHistory();

  const handleLogOut = () => {
    sessionStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    async function fetchCurriculumData() {
      try {
        const query = `/curricula?courseCode=${courseCode}`;
        const res = await api_EB.get(query, eurecaAuthenticationHeader);

        if (res?.status === 200) {
          const parsedCurriculumCodes = parseCurriculumCodes(res.data.curriculumCodes);
          setCurriculumData(parsedCurriculumCodes);
          setCurriculumSelected(curriculum);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurriculumData();
  }, []);

  const parseCurriculumCodes = data => {
    return data.map(curriculum => {
      return {
        label: curriculum,
        value: curriculum,
        role: "Master",
      };
    });
  };

  const handleChange = curriculum => {
    setCurriculumSelected(curriculum);
    sessionStorage.setItem("curriculum", curriculum);
    window.location.reload();
  };

  return (
    <div className='header-container'>
      <div className='header-1'>
        <div onClick={() => history.push("/home")} className='header-1-eureca-logo'>
          <img src={eureca_logo} alt='eureca logo' />
        </div>
        <div className='buttons'>
          <div className='statistics-button'>
            <button>ESTATÍSTICAS</button>
          </div>
          <div className='communications-button'>
            <button>COMUNICAÇÕES</button>
          </div>
          <div className='services-button'>
            <button>SERVIÇOS</button>
          </div>
        </div>

        <div className='header-1-user'>
          <div></div>
          <p>{sessionStorage.getItem("username")}</p>
        </div>
        <div className='logout-button'>
          <button onClick={handleLogOut}>SAIR</button>
        </div>
      </div>
      <div className='header-2'>
        <p>{courseName}</p>
        <div className='select-curriculum'>
          <p>Currículo:</p>
          <SelectPicker
            onChange={value => handleChange(value)}
            data={curriculumData}
            searchable={false}
            cleanable={false}
            placeholder={curriculumSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
