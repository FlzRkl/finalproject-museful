import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector, connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { loadItem } from "../../actions/listAction";
import { LAST_ITEM } from "../../actions/actionTypes";

const Lists = ({ loadItem }) => {
  const userLists = useSelector((state) => state.auth.user.list);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const id = e.target.closest("li").id;
    loadItem(id);
    // console.log(id);
    dispatch({
      type: LAST_ITEM,
      payload: id,
    });
  };

  return (
    <Fragment>
      {loadItem ? (
        <div className='dashboard d-flexColumn'>
          <h1 className=''>List Storage</h1>
          <ul className='' id='list-list'>
            {userLists.map((item) => (
              <li
                key={item.id}
                id={item.id}
                onClick={handleClick}
                className='text'
              >
                <Link to='/dashboard/listComponent'>
                  <Cards item={item} />
                </Link>
              </li>
            ))}{" "}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

Lists.propTypes = {};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { loadItem })(Lists);
