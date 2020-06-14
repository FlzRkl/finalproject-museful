import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// ROUTES
import DailyLearning from "../dailyLearning/dailyLearning";
import Dashboard from "../dashboard/Dashboard.js";
import Highscores from "../highscores/Highscores.js";
import LandingPage from "../landingPage/LandingPage.js";
import Login from "../login/Login.js";
import NotFound from "../constants/NotFound";
import Register from "../login/Register";
import Settings from "../settings/Settings.js";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={LandingPage} exact path='/' />
        <Route component={Login} exact path='/login' />
        <Route component={Register} exact path='/register' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route
          component={DailyLearning}
          exact
          path='/dashboard/daily-learning'
        />
        <Route component={Highscores} exact path='/dashboard/highscores' />
        <Route component={Settings} exact path='/dashboard/settings' />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
