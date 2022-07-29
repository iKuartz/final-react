import React from "react"
import logo from '../../assets/images/logo.png'
import './logo.scss'
import { useNavigate } from "react-router-dom"


const Logo = () => {
  const navigate = useNavigate()
  return(
    <div className='logo' onClick={() => navigate('/')}>
    <img src={logo} alt='logo' />
    <h1 unselectable="on">Hotel</h1>
  </div>
  )
}

export default Logo