import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faCoffee } from '@fortawesome/free-solid-svg-icons'


function Sign({bool}){
  return (
    bool ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />
    )
}

export default Sign