import React, { useState } from "react";
import TeacherSearch from "./teachers";
import SubjectSearch from "./subjects";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import ResultsTable from "./table/resultsTable";
import { courseCode, curriculum } from "../../config/storage";
import { api_EB } from "../../services/api";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";
import { admissionTerm, craOperation, genders, statuses } from "./util";
import "./style.css";

const CommunicationPage = () => {
  const [data, setData] = useState([]);

  const [admission, setAdmission] = useState("");
  const [gpa, setGpa] = useState(2);
  const [gpaOperation, setGpaOperation] = useState(2);
  const [enrolledCredits, setEnrolledCredits] = useState("");
  const [gender, setGender] = useState("");
  const [registration, setRegistration] = useState("");
  const [status, setStatus] = useState("");
  const [studentName, setStudentName] = useState("");

  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [search, setSearch] = useState(true);
  const [label, setLabel] = useState("");

  const handleProfile = async (admission, gpa, enrolledCredits, gender, registration, status, studentName) => {
    setLoading(true);

    let query = `communication/studentsEmailSearch?admissionTerm=${admission}&courseCode=${courseCode}&cra=9&craOperation=%3D&curriculumCode=${curriculum}&enrolledCredits=%5E%24&gender=${gender}&registration=%5E%24&status=${status}&studentName=${studentName}`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      setData(res.data);
      res.datalength === 0 ? setNoData(true) : setNoData(false);
      setLoading(false);
      setSearch(false);
    } else {
      console.error("Response error");
    }
  };

  const handleAdmissionChange = admission => {
    setAdmission(admission);
     const proposedLabel = admissionTerm.find(item => item.value === admission);
     setLabel(proposedLabel.label);
  };

  const handleGenderChange = gender => {
    setGender(gender);
     const proposedLabel = genders.find(item => item.value === gender);
     setLabel(proposedLabel.label);
  };

  const handleStatusChange = status => {
    setStatus(status);
     const proposedLabel = statuses.find(item => item.value === status);
     setLabel(proposedLabel.label);
  };

  const handleName = e => {
    setStudentName({ value: e.target.value });
    console.log(e.target);
  };

  const handleSearch = () => {
    const $iptStudentName = document.getElementById("ipt-name");
    //const $iptGpa = document.getElementById("ipt-cra-value");
    setStudentName($iptStudentName.value);
    console.log(gender)
    //setGpa($iptGpa.value);
    handleProfile( admission,"","", gender,"", status, $iptStudentName.value );
  };

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
              <div>
                <p>Nome</p>
                <input
                  id='ipt-name'
                  type='text'
                  placeholder='Buscar por nome'
                />
              </div>
              <div>
                <p>Período de ingresso</p>
                <SelectPicker
                  onChange={value => handleAdmissionChange(value)}
                  defaultValue={"Todos"}
                  data={admissionTerm}
                  searchable={true}
                  cleanable={false}
                  style={{ width: 224 }}
                />
              </div>
              <div>
                <p>CRA</p>
                <SelectPicker defaultValue={"todos"} data={craOperation} searchable={false} cleanable={false} />
              </div>
              <div>
                <p>Status</p>
                <SelectPicker
                  onChange={value => handleStatusChange(value)}
                  defaultValue={"Todos"}
                  data={statuses}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 120 }}
                />
              </div>
              <div className='second-row'>
                <div>
                  <p>Sexo</p>
                  <SelectPicker
                    onChange = {value => handleGenderChange(value)}
                    defaultValue={"Todos"}
                    data={genders}
                    searchable={false}
                    cleanable={false}
                    style={{ width: 100 }}
                  />
                </div>
              </div>
              <div>
                <p>Período de conclusão</p>
                <SelectPicker
                  defaultValue={"todos"}
                  data={0}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 224 }}
                />
              </div>
              <div>
                <input className='ipt-cra-value' type='text' placeholder='CRA' />
              </div>
              <div>
                <p>Cota</p>
                <SelectPicker
                  defaultValue={"todas"}
                  data={0}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 120 }}
                />
              </div>
              <div>
                <p>Risco</p>
                <SelectPicker
                  defaultValue={"todos"}
                  data={0}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 120 }}
                />
              </div>
              <div>
                <p>Custo</p>
                <SelectPicker
                  defaultValue={"todos"}
                  data={0}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 120 }}
                />
              </div>
            </div>
            <div className='selects-teachers'>
              <TeacherSearch />
            </div>
            <div className='selects-subjects'>
              <SubjectSearch />
            </div>
          </div>
          <div className='search-button'>
            <button onClick={handleSearch}>BUSCAR</button>
          </div>
          <div className='response'>
            <h1>Endereços de E-mail</h1>
            <ResultsTable listData={data}/>
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
