import React, { useContext, useRef, useState, useEffect } from 'react';
import { ListsContext } from './../../../App';

export default function ListItem() {
  const listsContext = useContext(ListsContext);
  const lists = listsContext.listState;
  const [hoverRef, isHovered] = useHover();

  console.log('onchange');

  const rabbitHole = () => {};

  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <li
            ref={hoverRef}
            className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'
            key={item.id}
          >
            {item.value} {console.log(item.subList)}
            {item.subList ? null : isHovered ? (
              <span className='badge'>
                <svg
                  class='bi bi-box-arrow-in-down-right'
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M14.5 13a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V8a.5.5 0 0 1 1 0v5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H9a.5.5 0 0 1 0-1h4A1.5 1.5 0 0 1 14.5 3v10z'
                  />
                  <path
                    fill-rule='evenodd'
                    d='M4.5 10a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-1 0v4.5H5a.5.5 0 0 0-.5.5z'
                  />
                  <path
                    fill-rule='evenodd'
                    d='M10.354 10.354a.5.5 0 0 0 0-.708l-8-8a.5.5 0 1 0-.708.708l8 8a.5.5 0 0 0 .708 0z'
                  />
                </svg>
              </span>
            ) : (
              <span className='badge badge-primary badge-pill'>
                {item.subList}
              </span>
            )}
          </li>
        ))}{' '}
      </ul>{' '}
    </>
  );
}
// MO-Hook
function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
