import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

const CardHome = props => {
  const toLink = props.to ? props.to : "/";

  return (
    <Link className='cardHome' to={toLink}>
      <img src={props.letter} alt='letra' />
      <div className='infoHome'>
        <img src={props.logo} alt='logo' />
        <div className={"titleCard"}>{props.children}</div>
      </div>
    </Link>
  );
};

export default CardHome;
