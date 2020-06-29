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
      <div className="item-filters form-check form-check-inline">
        {" "}
        {Object.keys(SEARCH_FILTERS).map((filterKey) => {
          const currentFilter = SEARCH_FILTERS[filterKey];

          return (
            <div
              key={`item-filter-${currentFilter}`}
              className={cx(
                `item-filter-${currentFilter} form-check form-check-inline`,
                currentFilter === activeFilter && `active`
              )}
              onClick={() =>
                dispatch({
                  type: SET_SEARCH_FILTER,
                  payload: filterKey,
                })
              }
            >
              <input
                className="form-check-input"
                type="radio"
                id={`filter-${currentFilter}`}
                name={`item-filter-radio`}
                value={`option-${currentFilter}`}
              />{" "}
              <label
                className="form-check-label"
                htmlFor={`filter-${currentFilter}`}
              >
                {" "}
                {currentFilter}{" "}
              </label>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
};

SearchFilter.propTypes = {
  setFilter: PropTypes.func,
  activeFilter: PropTypes.string,
};

export default SearchFilter;
