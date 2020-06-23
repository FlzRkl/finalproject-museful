import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// STYLE
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavbarBrand } from 'react-bootstrap';

let iconSize = '3x';

const NavBar = () => {
  return (
    <Nav className='navS'>
      <NavItem className=''>
        <Link className='links ' to='/signin'>
          Login
        </Link>
      </NavItem>
      <FontAwesomeIcon
        icon={faCog}
        pulse
        color='white'
        size={iconSize}
        className='iconNav'
      />
      <NavbarBrand className=''>
        <Link className='logo ' to='/'>
          TMA:The Museful App
        </Link>
      </NavbarBrand>
      <FontAwesomeIcon
        icon={faGraduationCap}
        spin
        color='white'
        size={iconSize}
        className='iconNav'
      />
      <NavItem className=''>
        <Link className='links ' to='/dashboard'>
          Dashboard
        </Link>
      </NavItem>
    </Nav>
  );
};

NavBar.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
