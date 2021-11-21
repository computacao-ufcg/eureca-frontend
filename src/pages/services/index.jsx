import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import { api_EB } from "../../services/api";
import { courseCode, curriculum } from "../../config/storage";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";
import EnrollmentTable from "./enrollmentTable";
import "./style.css";

const ServicesPage = () => {
  const [data, setData] = useState([]);
  const [dataSubjects, setDataSubjects] = useState([]);
  const [electivePriorityList, setElectivePriorityList] = useState("^$");
  const [mandatoryPriorityList, setMandatoryPriorityList] = useState("^$");
  const [optionalPriorityList, setOptionalPriorityList] = useState("^$");
  const [numCredits, setNumCredits] = useState();
  const [studentRegistration, setStudentRegistration] = useState("");
  const [term, setTerm] = useState("");

  const handleEnrrolment = async (
    electivePriorityList,
    mandatoryPriorityList,
    numCredits,
    optionalPriorityList,
    studentRegistration,
    term
  ) => {
    let query = null;
    if (numCredits == undefined || document.getElementById("ipt-credits").value.length == 0) {
      query = `pre_enrollment?courseCode=${courseCode}&curriculumCode=${curriculum}&electivePriorityList=${
        electivePriorityList || "^$"
      }&mandatoryPriorityList=${mandatoryPriorityList || "^$"}&optionalPriorityList=${
        optionalPriorityList || "^$"
      }&studentRegistration=${studentRegistration}&term=${term}`;
    } else {
      query = `pre_enrollment?courseCode=${courseCode}&curriculumCode=${curriculum}&electivePriorityList=${
        electivePriorityList || "^$"
      }&mandatoryPriorityList=${mandatoryPriorityList || "^$"}&numCredits=${numCredits}&optionalPriorityList=${
        optionalPriorityList || "^$"
      }&studentRegistration=${studentRegistration}&term=${term}`;
    }
    const res = await api_EB.get(query, eurecaAuthenticationHeader);
    if (res.status === 200) {
      setData(res.data);
      setDataSubjects(res.data.subjects);
    } else {
      console.error("Response error");
    }
  };

  const handleEnrrolmentData = () => {
    handleEnrrolment(
      electivePriorityList,
      mandatoryPriorityList,
      numCredits,
      optionalPriorityList,
      studentRegistration,
      term
    );
  };

  const history = useHistory();
  return (
    <React.Fragment>
      <Header />
      <div className='services-main'>
        <div className='services-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='all-selects'>
            <div className='service-title'>
              <h1>Pré-matrícula Individual</h1>
            </div>
            <div className='individual-enrollment'>
              <div>
                <p>Período</p>
                <input
                  id='ipt-term'
                  type='text'
                  placeholder=' campo obrigatório'
                  onChange={e => setTerm(e.target.value)}
                />
              </div>
              <div>
                <p>Matrícula</p>
                <input
                  id='ipt-registration'
                  type='text'
                  placeholder=' campo obrigatório'
                  onChange={e => setStudentRegistration(e.target.value)}
                />
              </div>
              <div>
                <p>Número de Créditos</p>
                <input id='ipt-credits' type='text' onChange={e => setNumCredits(e.target.value)} />
              </div>
              <div>
                <p>Prioridade em Disciplinas Obrigatórias</p>
                <input
                  id='ipt-mandatory-priority'
                  type='text'
                  onChange={e => setMandatoryPriorityList(e.target.value)}
                />
              </div>
              <div>
                <p>Prioridade em Disciplinas Optativas</p>
                <input id='ipt-optional-priority' type='text' onChange={e => setOptionalPriorityList(e.target.value)} />
              </div>
              <div>
                <p>Prioridade em Disciplinas Eletivas</p>
                <input id='ipt-elective-priority' type='text' onChange={e => setElectivePriorityList(e.target.value)} />
              </div>
              <div className='send-button'>
                <button onClick={handleEnrrolmentData}>ENVIAR</button>
              </div>
            </div>
            <div className='enrollment-sugestion'>
              <h1>Matrícula Sugerida</h1>
              <EnrollmentTable listData={dataSubjects} />
            </div>
            <div className='service-title'>
              <h1>Pré-matrícula em Lotes</h1>
            </div>
            <div className='lot-enrollment'>
              <div>
                <p>Período</p>
                <input id='ipt-term' type='text' />
              </div>
              <div>
                <p>Configuração</p>
                <input type='file' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
