import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="page-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/aboutme" element={<AboutMe />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
