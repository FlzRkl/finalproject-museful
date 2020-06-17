import { combineReducers } from 'redux';
import mlReducer from './mlReducer';
import spReducer from './spReducer';
import alert from './alert';
import auth from './auth';

//other reducers might be and should be imporetd here

export default combineReducers({
  posts: mlReducer,
  spReducer,
  alert,
  auth,
  //other state properties should be updated by the other reducers here
});
