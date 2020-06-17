import React, { useState, useContext, useEffect, useRef } from 'react';
import ListItems from './ListItems';
import { ListsContext } from './store';

function List() {
  const listsContext = useContext(ListsContext);
  const inputEl = useRef(null);
  const [list, setList] = useState('');

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const isValid = () => {
    const regex = new RegExp('^\\S.*');
    let check = regex.test(list);
    if (check) {
      listsContext.listDispatch({
        type: 'submit',
        value: list,
      });
      setList('');
    }
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  console.log('onchange');
  return (
    <>
      <h1>{listsContext.listState[0].title}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isValid();
        }}
        className='form'
      >
        <div className='input-group mb-3'>
          <input
            ref={inputEl}
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
            <button
              onClick={(e) => {
                e.preventDefault();
                isValid();
              }}
              className='input-group-text'
              id='basic-addon2'
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <hr />
      <div className='col-lg-8'>
        <ListItems />
      </div>
    </>
  );
}

export default List;
