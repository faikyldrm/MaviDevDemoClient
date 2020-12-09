import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/app';
import RequireAuth from '../components/auth/require_auth';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Signup from '../components/auth/signup';
import Feature from '../components/feature';
import Welcome from '../components/welcome';
import FeatureDetail from '../components/featureDetail';

const Routes = () => {
    return (
        <App>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/feature" component={RequireAuth(Feature)} />
            <Route exact path="/featureDetail" component={RequireAuth(FeatureDetail)} />
        </App>
    );
};

export default Routes;
