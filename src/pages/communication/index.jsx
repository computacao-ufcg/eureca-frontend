import React ,  { useState }from "react";
import TeacherSearch from "./teachers";
import StudentSearch from "./students";
import SubjectSearch from "./subjects";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import ResultsTable from "./table/resultsTable"
import { courseCode, curriculum } from "../../config/storage";
import { api_EB } from "../../services/api";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";
import { admissionTerm, craOperation, gender, status} from "./util"
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


  const handleProfile = async (admission, gpa, enrolledCredits, gender, registration,status, studentName) => {
    setLoading(true);

    let query = `communication/studentsEmailSearch?admissionTerm=2019.1&courseCode=${courseCode}&cra=9&craOperation=%3D&curriculumCode=${curriculum}&enrolledCredits=%5E%24&gender=%5E%24&registration=%5E%24&status=Ativos&studentName=%5E%24`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      console.log(res);
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
    // const proposedLabel = admissionTerm.find(item => item.value === admission);
    // setLabel(proposedLabel.label);
  };

  const handleName = e => {
    console.log(e)
    setStudentName({value: e.target.value});
    console.log(e.target.value)
  }

  const handleSearch = () => {
    const $iptStudentName = document.getElementById("ipt-name");
    const $iptGpa = document.getElementById("ipt-cra-value");
    setStudentName($iptStudentName.value);
    setGpa($iptGpa.value)
    handleProfile($iptGpa.value,$iptStudentName.value);
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
              <StudentSearch admission={admission} name={studentName} handleName={handleName}/>
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
