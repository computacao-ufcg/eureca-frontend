import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const isLoged = !!localStorage.getItem('eureca-token');
    return isLoged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;