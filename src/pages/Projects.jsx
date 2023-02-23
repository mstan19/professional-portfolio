import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectOnePic from "../assets/project1pic.png";
import projectTwoPic from "../assets/project2pic.png";
import projectThreePic from "../assets/resumade.png";

const Projects = () => {
	const projects = [
		{
			title: "MeowWoof",
			image: projectOnePic,
			summary: "blah blah blah blah blah blah",
			technologies: [
				"Node.js, ",
				"JQuery UI, ",
				"TailwindCSS/Bootstrap, ",
				"sendgrid, ",
				"Mysql, ",
				"Sequelize"
			],
			github: "https://github.com/mstan19/Project-MeowWoof",
			deployLink: "https://sleepy-lake-64431.herokuapp.com/"
		},
		{
			title: "Turnip Fest",
			image: projectTwoPic,
			summary: "blah blah blah blah blah blah",
			technologies: [
				"Sever-side API, ",
				"JQuery UI, ",
				"TailwindCSS ",
			],
			github: "https://github.com/mstan19/TurnipFest",
			deployLink: "https://yuyitax.github.io/TurnipFest/"
		},
		{
			title: "ResuMade",
			image: projectThreePic,
			summary: "blah blah blah blah blah blah",
			technologies: [
				"MERN stack",
			],
			github: "https://github.com/mstan19/ResuMade",
			deployLink: "https://resumade.herokuapp.com"
		},
		
		
	]

	const imageBlock = (imageSrc) => {
		return	<div className="w-full h-40 z-10">
					<img className="object-cover h-full w-full" src={imageSrc} alt="projectsImage" />
				</div>
	}
	const textBlock = 	<div className="sm:col-span-2 w-full h-40 z-10">
							{/* <div className="w-full h-full bg-red-300"></div> */}
							<Link to="/aboutme" className="relative px-6 py-3 font-bold text-black group h-full w-full block">
								<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-4 -translate-y-4 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
								<span className="relative">About Me</span>
							</Link>
						</div>			

	return (
		<div className="relative bg-red-100 pt-10 h-full">

			{/* Container */}
			<div className="m-7">
			{/* grid grid-cols-1 sm:grid-cols-2 */}
			
				{/* Projects */}
				{projects.map((project, index) => (
					<div className={`grid grid-rows-1 mb-16 sm:w-[60%] ${index % 2 === 0 ? "" : "sm:ml-16"}`} key={index}>
						{/* {index % 2 === 0 ?  */}
						<div className={`w-full grid grid-cols-1 sm:grid-cols-3 `}>
							{/* <div className="w-full h-32 z-10">
								<img className="object-cover h-full w-full" src={project.image} alt="projectsImage" />
							</div>
							<div className="sm:col-span-2 w-full h-32 ">
								<Link to="/aboutme" className="relative px-6 py-3 font-bold text-black group h-full w-full block">
									<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-4 -translate-y-4 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
									<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
									<span className="relative">About Me</span>
								</Link>
							</div> */}
							{index % 2 === 0 ? imageBlock(project.image) : textBlock}
							{index % 2 === 0 ? textBlock : imageBlock(project.image) }
						</div>



						{/* <div className="sm:flex sm:inline sm:my-20 space-y-36 sm:grid-cols-3">
							<div className="h-48 w-60 sm:grid-cols-1">
								<img className="relative object-cover sm:h-full h-[18rem] z-10" src={project.image} alt="projectsImage" />
							</div>
							<Link to="" className="relative w-[32rem] font-bold text-black group sm:col-span-2">
								<span className="absolute inset-0 sm:w-full sm:h-full w-[20rem] h-[20rem] transition duration-300 ease-out transform -translate-x-5 -translate-y-5 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="absolute inset-0 sm:w-full sm:h-full w-[20rem] h-[20rem] border-4 z-10 border-black"></span>
								<span className="relative">{project.title}</span>
							</Link>
						</div>  */}
							{/* :  */}
						{/* <div className="md:flex md:inline">
							<div className="h-48 w-60 ">
								<img className="relative object-cover h-full z-10" src={project.image} alt="projectOne" />
							</div>
							<Link to="" className="relative w-[32rem] font-bold text-black group ml-[8rem]">
								<span className="absolute inset-0 sm:w-full sm:h-full w-[20rem] h-[20rem] transition duration-300 ease-out transform -translate-x-5 -translate-y-5 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="absolute inset-0 sm:w-full sm:h-full w-[20rem] h-[20rem] border-4 z-10 border-black"></span>
								<span className="relative">{project.title}</span>
							</Link>
						</div> */}
						{/* } */}
					</div>
					))}

			{/* Gif */}
				{/* <div className="border-solid border-2 border-indigo-600"> */}
					<div className="fixed top-0 right-0 bg-blue-300 h-[60rem] w-[45rem] z-0"></div>
				{/* </div> */}

			</div>
		</div>
	);
};
			export default Projects;
