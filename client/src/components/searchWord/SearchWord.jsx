import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";

import { fetchWord } from "../../actions/searchAction";
import SearchFilter from "./SearchFilter";

export const SearchWord = ({ fetchWord }) => {
  const [word, setWord] = useState("");
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);
  const data = useSelector((state) => state.search.data);
  const filter = useSelector((state) => state.search.filter);

  // const dispatch = useDispatch();
  console.log(filter);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWord(word, filter);

    console.log("submit Searchhhhhhhhhhhhhhhhhhhhhhhhhhh");
  };
  return (
    <div className="dashboard d-flexColumn">
      <SearchFilter />
      <form id="formSearch" onSubmit={handleSearch}>
        <input
          placeholder="Please enter a word.."
          id="initial-word-form"
          type="text"
          value={word}
          onChange={handleChange}
          className="input"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="inputSearch"
          style={{ marginTop: "8px" }}
        >
          Search
        </button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="searchResult">
          {data
            ? data.map((item) => (
                <div key={item.word} id={item.word}>
                  <button className="btnI">{item.word}</button>
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
