import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import InjuryCategories from './components/InjuryСategories/InjuryCategories';
import AllInjuries from './components/AllInjuries/AllInjuries';

import "./main.scss"


function Main() {
  return (
    <main className="main" id="main">
      <Routes>
        <Route path='*' element={<Navigate to="/injury-categories" />}/>
        <Route path="/" element={<Navigate to="/injury-categories" />}/>

        <Route path="/injury-categories/*" element={<InjuryCategories />}/>

        <Route path="/all-injuries" element={<AllInjuries />}/>
      </Routes>
    </main>
  );
}

export default Main;