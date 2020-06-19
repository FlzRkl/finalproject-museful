import React, { useState, useEffect, useRef } from 'react';
import ListItems from './ListItems';
import './list.scss';
import { ItemFilter } from './ItemFilter';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitItem } from '../../actions/listAction';

const List = ({ submitItem }) => {
  const inputEl = useRef(null);
  const [list, setList] = useState('');
  console.log(list);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    submitItem(list);
    setList('');
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <h1>lvl1 List </h1>
      <form onSubmit={submit} className='form'>
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
              onClick={submit}
              className='input-group-text'
              id='basic-addon2'
            >
              Add
            </button>
          </div>
        </div>
        <ItemFilter />
      </form>

      <hr />
      <div className='col-lg-8'>
        <ListItems />
      </div>
    </>
  );
};

List.propTypes = {
  submitItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { submitItem })(List);
