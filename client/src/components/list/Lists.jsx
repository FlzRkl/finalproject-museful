import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Lists = () => {
  const userLists = useSelector((state) => state.auth.user.list);

  const handleClick = (e) => {
    const id = e.target.closest('li').id;
    console.log(id);
  };
  return (
    <>
      <h1>Storage</h1>
      <ul className='list' id='list-list'>
        {userLists.map((item) => (
          <li
            key={item.id}
            id={item.id}
            onClick={handleClick}
            className='col-xs-12 col-sm-6 col-md-6 col-lg-4'
          >
            <div className='card border-dark mb-3'>
              <div className='card-body text-dark'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class='card-footer bg-transparent border-warning'>
                Footer
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Lists.propTypes = {
  prop: PropTypes.array,
};

// const mapStateToProps = (state) => {
//   const lists = state.auth.user.list;
//   return lists;
// };

export default Lists;
