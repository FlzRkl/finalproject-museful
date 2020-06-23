import {
  SUBMIT_ITEM,
  OPEN_ITEM,
  LOAD_ITEM,
  SET_ITEM_FILTER,
} from '../actions/actionTypes';
import { ITEM_FILTERS } from '../components/list/Item_Filters';

const initialState = {
  mainList: {},
  loading: true,
  filter: ITEM_FILTERS.LIST,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(`type: ${type}, payload: ${payload}`);
  switch (type) {
    case SUBMIT_ITEM:
      console.log('stischpatcj');
      return {
        ...state,
        mainList: {
          title: payload,
        },
        loading: false,
      };
    case LOAD_ITEM:
      return {
        ...state,
        mainList: payload.item,
        loading: false,
      };
    case OPEN_ITEM:
      return {
        ...state,
        mainList: payload.item,
        loading: false,
      };
    case SET_ITEM_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
}
