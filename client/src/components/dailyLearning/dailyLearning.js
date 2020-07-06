import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dailyLearning = () => {
  const getRandom = () => {
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
      {/* <input type='text' value='Give it a try!' /> */}{' '}
      <button
        type='submit'
        className='btnI'
        onClick={() => {
          prompt('What are you looking for?');
        }}>
        Search{' '}
      </button>{' '}
    </div>
  );
};

dailyLearning.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

//const mapDispatchToProps = {};

export default connect(mapStateToProps, mapStateToProps, { fetchRandom })(
  dailyLearning,
);
