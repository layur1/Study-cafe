import React from "react";
import "./NavigationBar.css";
import logo  from "../../Components/Logo/logo.png";

const App = () => {
  return (
    <div className="outer-div">
      <div className="inner-flex">
        <div className="image-container">
          <img
            className="image" src={logo} alt="Logo"
            
          />
        </div>
        <div className="text-container">
          <div className="text-item">
            <div className="text-content">Sample</div>
          </div>
          <div className="text-item">
            <div className="text-content">Sample</div>
          </div>
          <div className="text-item">
            <div className="text-content">Sample</div>
          </div>
          <div className="text-item">
            <div className="text-content">Sample</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
