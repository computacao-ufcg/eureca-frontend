import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services'

import DiscentesAtivos from './pages/Statistics/Discentes/DiscentesAtivos'
import DiscentesEgressos from './pages/Statistics/Discentes/DiscentesEgressos'
import DiscentesEvadidos from './pages/Statistics/Discentes/DiscentesEvadidos'
import DiscentesRetidos from './pages/Statistics/Discentes/DiscentesRetidos'

import Atal from './pages/Statistics/Disciplinas/ATAL'

import Ajustar from './pages/Statistics/Matrículas/Ajustar'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {() => <Home/> } />
        <Route exact path="/statistics" component = {() => <Redirect to='/statistics/discentesAtivos'/> }/>
        <Route exact path="/statistics/discentes" component = {() => <Redirect to='/statistics/discentesAtivos'/> }/>
        <Route exact path="/statistics/disciplinas" component = {() => <Redirect to='/statistics/disciplinasATAL'/> }/>
        <Route exact path="/statistics/matriculas" component = {() => <Redirect to='/statistics/matriculasAjustar'/> }/>

        <Route exact path="/statistics/discentesAtivos" component = {() => <DiscentesAtivos/>}/>
        <Route exact path="/statistics/discentesEgressos" component = {() => <DiscentesEgressos/>}/>
        <Route exact path="/statistics/discentesEvadidos" component = {() => <DiscentesEvadidos/>}/>
        <Route exact path="/statistics/discentesRetidos" component = {() => <DiscentesRetidos/>}/>

        <Route exact path="/statistics/disciplinasATAL" component = {() => <Atal/>}/>

        <Route exact path="/statistics/matriculasAjustar" component = {() => <Ajustar/>}/>

        <Route exact path="/services" component = {() => <Services/> }/>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;