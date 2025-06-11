import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Book from "./components/book.jsx";
import Scan from "./components/scan.jsx";

import "./app.css";

function App() {
  return (
    <Router>
      <div
        style={{
          paddingTop: "70px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
