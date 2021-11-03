import React, { useState } from "react";
import TeacherSearch from "./teachers";
import SubjectSearch from "./subjects";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import { api_EB } from "../../services/api";
import { courseCode, curriculum } from "../../config/storage";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";
import NoDataFound from "../../components/NoDataFound";
import { admissionTerm, craOperations, genders, statuses, credits } from "./util";
import ResultsTable from "./table/resultsTable";
import "./style.css";

const CommunicationPage = () => {
  const [data, setData] = useState([]);

  const [admission, setAdmission] = useState(".*?");
  const [gpa, setGpa] = useState(0);
  const [gpaOperation, setGpaOperation] = useState("≥");
  const [enrolledCredits, setEnrolledCredits] = useState(".*?");
  const [gender, setGender] = useState(".*?");

  const [status, setStatus] = useState("Todos");
  const [studentName, setStudentName] = useState(".*?");

  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [search, setSearch] = useState(true);
  const [label, setLabel] = useState("");

  const handleProfile = async (admission, gpa, gpaOperation, enrolledCredits, gender, status, studentName) => {
    setLoading(true);

    let query = `communication/studentsEmailSearch?admissionTerm=${admission}&courseCode=${courseCode}&cra=${gpa}&craOperation=${gpaOperation}&curriculumCode=${curriculum}&enrolledCredits=${enrolledCredits}&gender=${gender}&status=${status}&studentName=${studentName}`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      console.log(res);
      console.log(gpa)
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

  const handleGpaOperationChange = gpaOperation => {
    setGpaOperation(gpaOperation);
    const proposedLabel = craOperations.find(item => item.value === gpaOperation);
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

  const handleCreditsChange = enrolledCredits => {
    setEnrolledCredits(enrolledCredits);
    const proposedLabel = credits.find(item => item.value === enrolledCredits);
    setLabel(proposedLabel.label);
  };

  const handleSearch = () => {
    const $iptStudentName = document.getElementById("ipt-name");
    const $iptGpa = document.getElementById("ipt-cra-value");
    setStudentName($iptStudentName.value);
    setGpa($iptGpa.value);
    //antes estava (admission,$iptGpa.value, gpaOperation, enrolledCredits, gender, status, $iptStudentName.value)
    handleProfile(admission, gpa, gpaOperation, enrolledCredits, gender, status, studentName);
  };

  function listEmails(data) {
    const keys = Object.keys(data);
    const result = [];

    keys.forEach(element => {
      const emails = { email: data[element].email };
      result.push(emails);
    });
    const textEmails = result.map(res => `${res.email}`);
    return textEmails.toString();
  }
  
  const handleCopy = () =>{
    navigator.clipboard.writeText(studentsEmail)
    alert("Endereços copiados com sucesso!");
  }
  const studentsEmail = listEmails(data);
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
            <h1>Buscar e-mails por Discentes</h1>
            <div className='selects-students'>
              <div>
                <p>Nome</p>
                <input id='ipt-name' type='text' placeholder='Buscar por nome' />
              </div>
              <div>
                <p>Período de ingresso</p>
                <SelectPicker
                  onChange={value => handleAdmissionChange(value)}
                  defaultValue={".*?"}
                  data={admissionTerm}
                  searchable={true}
                  cleanable={false}
                  style={{ width: 224 }}
                />
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
              <div>
                <p>Sexo</p>
                <SelectPicker
                  onChange={value => handleGenderChange(value)}
                  defaultValue={".*?"}
                  data={genders}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 120 }}
                />
              </div>
              <div className='second-row-students'>
                <div>
                  <p>CRA</p>
                  <SelectPicker
                    defaultValue={"≥"}
                    onChange={value => handleGpaOperationChange(value)}
                    data={craOperations}
                    searchable={false}
                    cleanable={false}
                  />
                </div>
                <div>
                  <input className='ipt-cra-value' id='ipt-cra-value' type='text' placeholder='CRA' />
                </div>
              </div>
              <div>
                <p>Créditos Matriculados</p>
                <SelectPicker
                  onChange={value => handleCreditsChange(value)}
                  defaultValue={".*?"}
                  data={credits}
                  searchable={false}
                  cleanable={false}
                  style={{ width: 224 }}
                />
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
            {loading ? (
              <h1>Carregando...</h1>
            ) : data.length === 0 ? (
              <div className='classified-no-data-found'>
                {" "}
                <NoDataFound msg={"Nenhuma endereço de email correspondente."} />{" "}
              </div>
            ) : (
              <ResultsTable listData={data} />
            )}
            <div className='copy-button'>
              <button onClick={handleCopy}>COPIAR ENDEREÇOS</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommunicationPage;
