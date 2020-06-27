import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='body-St'>

      <div className='btnContainer'>
        <Link className='btnS' to='/dashboard/daily-learning'>
          Daily Learning
        </Link>
        <Link className='btnS' to='/dashboard/progress'>
          Progress
        </Link>        <Link className='btnS' to='/dashboard/searchword'>
          SearchWord
        </Link>
        <Link className='btnS' to='/dashboard/settings'>
          Settings
        </Link>
        <Link className='btnS' to='/dashboard/searchml'>
          searchML
        </Link>
        <Link className='btnS' to='/dashboard/searchrhy'>
          searchRhy
        </Link>
        <Link className='btnS' to='/dashboard/lists'>
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
