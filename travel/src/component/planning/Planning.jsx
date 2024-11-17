import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Import a location icon
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "./Planning.css";

const TripPlanner = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [place, setPlace] = useState('');
  const [places, setPlaces] = useState([]);
  const [tripType, setTripType] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const indianTouristPlaces = [
      'Taj Mahal, Agra',
      'Jaipur',
      'Goa',
      'Kashmir',
      'Kerala',
      'Leh-Ladakh',
      'Manali',
      'Rishikesh',
      'Mysore',
      'Darjeeling',
      'Andaman and Nicobar Islands',
      'Udaipur',
      'Varanasi'
    ];
    setPlaces(indianTouristPlaces);
  }, []);

  const handlePlaceChange = (e) => setPlace(e.target.value);
  const handleTripTypeChange = (e) => setTripType(e.target.value);

  const handleSubmit = () => {
    console.log("Planning a trip to:", place, "from", startDate, "to", endDate, "as a", tripType, "trip.");

    // Navigate to the /detail page with state data
    navigate('/detail', { state: { place, startDate, endDate, tripType } });
  };

  return (
    <div className="trip-planner">
      <h2>Plan a new trip</h2>

      <div>
        <label>Where to? </label>
        <div className="input-container">
          <input
            list="places"
            placeholder="e.g. Jaipur, Goa, Kashmir"
            value={place}
            onChange={handlePlaceChange}
          />
          <datalist id="places">
            {places.map((place, index) => (
              <option key={index} value={place} />
            ))}
          </datalist>
          <FaMapMarkerAlt className="location-icon" /> {/* Location icon next to the input */}
        </div>
      </div>

      <div className="date-picker-container">
        <label>Dates (optional)</label>
        <div className="date-range">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start date"
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            minDate={new Date()}
          />
          <span> to </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End date"
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            minDate={startDate || new Date()}
          />
        </div>
      </div>

      <div>
        <label>Trip Type</label>
        <select value={tripType} onChange={handleTripTypeChange}>
          <option value="" disabled>Select Trip Type</option>
          <option value="Friend">Friend</option>
          <option value="Family">Family</option>
          <option value="Couple">Couple</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Start planning</button>
      <a href="#">Or write a new guide</a>
    </div>
  );
};

export default TripPlanner;
