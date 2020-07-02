import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class registerModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className='dashboard d-flexColumn'>
        <h1>Hi! Welcome to the Musefull App.</h1>
        <h3>Are you interested how it works? Then please:</h3>
        <button className='btnI'>Register</button>
        <h3>You are already registered? Then please login:</h3>
        <button className='btnI'>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(registerModal);
