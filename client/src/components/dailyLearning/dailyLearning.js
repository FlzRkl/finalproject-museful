import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRandom } from "../../actions/searchAction";

// STYLE
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DailyLearning = ({ fetchRandom }) => {
  const isLoading = useSelector((state) => state.search.isLoading);
  const fiveWord = useSelector((state) => state.search.random);
  const [random, setRandom] = useState([]);
  console.log(random, fiveWord);
  const getRandom = (e) => {
    e.preventDefault();
    fetchRandom();
  };

  useEffect(() => {
    setRandom(fiveWord);
  }, [fiveWord]);

  return (
    <div className="bodyS">
      <h1> Daily Learning </h1>{" "}
      <Link className="" to="/dashboard">
        <p className="btnBack">
          <FontAwesomeIcon icon={faAngleLeft} size="1x" />
        </p>{" "}
      </Link>
      {/* <input type='text' value='Give it a try!' /> */}{" "}
      <button type="submit" className="btnI" onClick={getRandom}>
        Get 5 Random Words{" "}
      </button>{" "}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="searchResult">
          {random
            ? random.map((item) => (
                <div>
                  <button className="btnI">{item.word}</button>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

DailyLearning.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  fiveWord: state.search.random,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchRandom })(DailyLearning);
