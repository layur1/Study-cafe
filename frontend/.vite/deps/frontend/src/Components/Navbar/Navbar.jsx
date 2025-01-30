import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle the menu toggle

  // Detect scroll to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected item on click
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  return (
    <div className={`outer-div ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="inner-flex">
        {/* Logo on the left */}
        <div className="image-container">
          <img className="image" src={logo} alt="Logo" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Centered menu items */}
        <div className={`text-container ${isMenuOpen ? "open" : ""}`}>
          {["Home", "Book", "Online Mode", "About Us"].map((item) => (
            <div
              key={item}
              className={`text-item ${selectedItem === item ? "selected" : ""}`}
              onClick={() => {
                handleItemClick(item);
                setIsMenuOpen(false); // Close menu after item click
              }}
            >
              <div className="text-content">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;