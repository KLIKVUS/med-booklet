import { Routes, Route, Navigate } from 'react-router-dom';

import Content from '../content/Content';
import Panel from './panel/Panel';


function InjuryCategories() {
  return (
    <section className="main__container--with-panel">
      <Panel />

      <Routes>
        <Route path="*">
          <Route path="*" element={<Navigate to="./bleeding" />}/>

          <Route path="bleeding" element={<Content fileName="bleeding" />}/>
          <Route path="burn" element={<Content fileName="burn" />}/>
          <Route path="frostbite" element={<Content fileName="frostbite" />}/>
          <Route path="foreign-bodies-in-the-respiratory-tract" element={<Content fileName="foreign-bodies-in-the-respiratory-tract" />}/>
        </Route>
      </Routes>
    </section>
  );
}

export default InjuryCategories;  