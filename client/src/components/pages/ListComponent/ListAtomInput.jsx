import React, { useState } from 'react';
import ListItem1 from './ListItem1';
import ListItem2 from './ListItem2';

function ListAtomInput() {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState('');

  const handleAdd = () => {
    setLists([
      {
        id: lists.length,
        value: list,
      },
      ...lists,
    ]);
    setList('');
  };

  const handleChange = (e) => {
    setList(e.target.value);
  };

  return (
    <>
      <h1>List Null</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(e);
        }}
        className='form'
      >
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter an Idea !'
            aria-label='Enter an Idea !'
            aria-describedby='basic-addon2'
            value={list}
            name='inputList0'
            id='inputList0'
            onChange={handleChange}
          />
          <div className='input-group-append'>
            <button className='input-group-text' id='basic-addon2'>
              Add
            </button>
          </div>
        </div>
      </form>

      <hr />
      <div className='col-lg-8'>
        <ListItem1 lists={lists} />
        {/* <ListItem2 lists={lists} /> */}
      </div>
    </>
  );
}

export default ListAtomInput;
