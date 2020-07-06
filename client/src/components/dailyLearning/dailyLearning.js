import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import { fetchRandom } from '../../actions/searchAction';

// STYLE
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dailyLearning = ({ fetchRandom }) => {
  const [getRandomWord, setRandomWord] = useState('');
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);
  const data = useSelector((state) => state.search.data);
  //const filter = useSelector((state) => state.search.filter);

  const handleChange = (e) => {
    setRandomWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWord(getRandomWord);
  };
  return (
    <div className='d-flexColumn'>
      <form id='formSearch' onSubmit={handleSearch}>
        <input
          placeholder='Please enter a word..'
          id='initial-word-form'
          type='text'
          value={getRandomWord}
          onChange={handleChange}
          className='input'
          autocomplete='off'
        />
        <button
          onClick={handleSearch}
          type='submit'
          className='inputSearch'
          style={{ marginTop: '8px' }}>
          Search
        </button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='searchResults'>
          {data
            ? data.map((item) => (
                <div key={item.getRandomWord} id={item.getRandomWord}>
                  <button className='searchResult'>{item.getRandomWord}</button>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

dailyLearning.propTypes = {
  prop: PropTypes.func,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

//const mapDispatchToProps = {};

export default connect(mapStateToProps, mapStateToProps, { fetchRandom })(
  dailyLearning,
);
