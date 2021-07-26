import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

const RetentionGlossary = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className='main-content-retention-glossary'>
        <Header></Header>
        <div className='main-retention-glossary'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='container-title-retention-glossary'>
            <h1>GLOSSÁRIO</h1>
          </div>
          <div className='main-container-retention-glossary'>
            <div className='left-container'></div>
            <div className='img-container'></div>
            <div className='right-container'></div>
          </div>
          <div className='bottom-container'></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RetentionGlossary;
