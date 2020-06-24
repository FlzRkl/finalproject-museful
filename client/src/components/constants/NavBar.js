import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// STYLE
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavbarBrand } from 'react-bootstrap';

//Functions
import { loadItem } from '../../actions/listAction';

let iconSize = '3x';

const NavBar = ({ loadItem }) => {
  const aboveItem = useSelector((state) => state.list.mainList.aboveItem);
  const history = useHistory();

  const handleClick = (e) => {
    //aboveItem is undefined??
    console.log(aboveItem);
    aboveItem ? loadItem(aboveItem) : history.push('/dashboard/lists');
  };

  return (
    <>
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
      <div className='bread'>
        <svg
          onClick={handleClick}
          className='bi bi-arrow-left-circle-fill'
          width='1.5em'
          height='1.5em'
          viewBox='0 0 18 18'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            transform='translate(1, 1)'
            stroke='white'
            stroke-width='1'
            stroke-linecap='round'
            fillRule='evenodd'
            d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z'
          />
        </svg>
        //Breadcrum
        {/* <svg
          className='bi bi-arrow-right-circle-fill'
          width='1.5em'
          height='1.5em'
          viewBox='0 0 18 18'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            transform='translate(1, 1)'
            stroke='white'
            stroke-width='1'
            stroke-linecap='round'
            fillRule='evenodd'
            d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z'
          />
        </svg> */}
      </div>
    </>
  );
};

NavBar.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({ list: state.list });

const mapDispatchToProps = {};

export default connect(mapStateToProps, { loadItem })(NavBar);
