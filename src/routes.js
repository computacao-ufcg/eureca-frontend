import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';

import Home from './pages/Home';
import Services from './pages/Services'

import Actives from './pages/newDesign/Actives';

import ActiveStudents from './pages/Statistics/Students/ActiveStudents'
import GraduatedStudents from './pages/Statistics/Students/GraduatedStudents'
import EvadedStudents from './pages/Statistics/Students/EvadedStudents'
import RetainedStudents from './pages/Statistics/Students/RetainedStudents'

import SummarySubjects from './pages/Statistics/Subjects/Summary';
import MetricsSubjects from './pages/Statistics/Subjects/Metrics';

import UpdateEnrollment from './pages/Statistics/Enrollment/Ajustar'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {() => <Login/> } />
        <Route exact path="/home" component = {() => <Home/> } />
        <Route exact path="/statistics" component = {() => <Redirect to='/statistics/activestudents'/> }/>
        <Route exact path="/statistics/students" component = {() => <Redirect to='/statistics/activestudents'/> }/>
        <Route exact path="/statistics/subjects" component = {() => <Redirect to='/statistics/summarysubjects'/> }/>
        <Route exact path="/statistics/enrollments" component = {() => <Redirect to='/statistics/updateenrollment'/> }/>

        <Route exact path="/statistics/activestudents" component = {() => <ActiveStudents/>}/>
        <Route exact path="/statistics/graduatedstudents" component = {() => <GraduatedStudents/>}/>
        <Route exact path="/statistics/evadedstudents" component = {() => <EvadedStudents/>}/>
        <Route exact path="/statistics/retainedstudents" component = {() => <RetainedStudents/>}/>

        <Route exact path="/statistics/summarysubjects" component = {() => <SummarySubjects/>}/>
        <Route exact path="/statistics/metricssubjects" component = {() => <MetricsSubjects/>}/>

        <Route exact path="/statistics/updateenrollment" component = {() => <UpdateEnrollment/>}/>

        <Route exact path="/services" component = {() => <Services/> }/>

        {/* New Design */}

        <Route exact path="/newDesign/statistics/students/actives" component={() => <Actives /> } />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;