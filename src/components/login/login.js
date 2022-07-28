import React, { useState } from 'react'
import { getUserFromApi } from '../../redux/login/login';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../../storage/session';
import Logo from '../logo/logo';
import './login.scss'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = getSession()
  const store = useSelector((store) => store.login)
  const [user, setUser] = useState({
    username: ''
  })
  
  useEffect(() => {
    if(state.token !== null){
     navigate("/")   
    }
},[store, '', state])
  return (
      <section className='log-section'>
        <div className='log-bg'>
          <Logo />
          <form className='log-form' onSubmit={(e) => {
            e.preventDefault()
            dispatch(getUserFromApi(user.username))  
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
