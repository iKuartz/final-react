import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './logo.scss';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className='logo' onClick={() => navigate('/')}>
    <img src={logo} alt='logo' />
    <h1 unselectable="on">Hotel</h1>
  </div>
  );
};

export default Logo;