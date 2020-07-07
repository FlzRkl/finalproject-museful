import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { SET_ITEM_FILTER } from '../../actions/actionTypes';

import { ITEM_FILTERS } from './Item_Filters';

export const ItemFilter = () => {
  const activeFilter = useSelector((state) => state.list.filter);
  const dispatch = useDispatch();
  return (
    <div className='headFilter'>
      <ul className='item-filters col-10 form-check mb-3'>
        {Object.keys(ITEM_FILTERS).map((filterKey) => {
          const currentFilter = ITEM_FILTERS[filterKey];
          return (
            <li
              key={`item-filter-${currentFilter}`}
              className={cx(
                `item-filter-${currentFilter} form-check form-check-inline`,
                currentFilter === activeFilter && `check`
              )}
              onClick={() =>
                dispatch({
                  type: SET_ITEM_FILTER,
                  payload: currentFilter,
                })
              }
            >
              <input
                className='form-check-input'
                type='radio'
                id={`filter-${currentFilter}`}
                name={`item-filter-radio`}
                value={`option-${currentFilter}`}
              />
              <label
                className='form-check-label'
                htmlFor={`filter-${currentFilter}`}
              >
                {' '}
                {currentFilter}
              </label>
              <div className='check'></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ItemFilter.propTypes = {
  setItemFilter: PropTypes.func,
  activeFilter: PropTypes.string,
};

export default ItemFilter;
