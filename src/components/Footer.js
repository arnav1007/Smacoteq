import React from 'react';
import './Footer.css';
import Language_LOGO from '../images/LANGUAGE_LOGO.png'
import qLogo from '../images/qLogo.png'

const Footer = () => (
  <footer className="footer">
      <img src={Language_LOGO} alt="" className="language-logo" />
      <div className="left-box">
      <a href="#arth">ARTH.BHUMI</a>
      <a href="#antfi">ANTFI.XYZ</a>
      <a href="#shipping">For Shipping Co's</a>
      </div>
      <div className="logo">
      <img src={qLogo} alt="" className="q-logo" />
      <a href="#who-we-are">WHO WE ARE</a>
      </div>
      <a href="#contact">CONTACT</a>
  </footer>
);

export default Footer;
