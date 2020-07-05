import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class registerModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className='dashboard d-flexColumn'>
        <h1>Imagine, discover and create your own learning space!</h1>
        <h3>
          Do you wanna know how a museful space works and looks like? Then, here
          you go.
        </h3>
        <button className='btnA'>Register</button>
        <h3>You are already in? Welcome back again.</h3>
        <button className='btnA'>Login</button>
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
