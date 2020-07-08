import {
  SUBMIT_ITEM,
  LAST_ITEM,
  LOAD_ITEM,
  FILTERED_LIST,
  SET_ITEM_FILTER,
  DELETE_ITEM,
} from '../actions/actionTypes';
import { ITEM_FILTERS } from '../components/list/Item_Filters';

const initialState = {
  mainList: {},
  lastItem: '',
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
      let updatedMainList = { ...state.mainList };

      updatedMainList[payload.data.tag].push(payload.data);

      return {
        ...state,
        mainList: updatedMainList,
        loading: false,
      };
    case LOAD_ITEM:
      return {
        ...state,
        mainList: payload.item,
        loading: false,
      };
    case LAST_ITEM:
      return {
        ...state,
        lastItem: payload,
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
    case DELETE_ITEM:
      let deletedMainList = { ...state.mainList };
      console.log(deletedMainList);
      deletedMainList[payload.data.tag] = deletedMainList[
        payload.data.tag
      ].filter((item) => {
        if (item.id === payload.data.id) {
          return false;
        } else {
          return true;
        }
      });
      return {
        ...state,
        mainList: deletedMainList,
      };
    default:
      return state;
  }
}
