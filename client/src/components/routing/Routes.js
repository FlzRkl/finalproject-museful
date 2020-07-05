import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// ROUTES
import DailyLearning from '../dailyLearning/dailyLearning';
import Dashboard from '../dashboard/Dashboard.js';
import Progress from '../progress/Progress.js';
import LandingPage from '../landingPage/LandingPage.js';
import NotFound from '../constants/NotFound';
import Settings from '../settings/Settings.js';
import searchWord from '../searchWord/SearchWord.jsx';
import ListComponent from '../list/ListComponent';
import Lists from '../list/Lists';
import AboutUs from '../aboutUs/aboutUs';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={LandingPage} exact path='/' />
        <PrivateRoute component={Dashboard} exact path='/dashboard' />
        <PrivateRoute component={AboutUs} exact path='/about-us' />
        <PrivateRoute
          component={DailyLearning}
          exact
          path='/dashboard/daily-learning'
        />
        <PrivateRoute component={Progress} exact path='/dashboard/progress' />
        <PrivateRoute component={Settings} exact path='/dashboard/settings' />
        <PrivateRoute
          component={searchWord}
          exact
          path='/dashboard/search-word'
        />
        <PrivateRoute
          component={ListComponent}
          exact
          path='/dashboard/listComponent'
        />
        <PrivateRoute component={Lists} exact path='/dashboard/lists' />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
