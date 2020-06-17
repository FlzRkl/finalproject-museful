import { FETCH_MEANING_SIMILAR, NEW_POST } from "./actionTypes";

export const fetchML = () => (dispatch) => {
  fetch("https://api.datamuse.com/words?ml=house") //Replace "house" with input value
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_MEANING_SIMILAR,
        payload: posts,
      })
    );
};

export const fetchSP = () => (dispatch) => {
  fetch("https://api.datamuse.com/words?sp=a*") //Replace "a*" with random Letter
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_WORDS,
        payload: posts,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};

/////////////////////////
/*
export  const  fetchPosts  = () =>  async  dispatch  => {
const  res  =  await axios.get('https://jsonplaceholder.typicode.com/posts');
/*
On a successful response from the server we **dispatch** a synchronous success **action** with the data received from the response, here below the **action** has a **type** and a **payload**,
 - the  **type**: is to define which part of the state should change.
 - the **payload** will carry on the new data that will be saved in the state.
the **dispatch** will dispatch the below **action** to the reducer.

dispatch({
      type:  FETCH_POSTS,
      payload:  res.data
     })
}
*/
