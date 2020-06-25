import {
  SUBMIT_ITEM,
  ABOVE_ITEM,
  LOAD_ITEM,
  FILTERED_LIST,
  SET_ITEM_FILTER,
} from '../actions/actionTypes';
import { ITEM_FILTERS } from '../components/list/Item_Filters';

const initialState = {
  mainList: {},
  aboveItem: '',
  filteredList: [],
  loading: true,
  filter: ITEM_FILTERS.LIST,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(`type: ${type}, payload: `, payload);
  switch (type) {
    case SUBMIT_ITEM:
      console.log('gatcha');
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
    case ABOVE_ITEM:
      return {
        ...state,
        aboveItem: payload,
      };
    case FILTERED_LIST:
      return {
        ...state,
        filteredList: payload,
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
