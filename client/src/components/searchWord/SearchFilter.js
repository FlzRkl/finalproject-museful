import React from "react";
import cx from "classnames";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCH_FILTER } from "../../actions/actionTypes";

import { SEARCH_FILTERS } from "./Search_Filters";

export const SearchFilter = () => {
  const activeFilter = useSelector((state) => state.search.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="d-flex">
        {Object.keys(SEARCH_FILTERS).map((filterKey) => {
          const currentFilter = SEARCH_FILTERS[filterKey];

          return (
            <li className="d-flex">
              <input
                className=""
                type="radio"
                id={`filter-${currentFilter}`}
                name={`item-filter-radio`}
                value={`option-${currentFilter}`}
              />
              <label className="" htmlFor={`filter-${currentFilter}`}>
                {currentFilter}
              </label>
              <div
                key={`item-filter-${currentFilter}`}
                className="check"
                onClick={() =>
                  dispatch({
                    type: SET_SEARCH_FILTER,
                    payload: filterKey,
                  })
                }
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SearchFilter.propTypes = {
  setSearchFilter: PropTypes.func,
  activeFilter: PropTypes.string,
};

export default SearchFilter;
