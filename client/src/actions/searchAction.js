import {
  FETCH_INIT,
  FETCH_WORDS,
  SET_ALERT,
  SET_SEARCH_FILTER,
} from './actionTypes';
import axios from 'axios';
import { searchFilters } from './searchFilters';

const datamuse = axios.create({
  baseURL: 'https://api.datamuse.com/words',
});

export const fetchWord = (word, filter) => async (dispatch) => {
  let fQuery = 'RHY';
  let max = '&max=8';
  for (let item in searchFilters) {
    if (item === filter) {
      console.log(searchFilters[item]);
      fQuery = searchFilters[item];
    }
    // console.log(fQuery)
  }

  if (word) {
    dispatch({
      type: FETCH_INIT,
    });
    try {
      // console.log(url + fQuery + word);
      const result = await datamuse.get('?' + fQuery + word + max);

      console.log(result);
      dispatch({
        type: FETCH_WORDS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ALERT,
        payload: {
          msg: 'Fetching Words Unsuccessful',
          type: 'warning',
        },
      });
    }
  }
};

export const setSearchFilter = (filter) => (dispatch) => {
  // console.log(filter);
  dispatch({
    type: SET_SEARCH_FILTER,
    payload: filter,
  });
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
