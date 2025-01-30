import React from "react";
import "./Hero.css";
import heroimage from "../../assets/heroimage.jpg";

const Hero = () => {
  return (
    <div className="hero-image-container">
      <img className="hero-image" src={heroimage} alt="Background image of a cozy and creative space" />
      <div className="hero-overlay" />
      <header>
        <div className="title">Brew and Brain</div>
        <p className="description">
          At Brew and Brain, we believe in creating the perfect blend of productivity and relaxation. 
          Whether you're diving into your studies, brainstorming your next big idea, or simply taking a moment to unwind 
          with a cup of coffee, this is your space. From cozy nooks to inspiring vibes, it’s a place where you can do anything—or just do nothing. 
          The choice is yours!
        </p>
        <a href="#" className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Explore Now
        </a>
      </header>
    </div>
  );
};

export default Hero;
