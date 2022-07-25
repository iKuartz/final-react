import React, { useState } from 'react'
import { setLogin } from '../../redux/login/login';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession, getSession } from '../../storage/session';
import Logo from '../logo/logo';
import './login.scss'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: ''
  })
  const logged = getSession('session')
  
  useEffect(() => {
    if (logged){
     navigate("/")   
    }
},[])
  return (
      <section className='log-section'>
        <div className='log-bg'>
          <Logo />
          <form className='log-form' onSubmit={(e) => {
            dispatch(setLogin(true))
            setSession('logged')
            navigate('/')
            e.preventDefault()
          }}>
            <input type="text" placeholder='Username' value={user.username} onChange={(e) => {
              setUser({ username: e.target.value })
            }} required />

            <button disabled={user.username.length < 4} type='submit'>Login</button>
            <p>Don't have an accoount? <a href='/signup'>Sign up</a> </p>
          </form>
        </div>
      </section>
    )
}

export default Login
