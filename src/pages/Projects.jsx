import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectOnePic from "../assets/project1pic.png";
import projectTwoPic from "../assets/project2pic.png";
import projectThreePic from "../assets/project3pic.png";
import gif1 from "../assets/gifs/project1.gif";
import gif2 from "../assets/gifs/project2.gif";
import gif3 from "../assets/gifs/project3.gif";
import divider from "../assets/divider.png";


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
			gif: gif1,
			deployLink: "https://sleepy-lake-64431.herokuapp.com/"
		},
		{
			title: "ResuMade",
			image: projectThreePic,
			summary: "blah blah blah blah blah blah",
			technologies: [
				"MERN stack",
			],
			github: "https://github.com/mstan19/ResuMade",
			gif: gif3,
			deployLink: "https://resumade.herokuapp.com"
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
			gif: gif2,
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
			gif: gif1,
			deployLink: "https://resumade.herokuapp.com"
		},
		{
			title: "ResuMade",
			image: projectThreePic,
			summary: "blah blah blah blah blah blah",
			technologies: [
				"MERN stack",
			],
			github: "https://github.com/mstan19/ResuMade",
			gif: gif1,
			deployLink: "https://resumade.herokuapp.com"
		},
		
	]

	const imageBlock = (imageSrc) => {
		return	<div className="w-full h-52  z-20">
					<img className="object-cover h-full w-full" src={imageSrc} alt="projectsImage" />
				</div>
	}
	// (project.summary, project.title, project.technologies, project.github, project.deployLink)
	const textBlock =(textSummary, title, tech, github, deployLink) => {
		return <div className="sm:col-span-2 w-full h-52 z-10">
				<div className="relative px-6 py-3 font-bold text-black group h-full w-full block">
					<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-4 -translate-y-4 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
					<span className="absolute inset-0 w-full h-full border-4 border-black"></span>
					<div className="relative">{title}</div>
					<div className="relative">{textSummary}</div>
					<div className="relative">{tech}</div>
					<div className="relative">{github}</div>
					<div className="relative">{deployLink}</div>


				</div>
			</div>	
	} 	
	
	const [currentGif, setCurrentGif] = useState(gif1);

	const renderGif = (selectedOption) => {
		console.log(selectedOption)
		// setTitle(selectedOption)

		switch (selectedOption) {
			case "MeowWoof":
				setCurrentGif(gif1);
				return;
			case "ResuMade":
				setCurrentGif(gif3);
				return;
			case "Turnip Fest":
				setCurrentGif(gif2);
				return;
			
			default:
				setCurrentGif(gif1);
				return;
		}
	};

	return (
		<div className="relative h-full z-0 bg-red-50">

			{/* Container */}
			<div className="mx-8">
				<div className="xl:w-[50%] w-[100%] h-14 text-center pt-4 mb-36">
					<h1 className="text-4xl">Projects</h1>
					<img className="mx-auto" src={divider} alt="divider"/>
				</div>
				
				{/* Projects */}
				{projects.map((project, index) => (
				<div className={`grid grid-rows-1 cursor-pointer mb-16 xl:h-[40%] xl:w-[60%] ${index % 2 === 0 ? "" : "sm:ml-16"}`} key={index}>
					<div className={`w-full grid grid-cols-1 sm:grid-cols-3 `} onClick={() => renderGif(project.title)}>
						{index % 2 === 0 ? imageBlock(project.image) : textBlock(project.summary, project.title, project.technologies, project.github, project.deployLink)}
						{index % 2 === 0 ? textBlock(project.summary, project.title, project.technologies, project.github, project.deployLink) : imageBlock(project.image) }
					</div>
				</div>
				))}

			{/* Gif */}
				<div className="hidden xl:block xl:fixed top-20 right-0 h-full w-[50%]">
					<img className="object-cover h-full w-full" src={currentGif} alt="gif"/>
				</div>
				<div className="hidden xl:block xl:fixed top-20 right-0 h-full w-[50%] bg-black opacity-40"></div>
			</div>
		</div>
	);
};
			export default Projects;
