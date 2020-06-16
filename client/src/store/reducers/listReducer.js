import { SUBMIT_ITEM, OPEN_ITEM } from '../types';

const initialState = {
  mainList: {
    id: uuid(),
    title: 'Biology',
    desc: '',
    date: '',
  },
  itemList: [],
};

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case FETCH_USERS:
//       return {
//         ...state,
//         users: action.payload,
//       };

//     case SET_LOADING:
//       return {
//         ...state,
//         loading: action.payload,
//       };

//     case SET_ALERT:
//       return {
//         ...state,
//         alert: action.payload,
//       };

//     case SET_ALERTBOOL:
//       return {
//         ...state,
//         alertBool: action.payload,
//       };

//     case SET_TEXT:
//       return {
//         ...state,
//         text: action.payload,
//       };

//     default:
//       return state;
//   }
// }
