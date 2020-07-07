import React from 'react';
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
    <div className='d-flexColumn textCenter'>
      <h3 className='textTitle mb-3'>
        Imagine, discover and create your own learning space!
      </h3>
      <div className='regContainer '>
        <div className='regBox'>
          <h3 className='textSubtitle'>Are you interested how it works?</h3>
          <RegisterModalF />
        </div>
        <div className='regBox'>
          <h3 className='textSubtitle'>You already have an account?</h3>
          <LoginModalF />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
