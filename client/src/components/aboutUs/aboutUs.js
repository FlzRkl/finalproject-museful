import React from 'react';
import { connect } from 'react-redux';

//STYLING
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconSize = '4x';

const aboutUs = () => {
  return (
    <div className='dashboard pro'>
      <div className='profiles'>
        <a
          class='link aboutUs effectContainer'
          href='https://github.com/FlzRkl'>
          <p class='underlay textTitle'>F</p>
          <FontAwesomeIcon
            class='overlay faIcon'
            icon={faIdBadge}
            size={iconSize}
          />
        </a>

        <a
          className='link aboutUs effectContainer'
          href='https://github.com/lanamaxic'>
          <p className='underlay textTitle'>L</p>
          <FontAwesomeIcon
            className='overlay faIcon'
            icon={faIdBadge}
            size={iconSize}
          />
        </a>
        <a
          className='link aboutUs effectContainer'
          href='https://github.com/harris-12'>
          <p className='underlay textTitle'>H</p>
          <FontAwesomeIcon
            className='overlay faIcon'
            icon={faIdBadge}
            size={iconSize}
          />
        </a>
        <a
          className='link aboutUs effectContainer'
          href='https://github.com/Staschek'>
          <p className='underlay textTitle'>S</p>
          <FontAwesomeIcon
            className='overlay faIcon'
            icon={faIdBadge}
            size={iconSize}
          />
        </a>
        <a
          className='link aboutUs effectContainer'
          href='https://www.mendritzk.io/'>
          <p className='underlay textTitle'>S</p>
          <FontAwesomeIcon
            className='overlay faIcon'
            icon={faIdBadge}
            size={iconSize}
          />
        </a>
      </div>
      <div className='intro'>
        <h1 className=''>About Us</h1>
        <p>
          This is our final project after 8 month of heavy practical web
          development learning at the DCI in Hamburg. We are Filiz, Lana,
          Harris, Sascha and Stefan and would like to hear from you. You can
          find our contacts in the links above.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(aboutUs);
