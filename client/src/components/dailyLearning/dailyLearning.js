import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// STYLE
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dailyLearning = () => {
  return (
    <div className='bodyS'>
      <h1>Daily Learning</h1>
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon icon={faAngleLeft} size='1x' />
        </p>
      </Link>

      {/* <input type='text' value='Give it a try!' /> */}
      <button
        type='submit'
        className='btnI'
        onClick={() => {
          const name = prompt("What are you looking for?");
        }}
      >
        Search
      </button>
    </div>
  );
};

dailyLearning.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(dailyLearning);
