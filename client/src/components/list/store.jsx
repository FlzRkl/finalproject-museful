import React, { useReducer } from 'react';
import './list.scss';
import List from './List';

const initialList = [{ id: '0', title: 'List No Null', subList: [] }];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return [
        {
          ...state[0],
          subList: [
            {
              id: state.length,
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
                  id: state.length,
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

export const ListsContext = React.createContext(initialList);

function App() {
  console.log('onchange');

  const [lists, listDispatch] = useReducer(listReducer, initialList);

  console.log(lists);
  return (
    <>
      <ListsContext.Provider
        value={{ listState: lists, listDispatch: listDispatch }}
      >
        <div className='App'>
          <header className='App-header pt-3'>
            <List />
          </header>
        </div>
      </ListsContext.Provider>
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
