import { FETCH_WORDS } from "../actions/actionTypes";

const initialState = {
  words: [],
  word: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    default:
      return state;
  }
}
