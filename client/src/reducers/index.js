import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import alert from './alert';
import auth from './auth';
import listReducer from './listReducer';
import errorReducer from './errorReducer';

//other reducers might be and should be imporetd here

export default combineReducers({
  search: searchReducer,
  alert,
  auth,
  list: listReducer,
  error: errorReducer,
  //other state properties should be updated by the other reducers here
});
