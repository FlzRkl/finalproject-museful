import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import RegisterModalF from '../auth/register';
import LoginModalF from '../auth/login';

const LandingPage = () => {
  // const [modal, setModal] = useState(false);
  // // const [toggle, setToggle] = useState(true);

  // const toggleModal = () => {
  //   setModal(!modal);
  //   console.log(modal);
  // };

  return (
    <div className='dashboard d-flexColumn'>
      <h3>Hi! Welcome to the Musefull App.</h3>
      <div className='regContainer'>
        <div className='regBox'>
          <h3>Are you interested how it works? Then please:</h3>
          <RegisterModalF />
        </div>
        <div className='regBox'>
          <h3>You already have an account? Then please login:</h3>
          <LoginModalF />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
