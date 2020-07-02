import React, { useState, useEffect, useRef } from 'react';
import './list.scss';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import { ItemFilter } from './ItemFilter';
import { submitItem } from '../../actions/listAction';
import { loadItem, getListArr } from '../../actions/listAction';
import { connect, useSelector, useDispatch } from 'react-redux';

export const ListComponent = ({ submitItem, loadItem, getListArr }) => {
  const inputEl = useRef(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState([]);
  const mainList = useSelector((state) => state.list.mainList);
  const filteredList = useSelector((state) => state.list.filteredList);
  const filter = useSelector((state) => state.list.filter);
  const user = useSelector((state) => state.auth.user._id);
  const currentId = useSelector((state) => state.list.mainList._id);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
    console.log(desc);
  };

  const handleClick = (e) => {
    const id = e.target.closest('li').id;
    loadItem(id);
    console.log(id);
  };

  let submitObject = {
    user: user,
    title: title,
    tag: filter,
    desc: desc,
    aboveItemId: currentId,
  };

  const submit = (e) => {
    e.preventDefault();
    submitItem(submitObject, currentId);
    setTitle('');
    setDesc('');
    loadItem(currentId);
  };

  useEffect(() => {
    inputEl.current.focus();
    getListArr(mainList);
  }, [mainList]);

  useEffect(() => {
    setTags(filteredList[0]);
    setData(filteredList[1]);
  }, [filteredList]);

  return (
    <>
      <h1 className='mb-3'>{mainList.title}</h1>
      <h3 className='mb-3'>{mainList.desc}</h3>
      <ItemFilter />
      <form
        onSubmit={submit}
        className='form col-xs-12 col-sm-10 col-md-8 col-lg-6'
      >
        <div className='input-group mb-2'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='input-addon-filter'>
              @@
            </span>
          </div>
          <input
            ref={inputEl}
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
          <div className='input-group-append'>
            <button
              onClick={submit}
              className='input-group-text'
              id='input-addon-add'
            >
              Add
            </button>
          </div>
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
      </form>
      <hr />
      <div className='col-lg-8'>
        <ul className='list-group list-group-flush bg-light text-dark text-center'>
          {data
            ? data.map((item, index) => (
                <>
                  <h4>{tags[index]}</h4>
                  <li
                    key={tags[index] + index}
                    id={tags[index] + index}
                    onClick={handleClick}
                    className='list-group-item'
                  >
                    <ListItems item={item} />
                  </li>
                </>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

ListComponent.propTypes = {
  submitItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { submitItem, loadItem, getListArr })(
  ListComponent
);
