import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//STYLING
import {
  faSearch,
  faClipboard,
  faListUl,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconSize = "1x";

const Dashboard = () => {
  if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
    console.log("🎉 Dark mode is supported");
  } else {
    console.log("Dark mode not supported");
  }

  console.log(window.matchMedia("(prefers-color-scheme:dark)"));

  return (
    <div className='dashboard'>
      <Link className='subHeader link' to='/dashboard/daily-learning'>
        <FontAwesomeIcon icon={faListUl} size={iconSize} />
      </Link>
      <Link className='subHeader link' to='/dashboard/search-word'>
        <FontAwesomeIcon icon={faSearch} size={iconSize} />
      </Link>
      <Link className='subHeader link' to='/dashboard/lists'>
        <FontAwesomeIcon icon={faClipboard} size={iconSize} />
      </Link>
      <Link className='subHeader link' to='/dashboard/logout'>
        <FontAwesomeIcon icon={faDoorOpen} size={iconSize} />
      </Link>
    </div>
  );
};

Dashboard.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
