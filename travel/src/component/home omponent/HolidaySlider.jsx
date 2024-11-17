import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  // Make sure this import is correct
import "slick-carousel/slick/slick-theme.css";  // Ensure this is correctly imported
import React from "react";
import "./HolidaySlider.css";


// Import images for the slider



const destinations = [
    { image: '/public/images/a.jpg', name: "Kuala Lumpur, Malaysia" },
    { image: '/public/images/a.jpg', name: "Hanoi, Vietnam" },
    { image: '/public/images/a.jpg', name: "Ho Chi Minh City, Vietnam" },
    { image: '/public/images/a.jpg', name: "Jakarta, Indonesia" },
];

// Custom arrows for the slider
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-arrow next" onClick={onClick}>
            ➔
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            ←
        </div>
    );
}

const HolidaySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="holiday-slider">
            <h2>Top destinations for your next holiday</h2>
            <p>Here's where your fellow travelers are headed</p>
            <Slider {...settings}>
                {destinations.map((destination, index) => (
                    <div key={index} className="slider-item">
                        <img src={destination.image} alt={destination.name} className="slider-image" />
                        <div className="slider-caption">
                            <h3>{destination.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HolidaySlider;
