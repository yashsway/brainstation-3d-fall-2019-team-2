import React from 'react';
import logo from '../../assets/logo.png';
import './Header.scss';


class Header extends React.Component {

  render() { 
    return (
      <div className="header">
        <img src={logo} alt="" className="header__logo"/>
        <div className="header__link1 header__link">Lifestyle</div>
        <div className="header__link2 header__link">Social Media</div>
        <div className="header__link3 header__link">Tech</div>
        <div className="header__link4 header__link">bleepbloop</div>
        <div className="header__link5 header__link">bleepbloop</div>
        <div className="header__link6 header__link">bleepbloop</div>
        <div className="header__link7 header__link">bleepbloop</div>
      </div>
    );
  }
}

export default Header;