import React from 'react';
import './Holidays.css';

const Holidays = () => {
  const holidays = [
    {
      destination: "Bali, Indonesia",
      description: "Experience the serene beaches and vibrant culture of Bali.",
      price: "$1,200 per person",
      image: "/image/bali1.jpg",
      bookingLink: "https://www.expedia.com/Bali.d602651.Holiday-Packages",
    },
    {
      destination: "Santorini, Greece",
      description: "Enjoy stunning sunsets and whitewashed villages by the Aegean Sea.",
      price: "$1,800 per person",
      image: "/image/santorini.jpg",
      bookingLink: "https://www.expedia.com/Santorini.d182113.Holiday-Packages",
    },
    {
      destination: "Kyoto, Japan",
      description: "Discover the traditional beauty and cultural heritage of Kyoto.",
      price: "$1,500 per person",
      image: "/image/kyoto.jpg",
      bookingLink: "https://www.expedia.com/Kyoto.d6131486.Holiday-Packages",
    },
    {
      destination: "Maldives",
      description: "Relax in overwater villas and crystal-clear lagoons.",
      price: "$2,200 per person",
      image: "/image/maldives1.jpg",
      bookingLink: "https://www.expedia.com/Maldives.d109.Holiday-Packages",
    },
  ];

  return (
    <div className="holidays-page">
      <h1 className="holidays-title">Holidays</h1>
      <div className="holidays-grid">
        {holidays.map((holiday, index) => (
          <div className="holiday-card" key={index}>
            <img
              src={holiday.image}
              alt={holiday.destination}
              className="holiday-image"
            />
            <div className="holiday-info">
              <h2 className="holiday-destination">{holiday.destination}</h2>
              <p className="holiday-description">{holiday.description}</p>
              <p className="holiday-price">{holiday.price}</p>
              <a
                href={holiday.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="holiday-book-btn"
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

export default Holidays;
