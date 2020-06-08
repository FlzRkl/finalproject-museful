import React from "react";
import { Route, Switch } from "react-router-dom";

// ROUTES
import Dashboard from "../dashboard/Dashboard.js";
import Highscores from "../highscores/Highscores.js";
import LandingPage from "../landingPage/LandingPage.js";
import Login from "../login/Login.js";
import NotFound from "../constants/NotFound";
import Settings from "../settings/Settings.js";

const Routes = () => {
  return (
    <div className='container'>
      <Switch>
        <Route component={LandingPage} exact path='/' />
        <Route component={Login} exact path='/login' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route component={Highscores} exact path='/dashboard/highscores' />
        <Route component={Settings} exact path='/dashboard/settings' />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
