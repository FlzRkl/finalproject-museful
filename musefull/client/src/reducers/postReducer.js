/* We need the action types to chose for every action
which part of our state should be changed */

import { FETCH_POSTS, NEW_POST } from  '../actions/types'

/* this initialState below will represent the state saved in the store and any change to it here will change also the state in the store  */
/* How is that :
  - The postReducer will change the initialState here
  - The combineReducers will change the state in the rootReducer
  - The rootReducer is passed into the createStore where the original state is saved and make the change in the store.
*/
const  initialState  = {
items: [],
item: {}
}
export  default  function (state  =  initialState, action) {
	switch (action.type) {
		case  FETCH_POSTS:
			return {
				...state,
				items:  action.payload
					};
		default:
			return  state;
     }
}