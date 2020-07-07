import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dailyLearning = ({ fetchRandom }) => {
  /*const [random, setRandom] = useState('');
  const data = useSelector((state) => state.random.data);
*/
  const getRandom = (e) => {
    e.preventDefault();
    fetchRandom();
  };

  return (
    <div className='d-flexColumn'>
      <h1> Daily Learning </h1>{' '}
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon icon={faAngleLeft} size='1x' />
        </p>{' '}
      </Link>
      <button type='submit' className='btnI' onClick={getRandom}>
        Search
      </button>
    </div>
  );
};

dailyLearning.propTypes = {
  prop: PropTypes.func,
};

const mapStateToProps = (state) => ({
  random: state.random,
});

export default connect(mapStateToProps, { fetchRandom })(dailyLearning);
