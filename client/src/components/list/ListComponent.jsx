import React, { useState, useEffect, useRef } from 'react';
import ListItems from './ListItems';
import './list.scss';
import { ItemFilter } from './ItemFilter';
import { loadItem } from '../../actions/listAction';

import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { submitItem } from '../../actions/listAction';

export const ListComponent = ({ loadItem }) => {
  const inputEl = useRef(null);
  const [list, setList] = useState('');
  const [lists, setLists] = useState([]);
  const mainList = useSelector((state) => state.list.mainList);

  const isArr = (arrList) => {
    let res = Object.values(mainList);
    arrList = res.filter((item) => Array.isArray(item));
    let result = arrList.map((item) => {
      if (item) {
        <ListItems subList={item} />;
      }
    });
    console.log(result);
    return;
  };

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    // submitItem(list);
    setList('');
  };

  useEffect(() => {
    inputEl.current.focus();
    loadItem();
    isArr();
  }, [loadItem, isArr]);

  return (
    <>
      <h1 className='mb-4'>{mainList.title}</h1>
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
        <ul className='list-group list-group-flush'>{<ListItems />}</ul>
      </div>
    </>
  );
};

ListComponent.propTypes = {
  submitItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { loadItem })(ListComponent);
