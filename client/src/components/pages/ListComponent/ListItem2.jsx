import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WorkTrackerContext } from './../../../App';

export default function ListComponent1({ lists }) {
  const workTrackerContext = useContext(WorkTrackerContext);
  console.log(workTrackerContext);
  return (
    <div>
      <ul className='list-group list-group-flush'>
        {lists.map((item) => (
          <Link
            to='#'
            className='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start'
            key={item.id}
          >
            <div className='d-flex w-70 justify-content-between'>
              <h6 className='mb-1 '>List group item heading</h6>
              <small>{workTrackerContext.wTState.date}</small>
            </div>
            <p className='mb-1 h2'>{item.value} </p>
            <small>underline Footnote</small>
          </Link>
        ))}{' '}
      </ul>
    </div>
  );
}
