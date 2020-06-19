import { SUBMIT_ITEM, OPEN_ITEM } from '../actions/actionTypes';

const initialState = { mainList: {}, itemList: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_ITEM:
      return {
        ...state,
      };
    case OPEN_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
}
