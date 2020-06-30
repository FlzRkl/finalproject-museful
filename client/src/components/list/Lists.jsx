import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { loadItem } from '../../actions/listAction';
import { LAST_ITEM } from '../../actions/actionTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitItem } from '../../actions/listAction';

const Lists = ({ loadItem, submitItem }) => {
  const userLists = useSelector((state) => state.auth.user.list);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = e.target.closest('li').id;
    loadItem(id);
    // console.log(id);
    dispatch({
      type: LAST_ITEM,
      payload: id,
    });
  };

  const formStyle = {
    display: 'none',
  };

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState([]);
  const user = useSelector((state) => state.auth.user._id);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  let submitObject = {
    user: user,
    title: title,
    tag: 'list',
    desc: desc,
  };

  const submit = (e) => {
    e.preventDefault();
    submitItem(submitObject);
    setTitle('');
    setDesc('');
    loadItem();
  };

  const handleAdd = () => {
    console.log('make form visible');
  };
  return (
    <>
      <h1 className='mb-4'>List Storage</h1>
      <div className='btn' onClick={handleAdd}>
        {' '}
        <FontAwesomeIcon
          icon={faPlus}
          color='white'
          size={'2x'}
          className='iconAdd'
        />
      </div>
      <form
        onSubmit={submit}
        className='form col-xs-12 col-sm-10 col-md-8 col-lg-6'
      >
        <div className='input-group mb-2'>
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            aria-label='Title'
            aria-describedby='input-title'
            value={title}
            name='inputList0'
            id='inputList0'
            onChange={handleChangeTitle}
          />
        </div>
        <div className='row'>
          <div className='input-group mb-3'>
            <textarea
              className='form-control'
              placeholder='Add Describtion'
              aria-label='Desc'
              value={desc}
              onChange={handleChangeDesc}
            ></textarea>
          </div>
        </div>
        <button
          onClick={submit}
          className='input-group-text'
          id='input-addon-add'
        >
          Add List
        </button>
      </form>

      <ul className='list' id='list-list'>
        {userLists.map((item) => (
          <li
            key={item.id}
            id={item.id}
            onClick={handleClick}
            className='col-xs-12 col-sm-6 col-md-6 col-lg-4'
          >
            <Link to='/dashboard/listComponent'>
              <Cards item={item} />
            </Link>
          </li>
        ))}{' '}
      </ul>
    </>
  );
};

Lists.propTypes = {};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { submitItem, loadItem })(Lists);
