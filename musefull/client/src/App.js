import React, {Component} from "react";

//ROUTER
import {BrowserRouter, Route} from 'react-router-dom';

//COMPONENTS
import Dashboard from './components/dashboard/Dashboard.js';
import Highscores from './components/highscores/Highscores.js';
import LandingPage from './components/landingPage/LandingPage.js';
import Login from './components/login/Login.js';
import Settings from './components/settings/Settings.js';


//STYLING
import "./_App.scss";

//REDUX
import { Provider } from  'react-redux';
import  store  from  './store';

import moduleName from 'module'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className='App'>
     <h1> Musefull App </h1>
    <Route component= {LandingPage} path="/" exact />
     <Route component= {Login} path="/login" />
     <Route component= {Dashboard} path="/dashboard" />
     <Route component= {Highscores} path="/dashboard/highscores" />
<Route component= {Settings} path="/dashboard/settings" />     
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
