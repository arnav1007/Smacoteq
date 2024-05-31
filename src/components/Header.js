import React from 'react';
import './Header.css';
import qLogo from '../images/qLogo.png'

const Header = () => (
  <header className="header">
    <div className="logo-box">
    <div className="logo"><img src={qLogo} alt="Q-LOGO" /></div>
    <div className="logo-text">SMACOTEQ</div>
    </div>
  </header>
);

export default Header;
