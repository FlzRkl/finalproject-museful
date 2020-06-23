import axios from 'axios';
import {
  SUBMIT_ITEM,
  OPEN_ITEM,
  LOAD_ITEM,
  SORT_ITEMS,
  SET_ITEM_FILTER,
  SET_ALERT,
} from './actionTypes';

export const submitItem = (inputItem) => (dispatch) => {
  if (inputItem) {
    dispatch({
      type: SUBMIT_ITEM,
      payload: inputItem,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'Please enter some Text',
        type: 'warning',
      },
    });
  }
};

export const openItem = (itemId) => (dispatch) => {
  if (itemId) {
    dispatch({
      type: OPEN_ITEM,
      payload: itemId,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'Please enter valid Id',
        type: 'warning',
      },
    });
  }
};

export const loadItem = (id) => async (dispatch) => {
  if (id) {
    console.log(id);
    try {
      const res = await axios.get(`/api/listItem/${id}`);
      dispatch({
        type: LOAD_ITEM,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: {
          msg: 'No Lists Found',
          type: 'warning',
        },
      });
    }
  }
};

export const setFilter = (filter) => (dispatch) => {
  // console.log(filter);
  dispatch({ type: SET_ITEM_FILTER, payload: filter });
};

// export const sortItem = (itemId) => (dispatch) => {
//   if (itemId) {
//     dispatch({
//       type: OPEN_ITEM,
//       payload: itemId,
//     });
//   } else {
//     dispatch({
//       type: SET_ALERT,
//       payload: {
//         msg: 'Please enter valid Id',
//         type: 'warning',
//       },
//     });
//   }
// };
