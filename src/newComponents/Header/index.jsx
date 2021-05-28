import React from "react";

import { useHistory } from "react-router-dom";

import eureca_logo from "../../assets/header/eureca.svg";

import "./styles.css";

const Header = () => {
  const history = useHistory();
  const handleLogOut = () => {
    sessionStorage.clear();
    history.push("/login");
  };
  return (
    <div className='header-container'>
      <div className='header-1'>
        <div onClick={() => history.push("/")} className='header-1-eureca-logo'>
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
        <p>ciência da computação</p>
      </div>
    </div>
  );
};

export default Header;
