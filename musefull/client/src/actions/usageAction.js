import { TOGGLE_WORDS } from "./actionTypes";
import { SET_VISIBILITY_FILTER } from "./actionTypes";

export function toggleWords(index) {
  return { type: TOGGLE_WORDS, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
