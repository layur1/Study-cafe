import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import Picture from "../Picture/Picture";
import Footer from "../../Components/Footer/Footer";

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Picture />
    <Footer />
  </div>
);

export default Home;