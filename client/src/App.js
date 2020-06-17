import React, { Fragment, useEffect } from 'react';

//ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/constants/NavBar';
import LandingPage from './components/landingPage/LandingPage';
import Routes from './components/routing/Routes';

//STYLING
import 'bootstrap';
import './style/_App.scss';

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

console.log(store);

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment className='bodyS'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
