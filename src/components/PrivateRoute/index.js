import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const isLoged = !!sessionStorage.getItem("eureca-token");
  return isLoged ? <Route {...props} /> : <Redirect to='/' />;
};

export default PrivateRoute;
