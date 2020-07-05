import React from "react";
import PropTypes from "prop-types";

function Cards({ item }) {
  return (
    <div>
      <div className='card'>
        <div className=''>
          <h3 className='cardHeader'>{item.title}</h3>
          <p className='cardBody'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className='cardFooter'>Footer</div>
      </div>
    </div>
  );
}

Cards.propTypes = {};

export default Cards;
