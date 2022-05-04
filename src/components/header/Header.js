import React from 'react';
import { NavLink } from 'react-router-dom';

import "./header.scss"


export let showPanel = true;

function Header() {
  return (
    <header className="header">
      <picture className="header__logo-wrapper">
        <source srcSet="/med-booklet/images/logo/logo-tb.svg" media="(min-width: 768px)"/>
        <source srcSet="/med-booklet/images/logo/logo-pc.svg" media="(min-width: 1280px)"/>
        <img src="/med-booklet/images/logo/logo-mb.svg" alt="logo" className="header__logo"/>
      </picture>
      
      <section className="header__text-wrapper">
        <h1 className="header__title">Что это такое?</h1>
        <p className="header__subtitle">Тут мы расскажем о важных навыках и способах для спасения жизни человека.</p>

        <div className="header__nav-links nav-links">
          <NavLink className="nav-links__link--highlighted scroll-to" to="/injury-categories/bleeding#main">категории травм</NavLink>
          <NavLink className="nav-links__link scroll-to" to="/all-injuries#main">все травмы</NavLink>
        </div>
      </section>
    </header>
  );
}

export default Header;
