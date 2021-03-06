import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "../actions/actionTypes";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  wordsDisplayed: [],
};

function showWords(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    default:
      return state;
  }
}
