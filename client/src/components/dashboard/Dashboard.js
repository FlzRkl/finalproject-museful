import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='body-St'>
      <div className='btnContainerF'>
        <Link className='btnSFil' to='/dashboard/daily-learning'>
          Daily Learning
        </Link>
        <Link className='btnSFil' to='/dashboard/progress'>
          Progress
        </Link>{' '}
        <Link className='btnSFil' to='/dashboard/searchword'>
          SearchWord
        </Link>
        <Link className='btnSFil' to='/dashboard/settings'>
          Settings
        </Link>
        <Link className='btnSFil' to='/dashboard/searchml'>
          searchML
        </Link>
        <Link className='btnSFil' to='/dashboard/searchrhy'>
          searchRhy
        </Link>
        <Link className='btnSFil' to='/dashboard/lists'>
          Lists
        </Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
