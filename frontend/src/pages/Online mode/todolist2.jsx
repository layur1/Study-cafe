import React from "react";
import "./DesignComponent.css";

const DesignComponent = () => {
  return (
    <div className="outer-container">
      {/* Inner background container */}
      <div className="background-container">
        <div className="background-overlay"></div>
      </div>

      {/* Icon container */}
      <div className="icon-container">
        <div className="icon-wrapper">
          <div className="icon-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default DesignComponent;
