import React, { Fragment } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

// STYLE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='warning'>
        <FontAwesomeIcon icon={faExclamationCircle} spin /> Page Not Found
      </h1>
      <h4 className='warning'>Sorry, this page does not exist</h4>
    </Fragment>
  );
};

export default NotFound;
