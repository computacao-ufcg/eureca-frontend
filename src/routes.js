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

import StudentsGlossary from "./pages/statistics/students/Glossary";
import TeachersGlossary from "./pages/statistics/Teachers/Glossary";
import EnrollmentsGlossary from "./pages/statistics/Enrollments/Glossary";
import SubjectsGlossary from "./pages/statistics/Subjects/Glossary";
import RetentionGlossary from "./pages/statistics/Retention/Glossary";
import AlumniGlossary from "./pages/alumniUFCG/Glossary";

import Enrollments from "./pages/statistics/Enrollments";
import Subjects from "./pages/statistics/Subjects";
import Teachers from "./pages/statistics/Teachers";

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
        <PrivateRoute exact path='/statistics/enrollments/glossary' component={() => <EnrollmentsGlossary />} />
        <PrivateRoute exact path='/statistics/subjects/glossary' component={() => <SubjectsGlossary />} />
        <PrivateRoute exact path='/statistics/retention/glossary' component={() => <RetentionGlossary />} />
        <PrivateRoute exact path='/statistics/retention/students' component={() => <RetentionStudents />} />
        <PrivateRoute exact path='/statistics/retention/subjects' component={() => <RetentionSubjects />} />
        <PrivateRoute exact path='/alumniUFCG/glossary' component={() => <AlumniGlossary />} />
        <PrivateRoute exact path='/statistics/enrollments' component={() => <Enrollments />} />
        <PrivateRoute exact path='/statistics/subjects' component={() => <Subjects />} />
        <PrivateRoute exact path='/statistics/teachers' component={() => <Teachers />} />
        <PrivateRoute exact path='/alumniufcg/updatedata' component={() => <UpdateData />} />
        <PrivateRoute exact path='/alumniufcg/search' component={() => <Search />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
