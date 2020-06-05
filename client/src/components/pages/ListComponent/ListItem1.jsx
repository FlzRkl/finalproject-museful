import React, { useContext } from 'react';
import { ListsContext } from './../../../App';

export default function ListItem({ lists }) {
  const subList = 0;
  const listsContext = useContext(ListsContext);
  console.log(listsContext.listState.subList);
  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <li
            className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'
            key={item.id}
          >
            {item.value}{' '}
            {subList ? (
              <span className='badge badge-primary badge-pill'>{subList}</span>
            ) : null}
          </li>
        ))}{' '}
      </ul>{' '}
    </>
  );
}
