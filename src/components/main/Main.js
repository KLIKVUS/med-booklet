import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { showPanel } from '../header/Header';

import Content from './components/content/Content';
import Panel from './components/panel/Panel';

import "./main.scss"


function Main() {
  console.log(showPanel);
  return (
    <main className="main" id="main">
      <section className="main__content-wrapper">
        <Router>
          <Panel />
          <Routes>
            <Route path="/" element={<Navigate to="/injury-categories/bleeding" />}/>
            <Route path="/injury-categories">
              <Route path="bleeding" element={<Content url="bleeding" />}/>
              <Route path="burn" element={<Content url="burn" />}/>
              <Route path="frostbite" element={<Content url="frostbite" />}/>
              <Route path="foreign-bodies-in-the-respiratory-tract" element={<Content url="foreign-bodies-in-the-respiratory-tract" />}/>
            </Route>
            <Route path="/all-injuries" element={<Content url="" />}/>
            <Route path='*' element={<Navigate to="/injury-categories/bleeding" />}/>
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default Main;
