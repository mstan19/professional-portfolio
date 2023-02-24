import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "./../assets/profilepic.JPG";
import gradPic from "./../assets/gradpic.jpg";

const AboutMe = () => {

	return (
		<div className="aboutme-page bg-red-50">
			{/* Card */}
			<div className="card">
				<div className="imgBox">
					<img className="" src={profilePic} alt="profilePic"></img>
					<img className="" src={gradPic} alt="profilePic"></img>
				</div>
				<div className="details">
					<div className="content">
						<h2>Melissa Stan</h2>
						<span>Full Stack Web Developer</span>
						<div className="social-icons">actual content</div>
					</div>
				</div>

			</div>
		</div>
	);
};
export default AboutMe;