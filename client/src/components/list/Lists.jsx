import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect, useDispatch } from 'react-redux';
import Cards from './Cards';
import { loadItem } from '../../actions/listAction';
// import { LAST_ITEM } from '../../actions/actionTypes';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitItem } from '../../actions/listAction';

const Lists = ({ submitItem }) => {
  const userLists = useSelector((state) =>
    state.auth.isAuthenticated ? state.auth.user.list : null
  );

  const [toggle, setToggle] = useState(true);
  const formStyle = () => {
    setToggle(!toggle);
  };

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState([]);
  const user = useSelector((state) =>
    state.auth.isAuthenticated ? state.auth.user._id : null
  );

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  let submitObject = {
    user: user,
    title: title,
    tag: 'list',
    desc: desc,
  };

  const submit = (e) => {
    e.preventDefault();
    submitItem(submitObject);
    setTitle('');
    setDesc('');
  };

  const handleAdd = () => {
    console.log('make form visible');
  };
  return (
    <>
      <div className='head'>
        <div className='row my-4'>
          <h3 className='display'>List Storage</h3>
          <div className='btnL' onClick={formStyle}>
            {toggle ? (
              <FontAwesomeIcon icon={faPlus} size={'1x'} className='iconAdd' />
            ) : (
              <FontAwesomeIcon icon={faMinus} size={'1x'} className='iconAdd' />
            )}
          </div>
        </div>
        <form
          onSubmit={submit}
          className={
            toggle === true
              ? 'd-none form col-xs-12 col-sm-10 col-md-8 col-lg-6'
              : 'd-block form col-xs-12 col-sm-10 col-md-8 col-lg-6'
          }
        >
          <div className='input-group mb-2'>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              aria-label='Title'
              aria-describedby='input-title'
              value={title}
              name='inputList0'
              id='inputList0'
              onChange={handleChangeTitle}
            />
          </div>
          <div className='row'>
            <div className='input-group mb-3'>
              <textarea
                className='form-control'
                placeholder='Add Describtion'
                aria-label='Desc'
                value={desc}
                onChange={handleChangeDesc}
              ></textarea>
            </div>
          </div>
          <button
            onClick={submit}
            className='input-group-text'
            id='input-addon-add'
          >
            Add List
          </button>
        </form>
      </div>

      <ul className='d-flex wrap' id='list-list'>
        {userLists
          ? userLists.map((item) => (
              <>
                <li
                  key={item.id}
                  id={item.id}
                  className='col-xs-12 col-sm-6 col-md-6 col-lg-4'
                >
                  <Cards item={item} />
                </li>
              </>
            ))
          : null}{' '}
      </ul>
    </>
  );
};

Lists.propTypes = {
  userLists: PropTypes.array,
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { submitItem })(Lists);
