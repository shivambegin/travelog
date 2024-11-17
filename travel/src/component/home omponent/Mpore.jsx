// MoreToExplore.js
import React, { useRef } from 'react';
import { gsap } from 'gsap';


const MoreToExplore = () => {
  const categories = [
    { title: "7 Bangkok hotels that highlight Thailand's spectacular architecture", image: "./image/bangkok.jpg" },
    { title: "3 days in Tokyo: The perfect itinerary", image: "./image/tokoyo.jpg" },
    { title: "Where Bali’s best chefs go on their days off", image: "./image/bali.jpg" },
    { title: "Discover the charm of Kyoto's traditional inns", image: "./image/phuket.jpg" },
  ];

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300; // adjust scroll distance
    const timeline = gsap.timeline();
    if (direction === "left") {
      timeline.to(scrollRef.current, { scrollLeft: scrollRef.current.scrollLeft - scrollAmount, duration: 0.5, ease: "power2.out" });
    } else {
      timeline.to(scrollRef.current, { scrollLeft: scrollRef.current.scrollLeft + scrollAmount, duration: 0.5, ease: "power2.out" });
    }
  };

  return (
    <div className="more-to-explore-container">
      <h2>More to explore</h2>
      <div className="scroll-button left" onClick={() => handleScroll("left")}>←</div>
      <div className="card-container" ref={scrollRef}>
        {categories.map((category, index) => (
          <div key={index} className="card">
            <img src={category.image} alt={category.title} className="card-image" />
            <div className="favorite-icon">♡</div>
            <p className="card-title">{category.title}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MoreToExplore;
