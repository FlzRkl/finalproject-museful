import React from 'react';
import { Link } from 'react-router-dom';

export default function ListComponent1({ lists }) {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <Link
            to='#'
            className='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start'
            key={item.id}
          >
            <div className='d-flex w-70 justify-content-between'>
              <h6 className='mb-1 '>List group item heading</h6>
              <small>3 days ago</small>
            </div>
            <p className='mb-1 h2'>{item.value} </p>
            <small>Donec id elit non mi porta.</small>
          </Link>
        ))}{' '}
      </ul>
    </>
  );
}
