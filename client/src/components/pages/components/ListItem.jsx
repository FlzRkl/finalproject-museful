import React from 'react';
import ListComponent1 from './ListComponent1';

export default function ListItem(lists) {
  console.log(lists);
  return (
    <div className='col-lg-8'>
      <div>
        {/* {lists.map((item) => (
          <ListComponent1 key={item} idea={item} />
        ))} */}
      </div>
    </div>
  );
}
