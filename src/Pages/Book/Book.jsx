import React, { useState, useEffect } from 'react';
import './Book.css';
//import Footer from '../../Components/Footer/Footer';
const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studyArea: '',
    timeSpent: '',
    date: '',
    time: ''
  });

  const [price, setPrice] = useState(0); // State to store calculated price

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Effect to calculate price whenever timeSpent changes
  useEffect(() => {
    if (formData.timeSpent) {
      const calculatedPrice = formData.timeSpent * 5; // Assume $5 per hour
      setPrice(calculatedPrice);
    }
  }, [formData.timeSpent]); // Only trigger when timeSpent changes

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation Submitted! Total Price: $${price}`);
    setFormData({
      name: '',
      email: '',
      studyArea: '',
      timeSpent: '',
      date: '',
      time: ''
    });
    setPrice(0); // Reset price after submission
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Reserve Your Spot at Brew and Brain</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="booking-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="booking-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <select
          name="studyArea"
          className="booking-input"
          value={formData.studyArea}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Study Area</option>
          <option value="Area1">Study Area 1</option>
          <option value="Area2">Study Area 2</option>
          <option value="Area3">Study Area 3</option>
          <option value="Area4">Study Area 4</option>
          <option value="Area5">Study Area 5</option>
          <option value="Area6">Study Area 6</option>
          <option value="Area7">Study Area 7</option>
        </select>

        <input
          type="number"
          name="timeSpent"
          placeholder="Time (hours)"
          className="booking-input"
          value={formData.timeSpent}
          onChange={handleChange}
          min="1"
          max="12"
          required
        />

        <div className="form-group">
          <input
            type="date"
            name="date"
            className="booking-input"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            className="booking-input"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price Display */}
        {formData.timeSpent && (
          <div className="price-display">
            <p>Total Price: ${price}</p>
          </div>
        )}

        <button type="submit" className="booking-button">
          Confirm Reservation
        </button>
      </form>
     
    </div>
  );
};

export default Book;