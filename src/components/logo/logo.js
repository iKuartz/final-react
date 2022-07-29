import React from 'react';
import logo from '../../assets/images/logo.png';
import './logo.scss';

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" />
    <h1 unselectable="on">Hotel</h1>
  </div>
);

export default Logo;
