import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added react-router-dom imports
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To track current route

  // Get current selected item based on route
  const getCurrentPage = () => {
    switch(location.pathname) {
      case '/book':
        return "Book";
      case '/online-mode':
        return "Online Mode";
      case '/about-us':
        return "About Us";
      case '/':
      default:
        return "Home";
    }
  };

  const [selectedItem, setSelectedItem] = useState(getCurrentPage);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update selected item when route changes
  useEffect(() => {
    setSelectedItem(getCurrentPage());
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`outer-div ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="inner-flex">
        {/* Logo links to home */}
        <Link to="/" className="image-container">
          <img className="image" src={logo} alt="Logo" />
        </Link>

        {/* Hamburger menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation items */}
        <div className={`text-container ${isMenuOpen ? "open" : ""}`}>
          <Link 
            to="/"
            className={`text-item ${selectedItem === "Home" ? "selected" : ""}`}
            onClick={() => {
              setSelectedItem("Home");
              setIsMenuOpen(false);
            }}
          >
            <div className="text-content">Home</div>
          </Link>

          <Link 
            to="/book"
            className={`text-item ${selectedItem === "Book" ? "selected" : ""}`}
            onClick={() => {
              setSelectedItem("Book");
              setIsMenuOpen(false);
            }}
          >
            <div className="text-content">Book</div>
          </Link>

          <Link 
            to="/online-mode"
            className={`text-item ${selectedItem === "Online Mode" ? "selected" : ""}`}
            onClick={() => {
              setSelectedItem("Online Mode");
              setIsMenuOpen(false);
            }}
          >
            <div className="text-content">Online Mode</div>
          </Link>

          <Link 
            to="/about-us"
            className={`text-item ${selectedItem === "About Us" ? "selected" : ""}`}
            onClick={() => {
              setSelectedItem("About Us");
              setIsMenuOpen(false);
            }}
          >
            <div className="text-content">About Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;