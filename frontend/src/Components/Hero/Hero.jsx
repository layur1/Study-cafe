import React from 'react';
import NavBar from '../NavBar/NavBar';
import bg from '../../assets/bg.png';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="reading-room-container">
        {/* Background Image with Overlay */}
        <div className="background-container">
          <img className="background-image" src={bg} alt="Background" />
          <div className="background-overlay"></div>
        </div>

        {/* Content Section */}
        <div className="content-container">
          <h1 className="reading-room-title">Layuri’s Reading Room</h1>
          <p className="reading-room-description">
            A reading room is a quiet, dedicated space designed for studying,
            reading, or working. It typically features comfortable seating,
            well-lit desks, shelves of books, and minimal distractions to create a
            conducive environment for focused activities. Reading rooms can be
            found in libraries, schools, universities, or private spaces, and
            they often emphasize tranquility and comfort to encourage
            concentration.
          </p>
          <div className="button-container">
            <button className="login-button">Log in</button>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero