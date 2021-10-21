import React from "react";
import TeacherSearch from "./teachers";
import StudentSearch from "./students";
import SubjectSearch from "./subjects";

import Header from "../../components/Header";
import "./style.css";

const communicationPage = () =>{
    
    return(
        <React.Fragment>
          <div className='main-content'>
            <Header></Header>
            <div className='main-search-teachers'>
              <div className='all-selects'>
                <div className='selects-students'>
                <StudentSearch/>
                </div>
                <div className='selects-teachers'>
                <TeacherSearch/>
                </div>
                <div className='selects-subjects'>
                <SubjectSearch/>
                </div>
                
              </div>
              <div className='search-button'>
                  <button type='submit'>
                    BUSCAR
                  </button>
                </div>
              <div className='response'>
                <div className='copy-button'>
                  <button type='submit'>
                    COPIAR ENDEREÇOS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default communicationPage;