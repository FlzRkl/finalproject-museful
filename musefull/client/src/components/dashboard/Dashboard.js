import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='bodyS'>
      <div className='btnContainer'>
        <Link className='btnS' to='/dashboard/daily-learning'>
          Daily Learning
        </Link>
        <Link className='btnS' to='/dashboard/highscores'>
          Highscores
        </Link>
        <Link className='btnS' to='/dashboard/settings'>
          Settings
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
