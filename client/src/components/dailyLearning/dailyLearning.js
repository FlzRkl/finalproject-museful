import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

export const DailyLearning = ({ fetchRandom }) => {
  const isLoading = useSelector((state) => state.search.isLoading);
  const fiveWord = useSelector((state) => state.search.random);
  const [random, setRandom] = useState([]);
  console.log(random, fiveWord);
  const getRandom = (e) => {
    e.preventDefault();
    fetchRandom();
  };

  useEffect(() => {
    setRandom(fiveWord);
  }, [fiveWord]);

  return (
    <div className='d-flexColumn'>
      <h1 className='mb-4 textTitle'> Daily Learning </h1>{' '}
      {/* <input type='text' value='Give it a try!' /> */}{' '}
      <button type='submit' className='btnL' onClick={getRandom}>
        Get 5 Random Words{' '}
      </button>{' '}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='searchResults mt-4'>
          {random
            ? random.map((item) => (
                <div className='searchResult'>{item.word}</div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

DailyLearning.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  fiveWord: state.search.random,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchRandom })(DailyLearning);
