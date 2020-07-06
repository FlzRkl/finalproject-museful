import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dailyLearning = ({ fetchRandom }) => {
  const getRandomWord = () => {
    fetchRandom();
  };

  return (
    <div className='bodyS'>
      <h1> Daily Learning </h1>{' '}
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon icon={faAngleLeft} size='1x' />
        </p>{' '}
      </Link>
      <button type='submit' className='btnI' onClick={getRandomWord}>
        Search
      </button>
    </div>
  );
};

dailyLearning.propTypes = {
  prop: PropTypes.func,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchRandom })(dailyLearning);
