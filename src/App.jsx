// App.jsx or index.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Adjust path as needed
import Home from "./Pages/Home/Home";      // Create these components
import Book from "./Pages/Book/Book";
import OnlineMode from "./pages/OnlineMode/OnlineMode";
import AboutUs from "./Pages/AboutUs/AboutUs"
import ExploreNow from "./Pages/ExploreNow/ExploreNow";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/online-mode" element={<OnlineMode />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ExploreNow" element={<ExploreNow/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;