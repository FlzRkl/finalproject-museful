import React from 'react';

export default function ListItem({ lists }) {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <li
            className='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'
            key={item.id}
          >
            {item.value}{' '}
            <span className='badge badge-primary badge-pill'>0</span>
          </li>
        ))}{' '}
      </ul>{' '}
    </>
  );
}
