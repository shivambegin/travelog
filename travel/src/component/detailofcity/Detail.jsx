import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailPage = () => {
  // Map configuration
  const center = {
    lat: 26.9124, // Latitude of Jaipur
    lng: 75.7873, // Longitude of Jaipur
  };

  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3 col-lg-2 p-4 bg-light shadow-sm">
          <h4 className="text-center mb-4">Navigation</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                href="#overview"
                className="nav-link"
                onClick={() => handleTabClick("overview")}
              >
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#itinerary"
                className="nav-link"
                onClick={() => handleTabClick("itinerary")}
              >
                Itinerary
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#details"
                className="nav-link"
                onClick={() => handleTabClick("details")}
              >
                Details
              </a>
            </li>
            <li className="nav-item">
              <a href="#map" className="nav-link">
                Map
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          {/* Hero Image and Map on the Right */}
          <div className="row">
            <div className="col-md-7">
              {/* Hero Image */}
              <div className="text-center mb-4">
                <img
                  src="/image/jaipur2.jpg"
                  alt="Jaipur"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ width: "100%", maxWidth: "500px" }} // Limiting image size
                />
              </div>
            </div>

            <div className="col-md-5">
              {/* Map Section */}
              <section id="map" className="mb-4">
                <h3 className="text-center">Map</h3>
                <MapContainer
                  center={center}
                  zoom={13}
                  style={{ height: "300px", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={center}>
                    <Popup>Jaipur: The Pink City!</Popup>
                  </Marker>
                </MapContainer>
              </section>
            </div>
          </div>

          {/* Explore Carousel Section */}
          <section id="explore" className="mb-4">
            <h3>Explore Jaipur</h3>
            <Carousel>
              {[
                "/image/snorkerling.jpg",
                "/image/phuket.jpg",
                "/image/delta..jpg",
                "/image/tokoyo.jpg",
                "/image/emirates.jpg",
                "/image/kyoto.jpg",
                "/image/santorini.jpg",
              ].map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={src}
                    alt={`Slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </section>

          {/* Itinerary Section */}
          <section id="itinerary" className="mb-4">
            <h3>Itinerary</h3>
            <div className="accordion" id="itineraryAccordion">
              {Array.from({ length: 10 }).map((_, i) => (
                <div className="accordion-item" key={`day-${i + 1}`}>
                  <h2 className="accordion-header" id={`heading-${i + 1}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${i + 1}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${i + 1}`}
                    >
                      Day {i + 1}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${i + 1}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${i + 1}`}
                    data-bs-parent="#itineraryAccordion"
                  >
                    <div className="accordion-body">
                      Details and plans for Day {i + 1}...
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Details Section */}
          <section id="details" className="mb-4">
            <h3>Details</h3>
            <p>
              Jaipur offers a fascinating blend of royal heritage, stunning architecture, and vibrant cultural experiences. Explore colorful bazaars, traditional crafts, and warm hospitality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
