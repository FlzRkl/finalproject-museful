import React, { useState, useEffect, useRef, Fragment } from 'react';
import './list.scss';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import { ItemFilter } from './ItemFilter';
import { submitItem } from '../../actions/listAction';
import { loadItem, getListArr } from '../../actions/listAction';
import { connect, useSelector, useDispatch } from 'react-redux';
import { ABOVE_ITEM } from '../../actions/actionTypes';

export const ListComponent = ({ loadItem, getListArr }) => {
  const inputEl = useRef(null);
  const [list, setList] = useState('');
  const mainList = useSelector((state) => state.list.mainList);
  const filteredList = useSelector((state) => state.list.filteredList);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleClick = (e) => {
    const id = e.target.closest('li').id;
    // dispatch({
    //   type: ABOVE_ITEM,
    //   payload: id,
    // });
    loadItem(id);
    console.log(id);
  };

  const submit = (e) => {
    e.preventDefault();
    // submitItem(list);
    //console.log(lists);
    setList('');
  };

  useEffect(() => {
    inputEl.current.focus();
    getListArr(mainList);
  }, [mainList]);

  useEffect(() => {
    setTags(filteredList[0]);
    setData(filteredList[1]);
  }, [filteredList]);

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
        <ul className='list-group list-group-flush bg-secondary'>
          {data
            ? data.map((item, index) => (
                <>
                  <h4>{tags[index]}</h4>
                  <li
                    key={tags[index] + index}
                    id={tags[index] + index}
                    onClick={handleClick}
                    className='list-group-item'
                  >
                    <ListItems item={item} />
                  </li>
                </>
              ))
            : null}
        </ul>
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

export default connect(mapStateToProps, { loadItem, getListArr })(
  ListComponent
);
