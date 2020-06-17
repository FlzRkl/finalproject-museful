import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// ROUTES
import DailyLearning from '../dailyLearning/dailyLearning';
import Dashboard from '../dashboard/Dashboard.js';
import Progress from '../progress/Progress.js';
import LandingPage from '../landingPage/LandingPage.js';
import Login from '../login/Login.js';
import SignIn from '../sign-in/App';
import NotFound from '../constants/NotFound';
import Register from '../login/Register';
import Settings from '../settings/Settings.js';
import SearchML from '../searchML/SearchML';
import SearchRhy from '../searchRhy/SearchRhy';
import List from '../list/List';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={LandingPage} exact path='/' />
        {/* <Route component={Login} exact path='/login' /> */}
        <Route component={SignIn} exact path='/signin' />
        <Route component={Register} exact path='/register' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route
          component={DailyLearning}
          exact
          path='/dashboard/daily-learning'
        />
        <Route component={Progress} exact path='/dashboard/progress' />
        <Route component={Settings} exact path='/dashboard/settings' />
        <Route component={SearchML} exact path='/dashboard/searchml' />
        <Route component={SearchRhy} exact path='/dashboard/searchrhy' />
        <Route component={List} exact path='/dashboard/list' />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
