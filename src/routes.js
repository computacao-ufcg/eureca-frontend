import React from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';

import Home from './pages/Home';
import Statistics from './pages/Statistics'
import Services from './pages/Services'
import Monitoring from './pages/Monitoring'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {() =>  <Home/> } />
        <Route exact path="/statistics" component = {() => <Statistics/> }/>
        <Route exact path="/services" component = {() => <Services/> }/>
        <Route exact path="/monitoring" component = {() => <Monitoring/> }/>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;