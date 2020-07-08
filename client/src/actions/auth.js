import axios from 'axios';
import { setAlert } from './alert';
import { returnErrors } from './errorAction';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  UPDATE_ITEM_USER,
  DELETE_ITEM_USER,
  EDIT_ITEM_USER,
  // ACCOUNT_DELETED,
} from './actionTypes';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth');
    console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //Request Body
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
    );
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const addItemUser = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_USER,
    payload: data,
  });
};

export const deleteItemUser = (data) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_USER,
    payload: data,
  });
};

export const editItemUser = (data) => (dispatch) => {
  dispatch({
    type: EDIT_ITEM_USER,
    payload: data,
  });
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

// Delete account & profile
// export const deleteAccount = () => async dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     try {
//       await axios.delete('/api/profile');

//       dispatch({ type: CLEAR_PROFILE });
//       dispatch({ type: ACCOUNT_DELETED });

//       dispatch(setAlert('Your account has been permanently deleted'));
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   }
// };
