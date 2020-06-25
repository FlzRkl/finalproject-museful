import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { loadItem } from '../../actions/listAction';
import { ABOVE_ITEM } from '../../actions/actionTypes';

const Lists = ({ loadItem }) => {
  const userLists = useSelector((state) => state.auth.user.list);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = e.target.closest('li').id;
    loadItem(id);
    // console.log(id);
    dispatch({
      type: ABOVE_ITEM,
      payload: id,
    });
  };

  return (
    <>
      <h1 className='mb-4'>Storage</h1>
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

Lists.propTypes = {
  prop: PropTypes.array,
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { loadItem })(Lists);
