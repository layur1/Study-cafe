import React from "react";
import "./ExploreNow.css";
import Footer from "../../Components/Footer/Footer";
// Placeholder imports - replace with your actual image paths
import room1 from "../../Assets/room1.jpeg"; // Quiet Zone
import room2 from "../../Assets/room2.jpeg"; // Coffee Bar
import room3 from "../../Assets/room3.jpeg"; // Study Nook
import room4 from "../../Assets/room4.jpeg"; // Wi-Fi Zone
import room5 from "../../Assets/room5.jpeg"; // Group Area

const ExploreNow = () => {
  return (
    <div className="explore-now-container">
      <h1 className="explore-title">Explore Brew and Brain</h1>
      <div className="gallery">
        <figure className="gallery-card">
          <img src={room1} alt="Quiet Zone" className="card-image" />
          <figcaption>
            Quiet Zone: <strong>Focus Haven</strong>
          </figcaption>
        </figure>

        <figure className="gallery-card">
          <img src={room2} alt="Coffee Bar" className="card-image" />
          <figcaption>
            Coffee Bar: <strong>Brew Bliss</strong>
          </figcaption>
        </figure>

        <figure className="gallery-card">
          <img src={room3} alt="Study Nook" className="card-image" />
          <figcaption>
            Study Nook: <strong>Cozy Corner</strong>
          </figcaption>
        </figure>

        <figure className="gallery-card">
          <img src={room4} alt="Wi-Fi Zone" className="card-image" />
          <figcaption>
            Wi-Fi Zone: <strong>Fast Track</strong>
          </figcaption>
        </figure>

        <figure className="gallery-card">
          <img src={room5} alt="Group Area" className="card-image" />
          <figcaption>
            Group Area: <strong>Team Space</strong>
          </figcaption>
        </figure>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreNow;