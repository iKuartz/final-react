import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Sign({ bool }) {
  return (
    bool ? <FontAwesomeIcon icon={faCircleCheck} className="check" /> : <FontAwesomeIcon icon={faCircleXmark} className="xCheck" />
  );
}

export default Sign;
