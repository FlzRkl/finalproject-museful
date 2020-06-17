import { combineReducers } from "redux";
import mlReducer from "./mlReducer";
import spReducer from "./spReducer";

//other reducers might be and should be imporetd here

export default combineReducers({
  posts: mlReducer,
  spReducer,
  //other state properties should be updated by the other reducers here
});
