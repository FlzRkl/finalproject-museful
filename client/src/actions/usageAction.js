import { TOGGLE_WORDS } from "./actionTypes";

export function toggleWords(index) {
  return { type: TOGGLE_WORDS, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
