import React from 'react';
import search from '../../assets/search.svg';
import './Header.scss';

class Header extends React.Component {

  render() { 
    return (
      <div className="header">
        <div className="header__logo">OPEN DOOR</div>
        <div className="header__link1 header__link">LIFESTYLE</div>
        <div className="header__link2 header__link">SOCIAL MEDIA</div>
        <div className="header__link3 header__link">TECHNOLOGY</div>
        <div className="header__link4 header__link">BUSINESS</div>
        <div className="header__link5 header__link">CAREERS</div>
        <img src={search} className="header__search" alt=""/>
      </div>
    );
  }
}

export default Header;