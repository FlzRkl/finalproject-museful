/* We need the action types to chose for every action
which part of our state should be changed */

import {
  FETCH_INIT,
  FETCH_WORDS,
  SET_SEARCH_FILTER,
} from '../actions/actionTypes';
import { SEARCH_FILTERS } from '../components/searchWord/Search_Filters';
/* this initialState below will represent the state saved in the store and any change to it here will change also the state in the store  */
/* How is that :
  - The postReducer will change the initialState here
  - The combineReducers will change the state in the rootReducer
  - The rootReducer is passed into the createStore where the original state is saved and make the change in the store.
*/
const initialState = {
  isLoading: false,
  isError: false,
  filter: 'RHYM',
  data: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_WORDS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
