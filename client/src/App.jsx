import React, { useReducer } from 'react';
import './App.scss';
import Appbar from './components/layout/Appbar';
import About from './components/pages/About';
import Component from './components/pages/Component';
import Features from './components/pages/Features';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListAtomInput from './components/pages/ListComponent/ListAtomInput';

const currentDate = (date) => (date = new Date().toISOString());

const initialWorkTracker = {
  input: 0,
  output: 0,
  success: 0,
  date: currentDate(),
};

const wTReducer = (state, action) => {
  switch (action.type) {
    case 'incrementI':
      return state.input + 1;
    case 'decrementI':
      return state.input - 1;
    case 'incrementO':
      return state.output + 1;
    case 'decrementO':
      return state.output - 1;
    case 'incrementS':
      return state.success + 1;
    case 'reset':
      return initialWorkTracker;
    default:
      return state;
  }
};

const initialList = { list: 'test', subList: () => 3 + 3 };

const listReducer = (state, action) => {
  switch (action.type) {
    case 'incrementI':
      return state.input + 1;
    case 'reset':
      return initialList;
    default:
      return state;
  }
};

export const WorkTrackerContext = React.createContext(initialWorkTracker);
export const ListsContext = React.createContext(initialList);

function App() {
  const [workTracker, wTDispatch] = useReducer(wTReducer, initialWorkTracker);
  const [lists, listDispatch] = useReducer(listReducer, initialList);

  return (
    <>
      <WorkTrackerContext.Provider
        value={{ wTState: workTracker, wTDispatch: wTDispatch }}
      >
        <ListsContext.Provider
          value={{ listState: lists, listDispatch: listDispatch }}
        >
          <Router>
            <div className='App'>
              <Appbar />
              <header className='App-header pt-3'>
                <Switch>
                  <Route path='/about'>
                    <About />
                  </Route>
                  <Route path='/component/0'>
                    <ListAtomInput />
                  </Route>
                  <Route path='/component'>
                    <Component />
                  </Route>
                  <Route path='/features'>
                    <Features />
                  </Route>
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </header>
            </div>
          </Router>{' '}
        </ListsContext.Provider>
      </WorkTrackerContext.Provider>
    </>
  );
}

export default App;
