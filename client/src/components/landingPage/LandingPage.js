import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { registerModal } from '../auth/registerModal';
import { loginModal } from '../auth/loginModal';

export const LandingPage = () => {
  // const [modal, setModal] = useState(false);
  // // const [toggle, setToggle] = useState(true);

  // const toggleModal = () => {
  //   setModal(!modal);
  //   console.log(modal);
  // };

  return (
    <div className='dashboard d-flexColumn'>
      <h1>Hi! Welcome to the Musefull App.</h1>
      <h3>Are you interested how it works? Then please:</h3>
      <registerModal />
      <h3>You already have an account? Then please login:</h3>
      <loginModal />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
