import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "./newComponents/PrivateRoute";

import UpdateData from "./newPages/alumniUFCG/UpdateData";
import SeeMore from "./newPages/alumniUFCG/SeeMore";

import Home from "./newPages/Home";
import Login from "./newPages/Login";

import Services from "./pages/Services";

import Actives from "./newPages/statistics/students/Actives";
import Alumni from "./newPages/statistics/students/Alumni";
import Dropout from "./newPages/statistics/students/Dropout";

import StudentsGlossary from "./newPages/statistics/students/Glossary";
import TeachersGlossary from "./newPages/statistics/teachers/glossary";
import EnrollmentsGlossary from "./newPages/statistics/enrollments/glossary";
import SubjectsGlossary from "./newPages/statistics/subjects/glossary";

import Delayed from "./newPages/statistics/students/Delayed";

import Enrollments from "./newPages/statistics/Enrollments";
import Subjects from "./newPages/statistics/Subjects";

import ActiveStudents from "./pages/Statistics/Students/ActiveStudents";
import GraduatedStudents from "./pages/Statistics/Students/GraduatedStudents";
import EvadedStudents from "./pages/Statistics/Students/EvadedStudents";
import RetainedStudents from "./pages/Statistics/Students/RetainedStudents";

import SummarySubjects from "./pages/Statistics/Subjects/Summary";
import MetricsSubjects from "./pages/Statistics/Subjects/Metrics";

import UpdateEnrollment from "./pages/Statistics/Enrollment/Ajustar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* New Design */}
        <Route exact path='/login' component={() => <Login />} />
        <Route exact path='/' component={() => <Home />} />
        <Route
          exact
          path='/newDesign/statistics/students/actives'
          component={() => <Actives />}
        />
        <Route
          exact
          path='/newDesign/statistics/students/alumni'
          component={() => <Alumni />}
        />
        <Route
          exact
          path='/newDesign/statistics/students/dropout'
          component={() => <Dropout />}
        />
        <Route
          exact
          path='/newDesign/statistics/students/glossary'
          component={() => <StudentsGlossary />}
        />
        <Route
          exact
          path='/newDesign/statistics/teachers/glossary'
          component={() => <TeachersGlossary />}
        />
        <Route
          exact
          path='/newDesign/statistics/enrollments/glossary'
          component={() => <EnrollmentsGlossary />}
        />
        <Route
          exact
          path='/newDesign/statistics/subjects/glossary'
          component={() => <SubjectsGlossary />}
        />
        <Route
          exact
          path='/newDesign/statistics/students/delayed'
          component={() => <Delayed />}
        />
        <Route
          exact
          path='/newDesign/statistics/enrollments'
          component={() => <Enrollments />}
        />
        <Route
          exact
          path='/newDesign/statistics/subjects'
          component={() => <Subjects />}
        />
        <Route
          exact
          path='/newDesign/alumniufcg/updatedata'
          component={() => <UpdateData />}
        />
        <Route
          exact
          path='/newDesign/alumniufcg/seemore'
          component={() => <SeeMore />}
        />

        {/* Old Design */}

        <Route
          exact
          path='/statistics'
          component={() => <Redirect to='/statistics/activestudents' />}
        />
        <Route
          exact
          path='/statistics/students'
          component={() => <Redirect to='/statistics/activestudents' />}
        />
        <Route
          exact
          path='/statistics/subjects'
          component={() => <Redirect to='/statistics/summarysubjects' />}
        />
        <Route
          exact
          path='/statistics/enrollments'
          component={() => <Redirect to='/statistics/updateenrollment' />}
        />

        <Route
          exact
          path='/statistics/activestudents'
          component={() => <ActiveStudents />}
        />
        <Route
          exact
          path='/statistics/graduatedstudents'
          component={() => <GraduatedStudents />}
        />
        <Route
          exact
          path='/statistics/evadedstudents'
          component={() => <EvadedStudents />}
        />
        <Route
          exact
          path='/statistics/retainedstudents'
          component={() => <RetainedStudents />}
        />

        <Route
          exact
          path='/statistics/summarysubjects'
          component={() => <SummarySubjects />}
        />
        <Route
          exact
          path='/statistics/metricssubjects'
          component={() => <MetricsSubjects />}
        />

        <Route
          exact
          path='/statistics/updateenrollment'
          component={() => <UpdateEnrollment />}
        />

        <Route exact path='/services' component={() => <Services />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
