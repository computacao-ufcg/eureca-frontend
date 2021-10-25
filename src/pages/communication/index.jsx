import React from "react";
import TeacherSearch from "./teachers";
import StudentSearch from "./students";
import SubjectSearch from "./subjects";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import ResultsTable from "./table/resultsTable"
import "./style.css";

const CommunicationPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className='main-content'>
        <Header />
        <div className='main-search-teachers'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='all-selects'>
            <div className='selects-students'>
              <StudentSearch />
            </div>
            <div className='selects-teachers'>
              <TeacherSearch />
            </div>
            <div className='selects-subjects'>
              <SubjectSearch />
            </div>
          </div>
          <div className='search-button'>
            <button type='submit'>BUSCAR</button>
          </div>
          <div className='response'>
            <h1>Endereços de E-mail</h1>
            <ResultsTable></ResultsTable>
            <div className='copy-button'>
              <button type='submit'>COPIAR ENDEREÇOS</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommunicationPage;
