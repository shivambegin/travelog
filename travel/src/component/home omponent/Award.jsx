// AwardedMeals.js
import React from 'react';
// Create a CSS file for styling

const AwardedMeals = () => {
  const categories = [
    { title: "Fine Dining", image: "./image/dining.jpg" },
    { title: "Date Night", image: "./image/datenight.jpg" },
    { title: "Casual Dining", image: "./image/casual.jpg" },
    { title: "Hidden Gems", image: "./image/hidden.jpg" },
    { title: "vegan", image: "./image/vegan.jpg" },
    { title: "Hidden Gems", image: "./image/hidden.jpg" },
    { title: "Hidden Gems", image: "./image/hidden.jpg" },
    { title: "Hidden Gems", image: "./image/hidden.jpg" },
    { title: "Hidden Gems", image: "./image/hidden.jpg" },

  ];

  return (
    <div className="awarded-meals-container">
      <h2>Treat yourself to an award-winning meal</h2>
      <p>2024’s Travellers’ Choice Awards Best of the Best Restaurants</p>
      <div className="card-container">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <img src={category.image} alt={category.title} className="card-image" />
            <div className="award-badge">2024</div>
            <div className="card-title">{category.title}</div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default AwardedMeals;
