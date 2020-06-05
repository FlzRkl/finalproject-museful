import React, { useContext } from 'react';
import { ListsContext } from './../../../App';

export default function ListItem() {
  const listsContext = useContext(ListsContext);
  const lists = listsContext.listState;
  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <li
            className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'
            key={item.id}
          >
            {item.value}{' '}
            {item.subList ? (
              <span className='badge badge-primary badge-pill'>
                {item.subList}
              </span>
            ) : null}
          </li>
        ))}{' '}
      </ul>{' '}
    </>
  );
}
