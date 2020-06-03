import React, { useState } from 'react';
import ListItem from './ListItem';
import ListComponent1 from './ListComponent1';

export default function List0() {
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
        <ListItem lists={lists} />
        <ListComponent1 lists={lists} />
      </div>
    </>
  );
}
