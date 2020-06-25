import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FETCH_WORDS } from '../../actions/actionTypes';
import { fetchWord } from '../../actions/searchAction';
import SearchFilter from './SearchFilter';

export const SearchWord = ({ fetchWord }) => {
  const [word, setWord] = useState('');
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);
  const data = useSelector((state) => state.search.data);
  // const dispatch = useDispatch();
  console.log(data);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWord(word);
    // dispatch({
    //   type: FETCH_WORDS,
    //   payload: word,
    // });
    console.log('submit Searchhhhhhhhhhhhhhhhhhhhhhhhhhh');
  };
  return (
    <>
      <SearchFilter />
      <form id='formSearch' onSubmit={handleSearch}>
        <input
          placeholder='Enter Initial Word'
          id='initial-word-form'
          type='text'
          value={word}
          onChange={handleChange}
        />
        <button
          onClick={handleSearch}
          type='submit'
          className='btn btn-success'
          style={{ marginTop: '8px' }}>
          Search
        </button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className='card-body'>
          {data
            ? data.map((item) => (
                <div key={item.word} id={item.word}>
                  <button className='btn btn-success'>{item.word}</button>
                </div>
              ))
            : null}
        </div>
      )}
    </>
  );
};

SearchWord.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { fetchWord })(SearchWord);
