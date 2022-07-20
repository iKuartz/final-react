import React from 'react'
import { Navigate } from 'react-router-dom'
import { getSession } from '../storage/session'

const Test = () => {
    const loged = getSession('session')

    if(loged === 'loged'){
        return(
            <p>logged</p>
        )
    }
    return(
        <Navigate to="/login"/>
    )
}

export default Test