import { combineReducers } from 'redux';
import mlReducer from './mlReducer';
import spReducer from './spReducer';
import alert from './alert';
import auth from './auth';
import listReducer from './listReducer';

//other reducers might be and should be imporetd here

export default combineReducers({
  mlReducer,
  spReducer,
  alert,
  auth,
  list: listReducer,
  //other state properties should be updated by the other reducers here
});
