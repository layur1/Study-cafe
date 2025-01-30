import React from "react";
import "./Picture.css";
import room1 from "../../Assets/room1.jpeg";
import room2 from "../../Assets/room2.jpeg";
import room3 from "../../Assets/room3.jpeg";
import room4 from "../../Assets/room4.jpeg";
import room5 from "../../Assets/room5.jpeg";
import room6 from "../../Assets/room6.jpeg";
import room7 from "../../Assets/room7.jpeg";
import restArea from "../../Assets/restArea.jpeg";

const Picture = () => {
  return (
    <div className="container">
      <div className="box">
        <img src={room1} alt="CSS" />
        <span>CSS</span>
      </div>
      <div className="box">
        <img src={room2} alt="Image" />
        <span>Image</span>
      </div>
      <div className="box">
        <img src={room3} alt="Group Study" />
        <span>Group Study</span>
      </div>
      <div className="box">
        <img src={room4} alt="Focus Area" />
        <span>Focus Area</span>
      </div>
      <div className="box">
        <img src={room5} alt="Quiet Zone" />
        <span>Quiet Zone</span>
      </div>
      <div className="box">
        <img src={room6} alt="Private Room" />
        <span>Private Room</span>
      </div>
      <div className="box">
        <img src={room7} alt="Meeting Space" />
        <span>Meeting Space</span>
      </div>
      <div className="box">
        <img src={restArea} alt="Rest Area" />
        <span>Rest Area</span>
      </div>
    </div>
  );
};

export default Picture;
