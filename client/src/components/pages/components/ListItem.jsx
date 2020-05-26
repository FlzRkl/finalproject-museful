import React from 'react';
import ListComponent1 from './ListComponent1';

export default function ListItem() {
  return (
    <div className='col-lg-8'>
      <div>
        {/* //style={userStyle} */}
        {list.map((item) => (
          <ListComponent1 key={item.id} idea={item} />
        ))}
      </div>
    </div>
  );
}
