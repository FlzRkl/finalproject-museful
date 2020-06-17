import { SUBMIT_ITEM, OPEN_ITEM } from '../actions/actionTypes';

const initialState = { mainList: {}, itemList: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_ITEM:
      return {
        ...state,
        subList: [
          {
            id: state.length,
            value: action.value,
            subList: [],
          },
          ...state[0].subList,
        ],
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
