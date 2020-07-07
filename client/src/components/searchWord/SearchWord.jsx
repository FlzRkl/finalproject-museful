import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';

import { fetchWord } from '../../actions/searchAction';
import SearchFilter from './SearchFilter';

export const SearchWord = ({ fetchWord }) => {
  const [word, setWord] = useState('');
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);
  const data = useSelector((state) => state.search.data);
  const filter = useSelector((state) => state.search.filter);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWord(word, filter);
  };

  useEffect(() => {
    document.getElementById('filter-Rhyme').checked = true;
  }, []);

  return (
    <div className='d-flexColumn'>
      <div className='flex-row mb-4'>
        <h3 className='display'>Search Word</h3>
      </div>
      <SearchFilter />
      <form id='formSearch' onSubmit={handleSearch}>
        <input
          placeholder='Please enter a word..'
          id='initial-word-form'
          type='text'
          value={word}
          onChange={handleChange}
          className='input'
          autocomplete='off'
        />
        <button
          onClick={handleSearch}
          type='submit'
          className='inputSearch'
          style={{ marginTop: '8px' }}
        >
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
                <div key={item.word} id={item.word}>
                  <button className='searchResult'>{item.word}</button>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

SearchWord.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { fetchWord })(SearchWord);
