import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "./../assets/profilepic.JPG";
import gradPic from "./../assets/gradpic.jpg";
import divider from "../assets/divider.png";
import pic from "./../assets/cherrybloosom.jpeg";


const AboutMe = () => {

	return (
		<div className="bg-red-50">

			<h1 className="text-4xl font-normal text-center pt-4">About Me</h1>
			<img className="mx-auto mb-10" src={divider} alt="divider"/>			
			<div className="aboutme-page">
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
		</div>
	);
};
export default AboutMe;