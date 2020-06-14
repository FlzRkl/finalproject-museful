import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SignUpForm from "./Register";

export const Login = () => {
  return (
    <div className=''>
      <SignUpForm />
    </div>
  );
};

Login.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
