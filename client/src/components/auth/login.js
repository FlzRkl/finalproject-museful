import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/auth';
import { clearErrors } from '../../actions/errorAction';

//DEV
import { v4 as uuid } from 'uuid';

//STYLE
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const LoginModalF = ({ clearErrors, login }) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const toggle = () => {
    //Clear Errors
    clearErrors();
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <button className='regBtn' onClick={toggle}>
        Login
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className='modalI'>
          Login
        </ModalHeader>
        <ModalBody>
          {msg
            ? msg.map((error) => (
                <Alert key={uuid()} color='danger'>
                  {error.msg}
                </Alert>
              ))
            : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailInput}
                className='mb-3'
              />
              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                className='mb-3'
                onChange={handlePasswordInput}
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                <Link to='/dashboard'>Login</Link>
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

LoginModalF.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { login, clearErrors })(LoginModalF);
