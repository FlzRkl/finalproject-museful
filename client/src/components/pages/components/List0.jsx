import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

export default function List0() {
  const [list, setList] = useState(null);

  const handleAdd = () => {
    console.log(list);
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
      <ListItem />
      <div className='col-lg-8'>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'>
            Cras justo odio
            <span class='badge badge-primary badge-pill'>0</span>
          </li>
          <li class='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'>
            Dapibus ac facilisis in
            <span class='badge badge-primary badge-pill'>0</span>
          </li>
          <li class='list-group-item list-group-item-action list-group-item-dark d-flex justify-content-between align-items-center'>
            Morbi leo risus
            <span class='badge badge-primary badge-pill'>0</span>
          </li>
        </ul>

        <div className='list-group list-group-flush'>
          <Link
            href='#'
            className='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start'
          >
            <div className='d-flex w-70 justify-content-between'>
              <h5 className='mb-1'>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className='mb-1'>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </Link>
          <Link
            href='#'
            className='list-group-item list-group-item-dark list-group-item-action flex-column align-items-start'
          >
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>List group item heading</h5>
              <small className='text-muted'>3 days ago</small>
            </div>
            <p className='mb-1'>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className='text-muted'>Donec id elit non mi porta.</small>
          </Link>
          <Link
            href='#'
            className='list-group-item list-group-item-action list-group-item-dark flex-column align-items-start'
          >
            <div className='d-flex w-100 justify-content-between'>
              <h5 className='mb-1'>List group item heading</h5>
              <small className='text-muted'>3 days ago</small>
            </div>
            <p className='mb-1'>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className='text-muted'>Donec id elit non mi porta.</small>
          </Link>
        </div>
      </div>
    </>
  );
}
