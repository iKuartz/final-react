import React, { useState }  from 'react'
import { setLogin } from '../../redux/login/login';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom';
import { setSession, getSession } from '../../storage/session';
import logo from '../../assets/images/logo.png'
import './login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: ''})
  const loged = getSession('session')

  return loged === 'loged' ? <Navigate to="/"/> : (
    <section className='log-section'>
      <div className='log-bg'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <h1 unselectable="on">Hotel</h1>
        </div>
    <form className='log-form' onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder='Username' value={user.username} onChange={(e) => {
        setUser({ ...user, username: e.target.value})
      }} required/>
 
      <button disabled={user.username.length < 4 } type='submit' onClick={() => {
        dispatch(setLogin(true))
        setSession('loged')
        navigate('/')
      }}>Login</button>
    </form>
    </div>
    </section>
  )
}

export default Login