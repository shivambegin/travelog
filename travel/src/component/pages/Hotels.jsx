import React from 'react';
import './Hotels.css';

const Hotels = () => {
  const hotels = [
    {
      name: "The Grand Plaza",
      location: "New York, USA",
      price: "$250/night",
      image: "/image/resort2.jpg",
      bookingLink: "https://www.booking.com/hotel/in/the-moustache-jaipur.html?aid=304142&label=gen173nr-1FCBkoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Atu83rkGwAIB0gIkNmNkZjI5NjktNjlkOC00MTc2LWI3MjctMTNjMzQ0ZjU5NTM52AIF4AIB&sid=acf73b66abd6b2b2bb388c82a9c1d6d3&all_sr_blocks=129685703_298943214_2_1_0&checkin=2024-11-16&checkout=2024-12-18&dest_id=-2098033&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=18&highlighted_blocks=129685703_298943214_2_1_0&hpos=18&matching_block_id=129685703_298943214_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=129685703_298943214_2_1_0__16322624&srepoch=1731698297&srpvid=af4087b643c90200&type=total&ucfs=1&", // Actual hotel page on Booking.com
    },
    {
      name: "Ocean View Resort",
      location: "Maldives",
      price: "$500/night",
      image: "/image/resort1.jpg",
      bookingLink: "https://www.booking.com/hotel/in/the-moustache-jaipur.html?aid=304142&label=gen173nr-1FCBkoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Atu83rkGwAIB0gIkNmNkZjI5NjktNjlkOC00MTc2LWI3MjctMTNjMzQ0ZjU5NTM52AIF4AIB&sid=acf73b66abd6b2b2bb388c82a9c1d6d3&all_sr_blocks=129685703_298943214_2_1_0&checkin=2024-11-16&checkout=2024-12-18&dest_id=-2098033&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=18&highlighted_blocks=129685703_298943214_2_1_0&hpos=18&matching_block_id=129685703_298943214_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=129685703_298943214_2_1_0__16322624&srepoch=1731698297&srpvid=af4087b643c90200&type=total&ucfs=1&", // Actual hotel page on Booking.com
    },
    {
      name: "Mountain Escape",
      location: "Swiss Alps",
      price: "$400/night",
      image: "/image/resort3.jpg",
      bookingLink: "https://www.booking.com/hotel/in/the-moustache-jaipur.html?aid=304142&label=gen173nr-1FCBkoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Atu83rkGwAIB0gIkNmNkZjI5NjktNjlkOC00MTc2LWI3MjctMTNjMzQ0ZjU5NTM52AIF4AIB&sid=acf73b66abd6b2b2bb388c82a9c1d6d3&all_sr_blocks=129685703_298943214_2_1_0&checkin=2024-11-16&checkout=2024-12-18&dest_id=-2098033&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=18&highlighted_blocks=129685703_298943214_2_1_0&hpos=18&matching_block_id=129685703_298943214_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=129685703_298943214_2_1_0__16322624&srepoch=1731698297&srpvid=af4087b643c90200&type=total&ucfs=1&", // Actual hotel page on Booking.com
    },
  ];

  return (
    <div className="hotels-page">
      <h1 className="hotels-title">Hotels</h1>
      <div className="hotels-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-price">{hotel.price}</p>
              <a
                href={hotel.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-book-btn"
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

export default Hotels;
