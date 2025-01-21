import React from "react";
import "./Header.css";

const Header = () => {

  const bg = "https://via.placeholder.com/1440x1024";

  return (
    <div className="outer-div" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay-div"></div>
    </div>
  );
};

export default Header;




