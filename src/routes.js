import React from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';

import Home from './pages/Home';
import Statistics from './pages/Statistics'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {() =>  <Home/> } />
        <Route exact path="/statistics" component = {() => <Statistics/> }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;