import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const LandingPage = () => {
  return (
    <div className='container'>
      <h1> Welcome to the Musefull App </h1>
    </div>
  );
};

LandingPage.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
