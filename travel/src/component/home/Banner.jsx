import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Banner.css';

const Banner = () => {
  useEffect(() => {
    // GSAP animation for the <h1> to come up
    gsap.fromTo(".BannerContainer h1", {
      opacity: 0, // Start with invisible
      y: 100, // Start 100px below its final position
    }, {
      opacity: 1, // End with visible
      y: 0, // End at its final position
      duration: 1.5, // Duration of the animation
      ease: "power3.out" // Easing for a smooth animation
    });

    gsap.fromTo(".BannerContainer p", {
      opacity: 0, // Start with invisible
      y: 50, // Start 50px below
    }, {
      opacity: 1, // End with visible
      y: 0, // End at its final position
      duration: 1.5,
      delay: 0.5, // Delay the paragraph animation slightly
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="BannerContainer">
      <div className="leftSide">
        <h1>Journify</h1>
        <p>Your Travel Companion. Get a whole getaway’s worth of ideas made for you—ready in seconds.</p>

        {/* Buttons below the text */}
        <div className="buttonContainer  btns">
          <Link to="/sign-up"> {/* Link to the sign-up page */}
            <button className='b11'>Get Started</button>
          </Link>
          <button className='b11 b12'>Learn More</button>
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default Banner;
