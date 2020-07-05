import axios from 'axios';
import {
  SUBMIT_ITEM,
  LAST_ITEM,
  LOAD_ITEM,
  FILTERED_LIST,
  SET_ITEM_FILTER,
  SET_ALERT,
} from './actionTypes';

import { setAlert } from './alert';

export const submitItem = (inputItem, id) => async (dispatch) => {
  const regex = new RegExp('^\\S.*');
  let check = regex.test(inputItem.title);
  if (check) {
    try {
      const res = await axios.post(`/api/listItem/submit`, inputItem);
      console.log(res);
      dispatch(setAlert('Item Created', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch({
          type: SET_ALERT,
          payload: {
            msg: err.response.statusText,
            status: err.response.status,
          },
        });
      }
    }
    // loadItem(id);
  }
};

export const lastItem = (itemId) => (dispatch) => {
  if (itemId) {
    dispatch({
      type: LAST_ITEM,
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

export const setItemFilter = (filter) => (dispatch) => {
  // console.log(filter);
  dispatch({
    type: SET_ITEM_FILTER,
    payload: filter,
  });
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
        ? ((item = item[0].toUpperCase() + item.slice(1)), getKeys.push(item))
        : null
      : null;
    console.log(y);
  }
  // console.log(getKeys, getValues, mainList);
  const getLists = [getKeys, getValues];
  if (getLists) {
    dispatch({
      type: FILTERED_LIST,
      payload: getLists,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'The Filtered Array Input is false',
        type: 'warning',
      },
    });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  if (id) {
    try {
      const res = await axios.delete(`/api/listItem/${id}`);
      console.log(res);
      dispatch(setAlert('Item deleted', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch({
          type: SET_ALERT,
          payload: {
            msg: err.response.statusText,
            status: err.response.status,
          },
        });
      }
    }
    // loadItem(id);
  }
};
