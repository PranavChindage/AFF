import React, { useEffect, useRef } from 'react';
import './Winners.css';
import atfl from "../../img/atfl.png";
import blaze from "../../img/blaze.png";
import ts from "../../img/topscorer.png";
import bg from "../../img/goalkeeper.png"



const Winners = () => {
  const winnersRef = useRef(null);
  const runnerUpsRef = useRef(null);
  const individualAwardsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const winnersObserver = new IntersectionObserver(handleIntersection, options);
    const runnerUpsObserver = new IntersectionObserver(handleIntersection, options);
    const individualAwardsObserver = new IntersectionObserver(handleIntersection, options);
  
    // Copy ref values to variables
    const winnersRefValue = winnersRef.current;
    const runnerUpsRefValue = runnerUpsRef.current;
    const individualAwardsRefValue = individualAwardsRef.current;
  
    if (winnersRefValue) winnersObserver.observe(winnersRefValue);
    if (runnerUpsRefValue) runnerUpsObserver.observe(runnerUpsRefValue);
    if (individualAwardsRefValue) individualAwardsObserver.observe(individualAwardsRefValue);
  
    return () => {
      if (winnersRefValue) winnersObserver.unobserve(winnersRefValue);
      if (runnerUpsRefValue) runnerUpsObserver.unobserve(runnerUpsRefValue);
      if (individualAwardsRefValue) individualAwardsObserver.unobserve(individualAwardsRefValue);
    };
  }, []);
  

  return (
    <section className="winners-container">
      <div className="winners-section" ref={winnersRef}>
      <div className='details'>
        <h2 style={{marginBottom:40}}>Winners</h2>
        <h3>ATFL Boys</h3>
        </div>
        <div className="image-container">
          <img src={atfl} alt="" className={`winners`} />
        </div>
        
      </div>
      <div className="winners-section" ref={runnerUpsRef}>
      <div className="image-container">
          <img src={blaze} alt="" className={`runnerups`} />
        </div>
      <div className='details'>
        <h2 style={{marginBottom:40 , fontSize:"4rem"}}>Runnerups</h2>
        <h3>Blaze FC</h3>
        </div>
         
      </div>
      <div className="individual-awards" ref={individualAwardsRef}>
        <div className="individual-award">
          <div className="image-container">
            <img src={ts} alt="" className={`goal-scorer`} />
          </div>
          <h3 style={{marginTop:"20px",color:"white"}}>Top Goal Scorer</h3>
        </div>
        <div className="individual-award">
          <div className="image-container">
            <img src={bg} alt="" className={`goal-keeper`} />
          </div>
          <h2 style={{marginTop:"20px",color:"white"}}>Best Goal Keeper</h2>
        </div>
      </div>
    </section>
  );
};

export default Winners;
