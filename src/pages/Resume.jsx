import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import divider from "../assets/divider.png";
import pic from "./../assets/cherrybloosom.jpeg";
import projectPic from "./../assets/projectPic.jpg";
import gradCap from "./../assets/gradCap.jpg";
import experiencePic from "./../assets/experiencePic.jpg";
import { TfiDownload } from "react-icons/tfi";
import pdf from "./../assets/resume.pdf";
import bootcampCertificate from "./../assets/bootcampCertificate.pdf";
import skillsPic from "./../assets/typewriterPic.jpg";



const Resume = () => {

	return (
		<div className="bg-red-50 pb-48">
			<div className="text-center">
				<h1 className="text-4xl pt-4">Resumé</h1>
				<img className="mx-auto" src={divider} alt="divider" />
				<p className="italic mb-8 m-4">
					Ambitious Full Stack Web Developer with an extensive background in psychology and basic medical knowledge who has experience building multiple full-stack applications. Enjoys coding web-based applications and has hands-on experience with front-end and back-end. Looking for a fast-paced environment with the goal to become Lead Dev.
				</p>
			</div>

			<main className="grid grid-cols-1 gap-4 md:grid-cols-3 container mx-auto">
				{/* Download Resume */}
				<section className="bg-neutral-800 h-52 md:h-56 cursor-pointer flex justify-center">
					<Link to={pdf} download="Melissa Stan Resume" target="_blank" rel="noreferrer" >
						<div className="text-white text-3xl flex justify-center pt-12"><TfiDownload /></div>
						<div className="text-white text-3xl flex justify-center pt-10">Download Resumé</div>
						<span className="relative text-white"></span>
					</Link>

				</section>

				{/* Projects */}
				<section className="h-[34rem] md:col-span-2 row-span-2 md:h-[34rem] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
					<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={projectPic} alt="projects" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 className="text-3xl font-bold text-white mb-5">Projects</h1>
						<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-5">Cozia: Developed a MERN stack apparel e-commerce application.</p>
						<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-5">ResuMade: Directed an e-commerce MERN stack app that implemented the MVC paradigm to produce a formatted resume based on users information. </p>
						<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-5">MeowWoof: Created a RESTful API that followed a MVC paradigm, which is designed to help keeping track of animals in a pet shelter.</p>
						<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-">TurnipFest: Built an interactive website that generates a recipe based on the user's special diet preferences and choosing music genres.</p>

						<button className="border-2 border-slate-100 rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
							<Link to="/projects" className="">
								<div>See More</div>
							</Link>
						</button>
					</div>
				</section>

				{/* Skills */}
				<section className="h-[20rem] md:row-span-2 md:h-[40rem]
				group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
					<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={skillsPic} alt="skills" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 className="text-3xl font-bold text-white mb-10">Skills</h1>
						<div className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><div className="underline underline-offset-1">LANGUAGES:</div> HTML5, CSS3, JavaScript (ES6), MySQL, NoSQL, GraphQL, jQuery</div>
						<div className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><div className="underline underline-offset-1">FRAMEWORKS:</div>CSS Frameworks, Express, Sequelize, MongoDB and Mongoose, Apollo, React, APIs, Agile Methodology, Github, and Deployment (AWS, Heroku)</div>
					</div>
				</section>
				{/* Education */}
				<section className="h-[20rem] md:h-80 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
					<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={gradCap} alt="education" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 className="text-3xl font-bold text-white mb-8">Education</h1>
						<p className="mb-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-2">Certificate in Full Stack Web Development: Georgia Institute of Technology</p>
						<p className="mb-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">BS in Psychology and Minor in Biological Science degree with research distinction: Georgia State University</p>

						<div className="flex inline">
							<button className="flex inline border-2 border-slate-100 rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60"><Link to={bootcampCertificate} download="Melissa Stan Certificate" target="_blank" rel="noreferrer">Certificate</Link></button>
						</div>

					</div>
					Education
				</section>

				{/* Experience */}
				<section className="h-[20rem] md:h-80 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
					<img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={experiencePic} alt="experience" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 className="text-3xl font-bold text-white mb-10">Experience</h1>
						<p className="mb-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-2">Medical Assistant at Gadlage and Associates Clinic, Atlanta, GA</p>
						<p className="mb-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Medical Assistant at Test4Free Clinic, Atlanta, GA</p>
						<p className="mb-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pt-2">Certified Nursing Assistant at Christian Home, Loganville, GA</p>
					</div>
					Experience
				</section>


			</main>
		</div>
	);
};
export default Resume;
