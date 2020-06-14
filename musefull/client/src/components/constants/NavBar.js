import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// STYLE
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem, NavbarBrand } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav justify className='nav align-items-center fluid navS'>
      {/* <NavItem className='nav-item'>
        <Link className='links  nav-link' to='/'>
          Home
        </Link>
      </NavItem> */}
      <NavItem className='nav-item'>
        <Link className='links nav-link' to='/login'>
          Login
        </Link>
      </NavItem>
      <FontAwesomeIcon icon={faCog} pulse color='white' size='3x' />
      <NavbarBrand className='nav-item'>
        <Link className='logo nav-link' to='/'>
          TMA:The Museful App
        </Link>
      </NavbarBrand>
      <FontAwesomeIcon icon={faGraduationCap} spin color='white' size='3x' />
      <NavItem className='nav-item'>
        <Link className='links nav-link' to='/dashboard'>
          Dashboard
        </Link>
      </NavItem>
      {/* <NavItem className='nav-item'>
        <Link className='links nav-link' to='/dashboard/highscores'>
          Highscores
        </Link>
      </NavItem> */}
    </Nav>
  );
};

NavBar.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
