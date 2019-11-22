import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram-logo.png';
import linkin from '../../assets/linkedin-logo.png';
import twitter from '../../assets/twitter-logo.png';
import './Footer.scss';

class Footer extends React.Component {

  render() { 
    return (
      <div className="footer">
        <div className="footer__logo">Connect with us:</div>
        <img src={facebook} className="footer__search" alt=""/>
        <img src={instagram} className="footer__search" alt=""/>
        <img src={linkin} className="footer__search" alt=""/>
        <img src={twitter} className="footer__search" alt=""/>
        <div className="footer__link">copyright 2019</div>
      </div>
    );
  }
}

export default Footer;