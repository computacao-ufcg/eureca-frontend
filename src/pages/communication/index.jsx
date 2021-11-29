import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import { api_EB } from "../../services/api";
import { courseCode, curriculum } from "../../config/storage";
import { eurecaAuthenticationHeader } from "../../config/defaultValues";
import { admissionTerm, operations, genders, statuses, subject_type, academic_units, cotas } from "./util";
import ResultsTable from "./table/resultsTable";
import "./style.css";

const CommunicationPage = () => {
  const [data, setData] = useState([]);

  const [admission, setAdmission] = useState(".*?");
  const [gpa, setGpa] = useState(0);
  const [gpaOperation, setGpaOperation] = useState(">=");
  const [creditsOperation, setCreditsOperation] = useState(">=");
  const [enrolledCredits, setEnrolledCredits] = useState(0);
  const [gender, setGender] = useState(".*?");
  const [status, setStatus] = useState("Todos");
  const [studentName, setStudentName] = useState(".*?");
  const [affirmativePolicy, setAffirmativePolicy] = useState("L1");
  const [studentCheck, setStudentCheck] = useState(false);

  const [subjectsCheck, setSubjectsCheck] = useState(false);
  const [subjectType, setSubjectType] = useState("MANDATORY");
  const [subjectAcademicUnit, setSubjectAcademicUnit] = useState("1411");
  const [subjectName, setSubjectName] = useState(".*?");
  const [subjectTerm, setSubjectTerm] = useState("2020.2");

  const [teacherCheck, setTeacherCheck] = useState(false);
  const [teacherAcademicUnit, setTeacherAcademicUnit] = useState("1411");
  const [teacherName, setTeacherName] = useState(".*?");
  const [teacherId, setTeacherId] = useState(".*?");
  const [teacherTerm, setTeacherTerm] = useState("2020.2");
  const [label, setLabel] = useState("");

  const handleStudentSearch = async (
    admission,
    affirmativePolicy,
    gpa,
    gpaOperation,
    enrolledCredits,
    creditsOperation,
    gender,
    status,
    studentName
  ) => {
    let query = `communication/studentsEmailSearch?admissionTerm=${admission}&affirmativePolicy=${affirmativePolicy}&courseCode=${courseCode}&cra=${
      gpa || 0
    }&craOperation=${gpaOperation}&curriculumCode=${curriculum}&enrolledCredits=${
      enrolledCredits || 0
    }&enrolledCreditsOperation=${creditsOperation}&gender=${gender}&status=${status}&studentName=${
      studentName || ".*?"
    }`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Response error");
    }
  };

  const handleSubjectsSearch = async (subjectAcademicUnit, subjectName, subjectType, subjectTerm) => {
    let query = `communication/subjectEmailSearch?academicUnit=${subjectAcademicUnit}&courseCode=${courseCode}&curriculumCode=${curriculum}&subjectName=${
      subjectName || ".*?"
    }&subjectType=${subjectType}&term=${subjectTerm}`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Response error");
    }
  };

  const handleTeacherSearch = async (teacherAcademicUnit, teacherId, teacherName, teacherTerm) => {
    let query = `/communication/teacherEmailSearch?academicUnit=${teacherAcademicUnit}&courseCode=${courseCode}&curriculumCode=${curriculum}&teacherId=${teacherId}&teacherName=${
      teacherName || ".*?"
    }&term=${teacherTerm}`;
    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res.status === 200) {
      console.log(res);
      return res.data;
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
    const proposedLabel = operations.find(item => item.value === gpaOperation);
    setLabel(proposedLabel.label);
  };

  const handleCreditsOperationChange = creditsOperation => {
    setCreditsOperation(creditsOperation);
    const proposedLabel = operations.find(item => item.value === creditsOperation);
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

  const handleAffirmativePolicyChange = affirmativePolicy => {
    setAffirmativePolicy(affirmativePolicy);
    const proposedLabel = cotas.find(item => item.value === affirmativePolicy);
    setLabel(proposedLabel.label);
  };

  const handleSubjectsAUChange = subjectAcademicUnit => {
    setSubjectAcademicUnit(subjectAcademicUnit);
    const proposedLabel = academic_units.find(item => item.value === subjectAcademicUnit);
    setLabel(proposedLabel.label);
  };

  const handleSubjectsTypeChange = subjectType => {
    setSubjectType(subjectType);
    const proposedLabel = subject_type.find(item => item.value === subjectType);
    setLabel(proposedLabel.label);
  };

  const handleSubjectTermChange = subjectTerm => {
    setSubjectTerm(subjectTerm);
    const proposedLabel = admissionTerm.find(item => item.value === subjectTerm);
    setLabel(proposedLabel.label);
  };

  const handleTeacherAUChange = teacherAcademicUnit => {
    setTeacherAcademicUnit(teacherAcademicUnit);
    const proposedLabel = academic_units.find(item => item.value === teacherAcademicUnit);
    setLabel(proposedLabel.label);
  };

  const handleTeacherTermChange = teacherTerm => {
    setTeacherTerm(subjectTerm);
    const proposedLabel = admissionTerm.find(item => item.value === teacherTerm);
    setLabel(proposedLabel.label);
  };

  const handleSearch = async () => {
    var response = null;
    if (studentCheck && subjectsCheck == false && teacherCheck == false) {
      response = await handleStudentSearch(
        admission,
        affirmativePolicy,
        gpa,
        gpaOperation,
        enrolledCredits,
        creditsOperation,
        gender,
        status,
        studentName
      );
      setData(response);
    } else if (studentCheck == false && teacherCheck == false && subjectsCheck) {
      response = await handleSubjectsSearch(subjectAcademicUnit, subjectName, subjectType, subjectTerm);
      setData(response);
    } else if (studentCheck && subjectsCheck && teacherCheck == false) {
      var resultStudents = await handleStudentSearch(
        admission,
        affirmativePolicy,
        gpa,
        gpaOperation,
        enrolledCredits,
        creditsOperation,
        gender,
        status,
        studentName
      );
      var resultSubject = await handleSubjectsSearch(subjectAcademicUnit, subjectName, subjectType, subjectTerm);
      response = Object.assign({}, resultStudents, resultSubject);
      setData(response);
    } else if (studentCheck == false && subjectsCheck == false && teacherCheck) {
      response = await handleTeacherSearch(teacherAcademicUnit, teacherId, teacherName, teacherTerm);
      setData(response);
    } else if (studentCheck && subjectsCheck == false && teacherCheck) {
      var resultStudents = await handleStudentSearch(
        admission,
        affirmativePolicy,
        gpa,
        gpaOperation,
        enrolledCredits,
        creditsOperation,
        gender,
        status,
        studentName
      );
      var resultTeachers = await handleTeacherSearch(teacherAcademicUnit, teacherId, teacherName, teacherTerm);
      response = Object.assign({}, resultStudents, resultTeachers);
      setData(response);
    } else if (studentCheck == false && subjectsCheck && teacherCheck) {
      var resultSubject = await handleSubjectsSearch(subjectAcademicUnit, subjectName, subjectType, subjectTerm);
      var resultTeachers = await handleTeacherSearch(teacherAcademicUnit, teacherId, teacherName, teacherTerm);
      response = Object.assign({}, resultSubject, resultTeachers);
      setData(response);
    } else if (studentCheck && subjectsCheck && teacherCheck) {
      var resultStudents = await handleStudentSearch(
        admission,
        affirmativePolicy,
        gpa,
        gpaOperation,
        enrolledCredits,
        creditsOperation,
        gender,
        status,
        studentName
      );
      var resultSubject = await handleSubjectsSearch(subjectAcademicUnit, subjectName, subjectType, subjectTerm);
      var resultTeachers = await handleTeacherSearch(teacherAcademicUnit, teacherId, teacherName, teacherTerm);
      response = Object.assign(resultStudents, resultSubject, resultTeachers);
      setData(response);
    }
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

  const studentsEmail = listEmails(data);
  const handleCopy = () => {
    navigator.clipboard.writeText(studentsEmail);
    alert("Endereços copiados com sucesso!");
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
            <div className='title-search'>
              <input type='checkbox' value={studentCheck} onClick={e => setStudentCheck(e.target.checked)} />
              <h1>Buscar e-mails por Discentes</h1>
            </div>
            <div className='selects-students'>
              <div>
                <p>Nome</p>
                <input
                  id='ipt-name'
                  type='text'
                  placeholder='Buscar por nome'
                  onChange={e => setStudentName(e.target.value)}
                />
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
                    defaultValue={">="}
                    onChange={value => handleGpaOperationChange(value)}
                    data={operations}
                    searchable={false}
                    cleanable={false}
                  />
                </div>
                <div>
                  <input
                    className='ipt-cra-value'
                    id='ipt-cra-value'
                    type='text'
                    placeholder='0'
                    onChange={e => setGpa(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <p>Créditos Matriculados</p>
                <div className='second-row-students'>
                  <div>
                    <SelectPicker
                      onChange={value => handleCreditsOperationChange(value)}
                      defaultValue={">="}
                      data={operations}
                      searchable={false}
                      cleanable={false}
                    />
                  </div>
                  <div>
                    <input
                      className='ipt-credits'
                      id='ipt-credits'
                      type='text'
                      placeholder='0'
                      onChange={e => setEnrolledCredits(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Cota</p>
                <SelectPicker
                  defaultValue={"L1"}
                  data={cotas}
                  onChange={value => handleAffirmativePolicyChange(value)}
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
            <div className='title-search'>
              <input type='checkbox' value={teacherCheck} onClick={e => setTeacherCheck(e.target.checked)} />
              <h1>Buscar e-mails por Docentes</h1>
            </div>
            <div className='selects-teachers'>
              <div>
                <p>Nome</p>
                <input
                  id='ipt-name'
                  type='text'
                  placeholder='Buscar por nome'
                  onChange={e => setTeacherName(e.target.value)}
                />
              </div>
              <div>
                <p>SIAPE</p>
                <input
                  id='ipt-siape'
                  type='text'
                  placeholder='Buscar por SIAPE'
                  onChange={e => setTeacherId(e.target.value)}
                />
              </div>
              <div>
                <p>Uni. acadêmica</p>
                <SelectPicker
                  defaultValue={"1411"}
                  data={academic_units}
                  searchable={false}
                  cleanable={false}
                  onChange={value => handleTeacherAUChange(value)}
                />
              </div>
              <div>
                <p>Período</p>
                <SelectPicker
                  defaultValue={"2020.2"}
                  data={admissionTerm}
                  searchable={false}
                  cleanable={false}
                  onChange={value => handleTeacherTermChange(value)}
                />
              </div>
            </div>

            <div className='title-search'>
              <input type='checkbox' value={subjectsCheck} onClick={e => setSubjectsCheck(e.target.checked)} />
              <h1>Buscar e-mails por Disciplinas</h1>
            </div>
            <div className='selects-subjects'>
              <div>
                <p>Nome</p>
                <input
                  id='ipt-subject-name'
                  type='text'
                  placeholder='Buscar por nome da disciplina'
                  onChange={e => setSubjectName(e.target.value)}
                />
              </div>
              <div>
                <p>Tipo</p>
                <SelectPicker
                  onChange={value => handleSubjectsTypeChange(value)}
                  defaultValue={"MANDATORY"}
                  data={subject_type}
                  searchable={true}
                  cleanable={false}
                  style={{ width: 180 }}
                />
              </div>
              <div>
                <p>Uni. acadêmica</p>
                <SelectPicker
                  onChange={value => handleSubjectsAUChange(value)}
                  defaultValue={"1411"}
                  data={academic_units}
                  searchable={false}
                  cleanable={false}
                />
              </div>
              <div>
                <p>Período</p>
                <SelectPicker
                  onChange={value => handleSubjectTermChange(value)}
                  defaultValue={"2020.2"}
                  data={admissionTerm}
                  searchable={false}
                  cleanable={false}
                />
              </div>
            </div>
          </div>
          <div className='search-button'>
            <button onClick={handleSearch}>BUSCAR</button>
          </div>
          <div className='response'>
            <h1>Endereços de E-mail</h1>
            <ResultsTable listData={data} />
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