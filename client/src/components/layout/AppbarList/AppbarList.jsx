import React from 'react';
import { NavLink } from 'react-router-dom';

const listObjekt = {
  list0: { Component0: ['Component0', 'Component1', 'Component2'] },
};

export default function AppbarList() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <NavLink className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                About{' '}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/features'>
                Features{' '}
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <NavLink
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                to='/component'
                //onMouseEnter={showDropdown()}
              >
                Components{' '}
              </NavLink>

              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <NavLink className='dropdown-item' to='/component/0'>
                  {listObjekt.list0.Component0[0]}
                </NavLink>{' '}
                <NavLink className='dropdown-item' to='/component/1'>
                  {listObjekt.list0.Component0[1]}
                </NavLink>
                <NavLink className='dropdown-item' to='/component/2'>
                  {listObjekt.list0.Component0[2]}
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      // Breadcrums
    </>
  );
}
