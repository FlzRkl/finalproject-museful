import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  return (
    <div className='bodyS'>
      <h1> Welcome to the Mussseefull App </h1>
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon
            icon={faAngleLeft}
            transform={{ rotate: 270 }}
            size='1x'
          />
        </p>
      </Link>
    </div>
  );
};

LandingPage.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
