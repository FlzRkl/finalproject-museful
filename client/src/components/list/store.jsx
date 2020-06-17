import React, { useReducer } from 'react';
// import './App.scss';
import Appbar from './components/layout/Appbar';
import About from './components/pages/About';
import Component from './components/pages/Component';
import Features from './components/pages/Features';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListAtomInput from './components/pages/ListComponent/ListAtomInput';
import uuid from 'react-uuid';

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

const initialList = [{ id: uuid(), title: 'List No Null', subList: [] }];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return [
        {
          ...state[0],
          subList: [
            {
              id: uuid(),
              value: action.value,
              subList: [],
            },
            ...state[0].subList,
          ],
        },
      ];

    case 'subList':
      const i = findItemNested(state, action.id, 'subList');
      console.log(i);
      return [
        {
          ...state[0],
          subList: [
            {
              ...state[0].subList[i],
              subList: [
                {
                  id: uuid(),
                  value: action.value,
                },
                ...state[0].subList[i].subList,
              ],
            },
          ],
        },
      ];

    case 'reset':
      return initialList;
    default:
      return state;
  }
};

export const WorkTrackerContext = React.createContext(initialWorkTracker);
export const ListsContext = React.createContext(initialList);

function App() {
  console.log('onchange');

  const [workTracker, wTDispatch] = useReducer(wTReducer, initialWorkTracker);
  const [lists, listDispatch] = useReducer(listReducer, initialList);

  console.log(lists);
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

const findItemNested = (arr, itemId, nestingKey) =>
  arr.reduce((a, item, currentIndex = 0) => {
    if (a) return a;
    if (item.id === itemId) return currentIndex;
    if (item[nestingKey])
      return findItemNested(item[nestingKey], itemId, nestingKey);
  }, null);
//const res = findItemNested(array, 959, 'subList');
//console.log(res);
