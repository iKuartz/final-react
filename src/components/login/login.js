import React, { useState } from 'react'
import { setLogin } from '../../redux/login/login';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom';
import { setSession, getSession } from '../../storage/session';
import Logo from '../logo/logo';
import './login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: ''
  })
  const logged = getSession('session')

  return logged === 'logged' ? <Navigate to="/"/> : (
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
        </form>
      </div>
    </section>
  )
}

export default Login
