import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// ROUTES
import DailyLearning from '../dailyLearning/dailyLearning';
import Dashboard from '../dashboard/Dashboard.js';
import Progress from '../progress/Progress.js';
import registerModal from '../auth/registerModal';
// import SignIn from "../sign-in/App";
import NotFound from '../constants/NotFound';
import Register from '../login/Register';
import Settings from '../settings/Settings.js';
import searchWord from '../searchWord/SearchWord.jsx';
import ListComponent from '../list/ListComponent';
import Lists from '../list/Lists';
import AboutUs from '../aboutUs/aboutUs';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route component={registerModal} exact path='/' />
        {/* <Route component={Login} exact path='/login' /> */}
        {/* <Route component={SignIn} exact path="/signin" /> */}
        <Route component={Register} exact path='/register' />
        <Route component={Dashboard} exact path='/dashboard' />
        <Route component={AboutUs} exact path='/about-us' />
        <Route
          component={DailyLearning}
          exact
          path='/dashboard/daily-learning'
        />
        <Route component={Progress} exact path='/dashboard/progress' />
        <Route component={Settings} exact path='/dashboard/settings' />

        <Route component={searchWord} exact path='/dashboard/search-word' />

        <Route
          component={ListComponent}
          exact
          path='/dashboard/listComponent'
        />
        <Route component={Lists} exact path='/dashboard/lists' />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
