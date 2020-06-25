import axios from 'axios';
import {
  SUBMIT_ITEM,
  ABOVE_ITEM,
  LOAD_ITEM,
  FILTERED_LIST,
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

export const aboveItem = (itemId) => (dispatch) => {
  if (itemId) {
    dispatch({
      type: ABOVE_ITEM,
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

export const getListArr = (mainList) => (dispatch) => {
  const getValues = Object.values(mainList)
    .filter((item) => Array.isArray(item))
    .filter((item) => item.length > 0);
  const getKeys = [];
  for (let item in mainList) {
    let x = mainList[item];
    let y = Array.isArray(x)
      ? x.length > 0
        ? getKeys.push(item)
        : null
      : null;
  }
  // console.log(getKeys, getValues, mainList);
  const getLists = [getKeys, getValues];
  // console.log(getLists);
  if (getLists) {
    dispatch({
      type: FILTERED_LIST,
      payload: getLists,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'The Filtered Array is false',
        type: 'warning',
      },
    });
  }
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
