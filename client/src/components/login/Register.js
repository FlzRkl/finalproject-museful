import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Register = () => {
  return (
    <Fragment>
      <form className='bodyS'>
        <h1>Hi! Would you like to join us? Then please sign up.</h1>
        <div className=''>
          <label for='username' className='d-block '>
            Username
          </label>
          <input type='text' name='username' className='' />
        </div>
        <div className=''>
          <label for='password' className='d-block'>
            Password
          </label>
          <input type='text' name='password' className='' />
        </div>
        <div className=''>
          <input type='submit' className='btnForm' value='Sign Up' />
        </div>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
