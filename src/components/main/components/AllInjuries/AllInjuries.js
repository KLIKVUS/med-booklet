import React from 'react';
import Content from '../content/Content';


function AllInjuries() {
  return (
    <React.Fragment>
      <h1 className='main__title'>Все травмы:</h1>

      <section className="main__container">
        <h1 className='main__subtitle'>При кровотечении</h1>
        <Content fileName={"bleeding"} />
      </section>
      
      <section className="main__container">
        <h1 className='main__subtitle'>При ожогах</h1>
        <Content fileName={"burn"} />
      </section>
      
      <section className="main__container">
        <h1 className='main__subtitle'>При обморожении</h1>
        <Content fileName={"frostbite"} />
      </section>
      
      <section className="main__container">
        <h1 className='main__subtitle'>Инородные тела в дыхательных путях</h1>
        <Content fileName={"foreign-bodies-in-the-respiratory-tract"} />
      </section>
    </React.Fragment>
  );
}

export default AllInjuries;  