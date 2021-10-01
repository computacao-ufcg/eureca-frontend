import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { Alert, SelectPicker } from "rsuite";

import Header from "../../../../components/Header";
import "./style.css";

const SubjectSearch = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className='main-content'>
        <Header></Header>
        <div className='main-search-subjects'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='container-title-search'>
            <h1>BUSCAR</h1>
          </div>        
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubjectSearch;
