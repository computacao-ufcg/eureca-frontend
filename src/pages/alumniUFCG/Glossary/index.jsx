import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import Enrollments from "../../../assets/glossary_images/Alumni.png";

const AlumniGlossary = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <div className='main-content-enrollments-glossary'>
              <Header></Header>
              <div className='main-enrollments-glossary'>
                <div className='backdot'>
                  <span onClick={() => history.goBack()}>
                    <FiArrowLeft size={25} />
                  </span>
                </div>
                <div className='container-title-enrollments-glossary'>
                  <h1>GLOSSÁRIO</h1>
                </div>
                <div className='main-container-enrollments-glossary'>
                  <div className='left-container'>
                    
                  </div>
                  <div className='img-container'>
                    <img src={Enrollments} alt='' height={300} />
                  </div>
                  <div className='right-container'> 
                
                  </div>
                </div>
                <div className='bottom-container'>
                  
                </div>
              </div>
            </div>
          
            <div></div>
         
        </React.Fragment>
      );
    };
    
    export default AlumniGlossary;
    