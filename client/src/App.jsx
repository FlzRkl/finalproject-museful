import React from 'react';
import './App.scss';
import Appbar from './components/layout/Appbar';
import About from './components/pages/About';
import Component from './components/pages/Component';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List0 from './components/pages/components/List0';

function App() {
  return (
    <Router>
      <div className='App'>
        <Appbar />
        <header className='App-header pt-3'>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/component/0'>
              <List0 />
            </Route>
            <Route path='/component'>
              <Component />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
