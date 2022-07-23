import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSession } from '../storage/session'

const Test = () => {
    const loged = getSession('session')
    const navigate = useNavigate()
    useEffect(() => {
        if (!loged){
         navigate("/login")   
        }
    },[])

    return (
        <p>logged</p>
    )
}

export default Test