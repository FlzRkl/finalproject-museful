import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth';

//STYLING
import {
  faSearch,
  faClipboard,
  faListUl,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconSize = '1x';

const Dashboard = ({ logout }) => {
  return (
    <div className='dashboard'>
      <Link
        className='subHeader link daily-learning'
        to='/dashboard/daily-learning'
      >
        <FontAwesomeIcon icon={faListUl} size={iconSize} className='faIcon' />
      </Link>
      <Link className='subHeader link search-word' to='/dashboard/search-word'>
        <FontAwesomeIcon icon={faSearch} size={iconSize} className='faIcon' />
      </Link>
      <Link className='subHeader link listsIcon' to='/dashboard/lists'>
        <FontAwesomeIcon
          icon={faClipboard}
          size={iconSize}
          className='faIcon'
        />
      </Link>
      <Link className='subHeader link logout' to='/' onClick={logout}>
        <FontAwesomeIcon icon={faDoorOpen} size={iconSize} className='faIcon' />
      </Link>
    </div>
  );
};

Dashboard.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { logout })(Dashboard);
