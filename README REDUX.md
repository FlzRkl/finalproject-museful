# React Redux Simple Steps to prepare the boilerplate

## Step 1 : Installation :

To use React Redux with your React app:

## Installation

React Redux 7.1 requires **React 16.8.3 or later.**

To use React Redux with your React app:

```bash
npm i redux react-redux redux-thunk

```

#### redux

A Predictable State Container for JS Apps

#### react-redux

Official React bindings for Redux

#### redux-thunk

redux-thunk is a Redux Middleware that lets you have Asynchronous Redux Actions, and send a dispatch from the body of the action function.

![](https://miro.medium.com/max/1624/1*vBeR3yXWcukp_yZpNBtHlg.png)

## Step 2 : Make Redux folder structer :

#### You should simulate the structure as the below chart:

![](https://image.slidesharecdn.com/reduxdataflowwithangular2-161118085712/95/redux-data-flow-with-angular-2-19-638.jpg?cb=1479459463)

### 1- Components Folder (the view in the above chart):

This folder should include all you React components from the App.jsx to any small components, you might also have inside **Components Folder** the whole react app folders structure as it was in react before using redux.

### 2- Store Folder:

This folder should include one index.js which have inside the store.

```bash
import { createStore, applyMiddleware } from  'redux';
import  thunk  from  'redux-thunk';
import  rootReducer  from  './reducers';
const  intialState  = {}
const  middleware  = [thunk]
const  store  =  createStore(rootReducer, intialState, applyMiddleware(...middleware))

export  default  store;

```

### 3- Reducers Folder:

This folder should include **one index.js** which have inside the rootReducer which will be indeed the combineReducers, that combines all the different reducers that you might need in your application such as below :

```bash
import { combineReducers } from  'redux'
import  postReducer  from  './postReducer'
//other reducers might be and should be imporetd as well here

export  default  combineReducers({
posts:  postReducer,
//other state properties should be updated by the other reducers here})
```

and the every single reducer imported in the index.js should have it's own file , for example the postReducer that was imporeted up it should be exported from postReducer.js as below :

```bash
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
```

### 4- Actions Folder:

This folder should include one js file for the types of our all actions, and a js file for every action in your application.
the types.js will only some exported constants like below :

```bash
export  const  FETCH_POSTS  =  'FETCH_POSTS'
export  const  NEW_POST  =  'NEW_POST'
```

and below is an example for one action file :

```bash
import { FETCH_POSTS, NEW_POST } from  './types'
export  const  fetchPosts  = () =>  async  dispatch  => {
const  res  =  await axios.get('https://jsonplaceholder.typicode.com/posts');
/*
On a successful response from the server we **dispatch** a synchronous success **action** with the data received from the response, here below the **action** has a **type** and a **payload**,
 - the  **type**: is to define which part of the state should change.
 - the **payload** will carry on the new data that will be saved in the state.
the **dispatch** will dispatch the below **action** to the reducer.
*/

dispatch({
      type:  FETCH_POSTS,
      payload:  res.data
     })
}
```

## Step 3 : Connect Redux with React :

### Now you need to visit the react components as below :

- **First The App Component , as it contains all your react components:**  
  Here you need to do only two things , first is the below:

```bash
 import { Provider } from  'react-redux';
 import  store  from  './store';
```

Second we need to wrapp all returned components within **Provider** as below :

```bash
 return ( <Provider  store={store}>
            <Fragment>
               <PostForm />
               <Posts  />
            </Fragment>
         </Provider>
         );
```

- **Second Component that have any event , this is where your action will take place , and the state will change :**
  Here you need to import the action , and connect , and at the last step you will mapStateToProps as below :

```bash
import { connect } from  'react-redux';
 import { fetchPosts } from  '../actions/postAction';
 /*
 'connect' : The `connect()` function connects a React component to a Redux store.
 'fetchPosts' : is an example for the action that will change the state
 */
 class  Posts  extends  Component {
     componentDidMount() {
     '//the action will be added to the props'
     this.props.fetchPosts();
     }
     render() {
  const postItems = this.props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
return (
       <>
      <h1>Posts</h1>
      {postItems}
    </>
  );
}
}

'//add the (state) from redux to the (props) of Posts.jsx'
const mapStateToProps = state => ({
posts: state.posts.items
//newPost : state.posts.item
});
// 'mapStateToProps ' : this is a predefined function connects the state from redux to the react component

'//connect : It provides its connected component "(Posts)" with the pieces of the data it needs from the store "(mapStateToProps ," and the functions it can use to dispatch actions to the store "{ fetchPosts })".'
export  default  connect(mapStateToProps, { fetchPosts })(Posts);

```

## Step 4 : Finally, you might add the Redux-Dev-Tools enhancer :

This is an optional step to enable the redux dev tools in the browser it should be added to the store as below :

```bash
import { createStore, applyMiddleware , compose } from  'redux';
import  thunk  from  'redux-thunk';
import  rootReducer  from  './reducers';
const  intialState  = {}
const  middleware  = [thunk]
const  store  =  createStore(rootReducer, intialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__  &&  window.__REDUX_DEVTOOLS_EXTENSION__()))

export  default  store;

```

# React Redux Simple Steps to prepare the boilerplate are finshed :)
