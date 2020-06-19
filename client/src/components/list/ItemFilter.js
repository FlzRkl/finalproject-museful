import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFilter } from '../../actions/listAction';
import { ITEM_FILTERS } from './Item_Filters';

export const ItemFilter = ({ activeFilter, setFilter }) => {
  return (
    <div>
      <div className='item-filters'>
        {Object.keys(ITEM_FILTERS).map((filterKey) => {
          const currentFilter = ITEM_FILTERS[filterKey];
          return (
            <span
              key={`item-filter-${currentFilter}`}
              className={cx(
                'filter',
                currentFilter === activeFilter && 'filter--active'
              )}
              onClick={() => {
                setFilter(currentFilter);
              }}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    </div>
  );
};

ItemFilter.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => {
  return { activeFilter: state.list.filter };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { setFilter },
  mapDispatchToProps
)(ItemFilter);
