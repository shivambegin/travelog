// TravellersChoice.js
import React from 'react';

// replace with the actual path to your main image

const TravellersChoice = () => {
  return (
    <div className="travellers-choice-container">
      <div className="content">

        <h1 className="title">Travellers' Choice Awards Best of the Best</h1>
        <p className="description">Among our top 1% of places, stays, eats, and experiences—decided by you.</p>
        <button className="cta-button">See the winners</button>
      </div>
      <div className="image-container">
        
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
    </div>
  );
};

export default TravellersChoice;
