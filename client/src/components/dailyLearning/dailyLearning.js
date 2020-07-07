import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dailyLearning = ({ fetchRandom }) => {
  const [random, setRandom] = useState('');
  const data = useSelector((state) => state.random.data);

  const handleChange = (e) => {
    setRandom(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRandom(random);
  };

  useEffect(() => {
    document.getElementById('btnI').clicked = true;
  }, []);

  return (
    <div className='d-flexColumn'>
      <h1> Daily Learning </h1>{' '}
      <Link className='' to='/dashboard'>
        <p className='btnBack'>
          <FontAwesomeIcon icon={faAngleLeft} size='1x' />
        </p>{' '}
      </Link>
      <button type='submit' className='btnI' onClick={handleSearch}>
        Search
      </button>
      <div className='searchResults'>
        {data
          ? data.map((item) => (
              <div key={item.random} id={item.random}>
                <button
                  className='searchResult'
                  value={random}
                  onChange={handleChange}>
                  {item.random}
                </button>
              </div>
            ))
          : null}
      </div>
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
