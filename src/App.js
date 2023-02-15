import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
     <Router>
          <div className="page-container">
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/aboutme" element={<AboutMe />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
