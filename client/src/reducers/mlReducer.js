/* We need the action types to chose for every action
which part of our state should be changed */

import { FETCH_MEANING_SIMILAR } from '../actions/actionTypes';

/* this initialState below will represent the state saved in the store and any change to it here will change also the state in the store  */
/* How is that :
  - The postReducer will change the initialState here
  - The combineReducers will change the state in the rootReducer
  - The rootReducer is passed into the createStore where the original state is saved and make the change in the store.
*/
const initialState = {
  words: [],
  word: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEANING_SIMILAR:
      return {
        ...state,
        words: action.payload,
      };
    default:
      return state;
  }
}
