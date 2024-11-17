import React from 'react';
import './ThingsToDo.css';

const ThingsToDo = () => {
  const activities = [
    {
      name: "Snorkeling in Maldives",
      location: "Maldives",
      price: "$120/person",
      image: "/image/snorkerling.jpg",
      bookingLink: "https://www.booking.com/explore/snorkeling-maldives.html",
    },
    {
      name: "Eiffel Tower Tour",
      location: "Paris, France",
      price: "$50/person",
      image: "/image/eiffel-tower.jpg",
      bookingLink: "https://www.booking.com/explore/eiffel-tower-tour.html",
    },
    {
      name: "Hot Air Balloon Ride",
      location: "Cappadocia, Turkey",
      price: "$200/person",
      image: "/image/hot-air-balloon.jpg",
      bookingLink: "https://www.booking.com/explore/hot-air-balloon-cappadocia.html",
    },
    {
      name: "Safari Adventure",
      location: "Kenya",
      price: "$300/person",
      image: "/image/safari.jpg",
      bookingLink: "https://www.booking.com/explore/safari-kenya.html",
    },
  ];

  return (
    <div className="things-to-do-page">
      <h1 className="things-to-do-title">Things to Do</h1>
      <div className="things-to-do-grid">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <img src={activity.image} alt={activity.name} className="activity-image" />
            <div className="activity-info">
              <h2 className="activity-name">{activity.name}</h2>
              <p className="activity-location">{activity.location}</p>
              <p className="activity-price">{activity.price}</p>
              <a
                href={activity.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="activity-book-btn"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
