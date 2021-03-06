import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  REGISTER_FAIL,
  LOGIN_FAIL,
  UPDATE_ITEM_USER,
  DELETE_ITEM_USER,
  EDIT_ITEM_USER,
} from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: { list: [] },
  list: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        list: payload.list,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case ACCOUNT_DELETED:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        list: null,
      };
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        list: null,
      };
    case UPDATE_ITEM_USER:
      let updatedUser = { ...state.user };
      updatedUser.list.push(payload);
      let upList = [...state.list, payload];
      return {
        ...state,
        user: updatedUser,
        list: upList,
      };

    case DELETE_ITEM_USER:
      let deletedUser = { ...state.user };

      deletedUser.list = deletedUser.list.filter((item) => {
        if (item.id === payload.id) {
          return false;
        } else {
          return true;
        }
      });
      return {
        ...state,
        user: deletedUser,
        list: deletedUser.list,
      };
    case EDIT_ITEM_USER:
      let editedUser = { ...state.user };
      console.log(payload, editedUser);
      editedUser.list = editedUser.list.map((item, index) => {
        // console.log(item, index);
        if (item.id === payload.id) {
          return payload;
        } else {
          return item;
        }
      });
      console.log(editedUser);

      return {
        ...state,
        user: editedUser,
        list: editedUser.list,
      };
    default:
      return state;
  }
}
