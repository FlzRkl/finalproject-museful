import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// STYLE
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Highscores = () => {
  return (
    <div className='bodyS'>
      <h1>Highscores</h1>
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon icon={faAngleLeft} size='1x' />
        </p>
      </Link>
    </div>
  );
};

Highscores.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Highscores);
