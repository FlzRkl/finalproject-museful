import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

//TOGGLE
// import Toggle from "./Darkmode/Toggle";
// import { useDarkMode } from "./Darkmode/useDarkMode";

// STYLE
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavbarBrand } from 'react-bootstrap';

//Functions
import { loadItem } from '../../actions/listAction';

//ICONSIZE
let iconSize = '3x';

const NavBar = ({ loadItem }) => {
  // const aboveItem = useSelector((state) => state.list.mainList.aboveItemId);
  // const history = useHistory();

  // const handleClick = (e) => {
  //   //aboveItem is undefined??
  //   console.log(aboveItem);
  //   aboveItem ? loadItem(aboveItem) : history.push("/dashboard/lists");
  // };

  //TOGGLE HOOK
  // const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <Nav className='navbar'>
        <div className='settings'>
          <NavItem className='link'>
            <Link className=' ' to='/dashboard/progress'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                // spin
                color='#fff'
                size={iconSize}
              />{' '}
            </Link>{' '}
          </NavItem>{' '}
          <NavItem className='link'>
            <Link className=' ' to='/dashboard/settings'>
              <FontAwesomeIcon icon={faCog} spin color='#fff' size={iconSize} />{' '}
            </Link>{' '}
          </NavItem>{' '}
          {/* <NavItem className='link'>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                  </NavItem> */}{' '}
        </div>{' '}
        <NavbarBrand className='header link'>
          <Link className='link' to='/dashboard'>
            <span> TMA: </span>The Museful App{' '}
          </Link>{' '}
        </NavbarBrand>{' '}
      </Nav>{' '}
      {/* <div className=''>
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
                    strokeWidth='1'
                    strokeLinecap='round'

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
 <
      /svg>  <
      /div> */}{' '}
    </>
  );
};

NavBar.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, {
  loadItem,
})(NavBar);
