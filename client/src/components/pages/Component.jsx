import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
}

// const trampoline = (fn) => (...args) => {
//   let result = fn(...args);
//   while (typeof result === 'function') {
//     result = result();
//   }
//   return result;
// };
// const sumBelowRec = (number, sum = 0) =>
//   number === 0 ? sum : () => sumBelowRec(number - 1, sum + number);

// const sumBelow = trampoline(sumBelowRec);

// const end = sumBelow(10);
// console.log(end);

// console.log(i);
// return [
//   {
//     // ...state[0],
//     // subList: [
//     //   {
//     //     ...state[0].subList[i],
//     //     subList: [
//     //       {
//     //         id: uuid(),
//     //         value: action.value,
//     //       },
//     //       ...state[0].subList[i],
//     //     ],
//     //   },
//     // ],
//   },
// ];
