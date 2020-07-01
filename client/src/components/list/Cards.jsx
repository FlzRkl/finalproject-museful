import React from 'react';
import PropTypes from 'prop-types';

function Cards({ item }) {
  return (
    <div>
      <div className='card border-dark mb-3'>
        <div className='card-body text-dark'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className='card-footer bg-transparent border-success'>Footer</div>
      </div>
    </div>
  );
}

Cards.propTypes = {};

export default Cards;
