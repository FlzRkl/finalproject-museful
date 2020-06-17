import React, { useContext, useRef, useState, useEffect } from 'react';
import { ListsContext } from './../../../App';

export default function ListItems() {
  console.log('onchange');
  const listsContext = useContext(ListsContext);
  const lists = listsContext.listState[0].subList;
  //const [hover, setHover] = useState(false);

  const rabbitHole = (e) => {
    const listElEnter = lists.filter((item) => {
      if (e.target.id === item.id) {
        //setHover(true);
        listsContext.listDispatch({
          type: 'subList',
          id: item.id,
        });
        console.log(lists);
        return item;
      }
    });
    return listElEnter;
  };

  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists
          ? lists.map((item) => (
              <li
                // contentEditable={true}
                onClick={rabbitHole}
                className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center '
                key={item.id}
                id={item.id}
              >
                {item.value}
                {true ? (
                  <span className='badge'>
                    <svg
                      className='bi bi-box-arrow-in-down-right'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14.5 13a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V8a.5.5 0 0 1 1 0v5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H9a.5.5 0 0 1 0-1h4A1.5 1.5 0 0 1 14.5 3v10z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M4.5 10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-1 0v4.5H5a.5.5 0 0 0-.5.5z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M10.354 10.354a.5.5 0 0 0 0-.708l-8-8a.5.5 0 1 0-.708.708l8 8a.5.5 0 0 0 .708 0z'
                      />
                    </svg>
                  </span>
                ) : (
                  <span className='badge badge-primary badge-pill'>{23}</span>
                )}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}

// // MO-Hook
// function useHover(e) {
//   const [value, setValue] = useState(false);

//   const ref = useRef(null);

//   const handleMouseOver = () => setValue(true);
//   const handleMouseOut = () => setValue(false);

//   useEffect(
//     () => {
//       const node = ref.current;
//       if (node) {
//         node.addEventListener('mouseover', handleMouseOver);
//         node.addEventListener('mouseout', handleMouseOut);

//         return () => {
//           node.removeEventListener('mouseover', handleMouseOver);
//           node.removeEventListener('mouseout', handleMouseOut);
//         };
//       }
//     },
//     [ref.current] // Recall only if ref changes
//   );

//   return [ref, value];
// }
