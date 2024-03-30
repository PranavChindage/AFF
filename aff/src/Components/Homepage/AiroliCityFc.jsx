import React from 'react';
import './AiroliCityFc.css';
import indianFootball from '../../img/india-football.png'; // Import your poster image
import logoImage from '../../img/acflogo.png'; // Import your logo image

const AiroliCityFc = () => {
  return (
    <div className="poster-container">
      <div className="poster-content">
        <h2 className="poster-title">
          <img src={logoImage} alt="Logo" className="poster-logo" />
          Airlo City FC
        </h2>
      </div>
      <div className="poster-image">
        <img src={indianFootball} alt="Poster" />
      </div>
      <hr />
    </div>
  );
};

export default AiroliCityFc;
