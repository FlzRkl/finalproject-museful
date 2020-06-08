import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Nav, NavItem, NavbarBrand} from 'react-bootstrap';

const NavBar = () => {
  return (
     <Nav justify className='nav align-items-center bg-dark fluid'>
      {/* <FontAwesomeIcon icon={faCogs} /> */}
      <NavbarBrand className="nav-item">
        <Link className='logo nav-link' to='/dashboard'>
         MA:The Museful App
        </Link>
      </NavbarBrand>
      <NavItem className="nav-item">
        <Link className='links  nav-link' to='/'>
          Landing Page
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link className='links nav-link' to='/login'>
          Login
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link className='links nav-link' to='/dashboard'>
          Dashboard
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link className='links nav-link' to='/dashboard/highscores'>
          Highscores
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
