import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DailyLearning = ({ fetchRandom }) => {
  const random = useSelector((state) => state.search.random);

  const isLoading = useSelector((state) => state.random.isLoading);

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
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='searchResults'>
          {random
            ? random.map(() => (
                <button className='searchResult'>{random}</button>
              ))
            : null}
        </div>
      )}
      ;
    </div>
  );
};

DailyLearning.propTypes = {
  prop: PropTypes.func,
};

const mapStateToProps = (state) => ({
  //random: state.random,
});

export default connect(mapStateToProps, { fetchRandom })(DailyLearning);
