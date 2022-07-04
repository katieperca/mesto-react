import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo header__logo">
        <img className="logo__image" src={headerLogo} alt="Логотип Mesto" />
      </a>
    </header>
  )
}

export default Header;
