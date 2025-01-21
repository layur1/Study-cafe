import React from "react";
import logo  from "../../Components/Logo/logo.png";
import "./NavBar.css";
import { Button } from "../Button/Button";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Logo */}
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <div className="navbar-link">
            <div className="navbar-link-text">Home</div>
          </div>
          <div className="navbar-link">
            <div className="navbar-link-text">About Us</div>
          </div>
          <div className="navbar-link">
            <div className="navbar-link-text">Library</div>
          </div>
          <div className="navbar-link">
            <div className="navbar-link-text">Marketplace</div>
          </div>
        </div>

        {/* Button */}
        <div className="navbar-button-container">
          <Button text="Log in" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;


