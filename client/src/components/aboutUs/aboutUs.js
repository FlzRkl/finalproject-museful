import React from 'react';
import { connect } from 'react-redux';

//STYLING
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconSize = '4x';

const aboutUs = () => {
  return (
    <div className='dashboard pro'>
      <div className='intro'>
        <h3 className=''>About Museful</h3>
        <p>
          Our mission is to help anyone to learn anything they want in a museful
          and playful way. Let's start to creat a learning and memorizing space
          which will grow to a user self generated and curated learning
          management system – welcome to your museful space. Improve your skills
          with words and terms by getting your <span>Daily Learnings</span> –
          just for fun. Enjoy your journey by searching for rhyming words or
          your are curiosed about the meaning of a word, you have the choice to
          search and filter. If your are seeking for a space to collect and
          store content you have searched for, so museful is the right place for
          you.{' '}
        </p>
      </div>

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
        <h3 className=''>About Us</h3>
        <p>
          This is our final project after 8 month of heavy practical web
          development learning at the DCI in Hamburg. We are Filiz, Lana,
          Harris, Sascha and Stefan. You can find our contacts in the links
          above.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(aboutUs);
