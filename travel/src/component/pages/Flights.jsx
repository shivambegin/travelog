import React from 'react';
import './Flights.css';

const Flights = () => {
  const flights = [
    {
      airline: "Emirates",
      origin: "New York (JFK)",
      destination: "Dubai (DXB)",
      price: "$1,200",
      image: "/image/emirates.jpg",
      bookingLink: "https://www.emirates.com/",
    },
    {
      airline: "Qatar Airways",
      origin: "London (LHR)",
      destination: "Doha (DOH)",
      price: "$900",
      image: "/image/qatar.jpg",
      bookingLink: "https://www.qatarairways.com/",
    },
    {
      airline: "Singapore Airlines",
      origin: "San Francisco (SFO)",
      destination: "Singapore (SIN)",
      price: "$1,500",
      image: "/image/singapore.jpg",
      bookingLink: "https://www.singaporeair.com/",
    },
    {
      airline: "Delta Airlines",
      origin: "Los Angeles (LAX)",
      destination: "Tokyo (NRT)",
      price: "$1,000",
      image: "/image/delta..jpg",
      bookingLink: "https://www.delta.com/",
    },
  ];

  return (
    <div className="flights-page">
      <h1 className="flights-title">Flights</h1>
      <div className="flights-grid">
        {flights.map((flight, index) => (
          <div className="flight-card" key={index}>
            <img
              src={flight.image}
              alt={flight.airline}
              className="flight-image"
            />
            <div className="flight-info">
              <h2 className="flight-airline">{flight.airline}</h2>
              <p className="flight-route">
                {flight.origin} → {flight.destination}
              </p>
              <p className="flight-price">Price: {flight.price}</p>
              <a
                href={flight.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flight-book-btn"
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

export default Flights;
