import React from "react";
import "./style.css";

const SearchScreen = props => {
  return (
    <React.Fragment>
      <div className='container-title-search'>
        <input type='checkbox' />
        <h1>Buscar e-mails por {props.title}</h1>
      </div>
      <div className='selects'>{props.children}</div>
    </React.Fragment>
  );
};

export default SearchScreen;
