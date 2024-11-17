import React from 'react';
import './Resturants.css';

const Restaurants = () => {
  const restaurants = [
    {
      name: "Le Gourmet Bistro",
      location: "Paris, France",
      cuisine: "French",
      priceRange: "$$$",
      image: "/image/le-gourmet.jpg",
      reservationLink: "https://www.opentable.com/le-gourmet-bistro",
    },
    {
      name: "The Golden Dragon",
      location: "Beijing, China",
      cuisine: "Chinese",
      priceRange: "$$",
      image: "/image/golden-dragon.jpg",
      reservationLink: "https://www.opentable.com/the-golden-dragon",
    },
    {
      name: "Bella Italia",
      location: "Rome, Italy",
      cuisine: "Italian",
      priceRange: "$$$",
      image: "/image/bella-italia.jpg",
      reservationLink: "https://www.opentable.com/bella-italia",
    },
    {
      name: "Spice Symphony",
      location: "Mumbai, India",
      cuisine: "Indian",
      priceRange: "$$",
      image: "/image/spice-symphony.jpg",
      reservationLink: "https://www.opentable.com/spice-symphony",
    },
  ];

  return (
    <div className="restaurants-page">
      <h1 className="restaurants-title">Restaurants</h1>
      <div className="restaurants-grid">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <div className="restaurant-info">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p className="restaurant-location">{restaurant.location}</p>
              <p className="restaurant-cuisine">
                Cuisine: {restaurant.cuisine}
              </p>
              <p className="restaurant-price-range">
                Price Range: {restaurant.priceRange}
              </p>
              <a
                href={restaurant.reservationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="restaurant-reserve-btn"
              >
                Reserve Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
