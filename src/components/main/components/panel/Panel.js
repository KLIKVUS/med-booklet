import React from 'react';
import { NavLink } from 'react-router-dom';


function Panel() {
  return (
    <div className="main__panel">
      <h1 className="main__title">Категорри травм</h1>

      <nav className="main__nav-category nav-category">
        <NavLink to="/med-booklet/injury-categories/bleeding" className="nav-category__item">При кровотечении</NavLink>
        <NavLink to="/med-booklet/injury-categories/burn" className="nav-category__item">При ожогах</NavLink>
        <NavLink to="/med-booklet/injury-categories/frostbite" className="nav-category__item">При обморожении</NavLink>
        <NavLink to="/med-booklet/injury-categories/foreign-bodies-in-the-respiratory-tract" className="nav-category__item">Инородные тела в дыхательных путях</NavLink>
      </nav>
    </div>
  );
}

export default Panel;