import { SUBMIT_ITEM, OPEN_ITEM, SORT_ITEMS } from '../types';

export const submitItem = (inputItem) => (dispatch) => {
  const regex = new RegExp('^\\S.*');
  let check = regex.test(inputItem);
  if (check) {
    dispatch({
      type: SUBMIT_ITEM,
      payload: inputItem,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'Please enter some Text',
        type: 'warning',
      },
    });
  }
};

export const openItem = (itemId) => (dispatch) => {
  if (itemId) {
    dispatch({
      type: OPEN_ITEM,
      payload: itemId,
    });
  } else {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: 'Please enter valid Id',
        type: 'warning',
      },
    });
  }
};

// export const sortItem = (itemId) => (dispatch) => {
//   if (itemId) {
//     dispatch({
//       type: OPEN_ITEM,
//       payload: itemId,
//     });
//   } else {
//     dispatch({
//       type: SET_ALERT,
//       payload: {
//         msg: 'Please enter valid Id',
//         type: 'warning',
//       },
//     });
//   }
// };
