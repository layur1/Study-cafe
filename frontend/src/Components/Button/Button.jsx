import React, { useState } from "react";
import "./Button.css";

export const Button = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`navbar-button ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div className="navbar-button-text">{text}</div>
    </div>
  );
};