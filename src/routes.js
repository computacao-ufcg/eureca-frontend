import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import UpdateData from "./pages/alumniUFCG/UpdateData";
import Search from "./pages/alumniUFCG/Search";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Actives from "./pages/statistics/students/Actives";
import Alumni from "./pages/statistics/students/Alumni";
import Dropout from "./pages/statistics/students/Dropout";
import RetentionStudents from "./pages/statistics/Retention/Students";
import RetentionSubjects from "./pages/statistics/Retention/Subjects";
import EnrollmentsMandatory from "./pages/statistics/Enrollments/Mandatory";
import EnrollmentsOptative from "./pages/statistics/Enrollments/Optative";
import EnrollmentsElective from "./pages/statistics/Enrollments/Elective";
import EnrollmentsComplementary from "./pages/statistics/Enrollments/Complementary";
import UASCTeachers from "./pages/statistics/Teachers/UASC";
import UAMatTeachers from "./pages/statistics/Teachers/UAMat";
import UAEstTeachers from "./pages/statistics/Teachers/UAEst";
import UALTeachers from "./pages/statistics/Teachers/UAL";
import UAACTeachers from "./pages/statistics/Teachers/UAAC";
import UAAMiTeachers from "./pages/statistics/Teachers/UAAMi";
import UACSTeachers from "./pages/statistics/Teachers/UACS";
import UAEFTeachers from "./pages/statistics/Teachers/UAEF";
import UAFTeachers from "./pages/statistics/Teachers/UAF";
import TeacherSearch from "./pages/statistics/Teachers/Search";
import StudentSearch from "./pages/statistics/students/Search";

import StudentsGlossary from "./pages/statistics/students/Glossary";
import TeachersGlossary from "./pages/statistics/Teachers/Glossary";
import EnrollmentsGlossary from "./pages/statistics/Enrollments/Glossary";
import SubjectsGlossary from "./pages/statistics/Subjects/Glossary";
import RetentionGlossary from "./pages/statistics/Retention/Glossary";
import AlumniGlossary from "./pages/alumniUFCG/Glossary";

import SubjectsMandatory from "./pages/statistics/Subjects/Mandatory";
import SubjectsOptional from "./pages/statistics/Subjects/Optional";
import SubjectsComplementary from "./pages/statistics/Subjects/Complementary";
import SubjectsElectives from "./pages/statistics/Subjects/Elective";

const Routes = () => {
  return (
    <BrowserRouter basename='/app'>
      <Switch>
        <Route exact path='/' component={() => <Login />} />
        <PrivateRoute exact path='/home' component={() => <Home />} />
        <PrivateRoute exact path='/statistics/students/actives' component={() => <Actives />} />
        <PrivateRoute exact path='/statistics/students/alumni' component={() => <Alumni />} />
        <PrivateRoute exact path='/statistics/students/dropout' component={() => <Dropout />} />
        <PrivateRoute exact path='/statistics/students/glossary' component={() => <StudentsGlossary />} />
        <PrivateRoute exact path='/statistics/teachers/glossary' component={() => <TeachersGlossary />} />
        <PrivateRoute exact path='/statistics/subjects/glossary' component={() => <SubjectsGlossary />} />
        <PrivateRoute exact path='/statistics/subjects/mandatory' component={() => <SubjectsMandatory />} />
        <PrivateRoute exact path='/statistics/subjects/optional' component={() => <SubjectsOptional />} />
        <PrivateRoute exact path='/statistics/subjects/complementary' component={() => <SubjectsComplementary />} />
        <PrivateRoute exact path='/statistics/subjects/elective' component={() => <SubjectsElectives />} />
        <PrivateRoute exact path='/statistics/enrollments/glossary' component={() => <EnrollmentsGlossary />} />
        <PrivateRoute exact path='/statistics/retention/glossary' component={() => <RetentionGlossary />} />
        <PrivateRoute exact path='/statistics/retention/students' component={() => <RetentionStudents />} />
        <PrivateRoute exact path='/statistics/retention/subjects' component={() => <RetentionSubjects />} />
        <PrivateRoute exact path='/statistics/enrollments/mandatory' component={() => <EnrollmentsMandatory />} />
        <PrivateRoute exact path='/statistics/enrollments/optative' component={() => <EnrollmentsOptative />} />
        <PrivateRoute exact path='/statistics/enrollments/elective' component={() => <EnrollmentsElective />} />
        <PrivateRoute
          exact
          path='/statistics/enrollments/complementary'
          component={() => <EnrollmentsComplementary />}
        />
        <PrivateRoute exact path='/statistics/teachers/UASC' component={() => <UASCTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAMat' component={() => <UAMatTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAEst' component={() => <UAEstTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAL' component={() => <UALTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UACS' component={() => <UACSTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAAMi' component={() => <UAAMiTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAF' component={() => <UAFTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAEF' component={() => <UAEFTeachers />} />
        <PrivateRoute exact path='/statistics/teachers/UAAC' component={() => <UAACTeachers />} />
        <PrivateRoute exact path='/alumniUFCG/glossary' component={() => <AlumniGlossary />} />
        <PrivateRoute exact path='/alumniufcg/updatedata' component={() => <UpdateData />} />
        <PrivateRoute exact path='/alumniufcg/search' component={() => <Search />} />
        <PrivateRoute exact path='/statistics/teachers/search' component={() => <TeacherSearch />} />
        <PrivateRoute exact path='/statistics/students/search' component={() => <StudentSearch />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
