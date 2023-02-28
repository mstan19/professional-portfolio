import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectOnePic from "../assets/project1pic.png";
import projectTwoPic from "../assets/project2pic.png";
import projectThreePic from "../assets/project3pic.png";
import coziaPic from "../assets/coziaPic.png";
import jatePic from "../assets/jatePic.png";
import employeeTrackerPic from "../assets/employeeTrackerPic.png";
import gif1 from "../assets/gifs/project1.gif";
import gif2 from "../assets/gifs/project2.gif";
import gif3 from "../assets/gifs/project3.gif";
import coziaGif from "../assets/gifs/cozia.gif";
import jateGif from "../assets/gifs/jate.gif";
import employeeTrackerGif from "../assets/gifs/ET.gif";
import divider from "../assets/divider.png";
import { TbBrandGithub } from "react-icons/tb";
import { IoRocketSharp } from "react-icons/io5";

const Projects = () => {
	const projects = [
		{
			title: "Cozia",
			image: coziaPic,
			summary: "Developed a MERN stack apparel e-commerce application and will be deployed with AWS.",
			github: "https://github.com/mstan19/cozia",
			gif: coziaGif,
			deployLink: "https://youtu.be/yqWX86uT5jM"
		},
		{
			title: "ResuMade",
			image: projectThreePic,
			summary: "Directed an e-commerce MERN stack app that implemented the MVC paradigm to produce a formatted resume based on user’s information.",
			github: "https://github.com/mstan19/ResuMade",
			gif: gif3,
			deployLink: "https://resumade.herokuapp.com"
		},
		{
			title: "MeowWoof",
			image: projectOnePic,
			summary: "Created a RESTful API that followed a MVC paradigm, which is designed to help keeping track of animals in a pet shelter.",
			github: "https://github.com/mstan19/Project-MeowWoof",
			gif: gif1,
			deployLink: "https://sleepy-lake-64431.herokuapp.com/"
		},
		{
			title: "Turnip Fest",
			image: projectTwoPic,
			summary: "Built an interactive website that generates a recipe based on the user's special diet and music genre preferences.",
			github: "https://github.com/mstan19/TurnipFest",
			gif: gif2,
			deployLink: "https://yuyitax.github.io/TurnipFest/"
		},
		{
			title: "Jate",
			image: jatePic,
			summary: "Engineered a Progress Web Application text editor application that runs in the browser and offline.",
			github: "https://github.com/mstan19/text-editor-ms",
			gif: jateGif,
			deployLink: "https://jate-text-editor-ms.herokuapp.com"
		},
		{
			title: "Employee Tracker",
			image: employeeTrackerPic,
			summary: "Designed a company's employee database, where users can view and interact with the MySQL database.",
			github: "https://github.com/mstan19/employee-tracker-ms",
			gif: employeeTrackerGif,
		},
	]

	const imageBlock = (imageSrc) => {
		return <div className="w-full h-60 shadow-xl z-20">
			<img className="object-cover h-full w-full" src={imageSrc} alt="projectsImage" />
		</div>
	}

	const textBlock = (textSummary, textTitle, textGithub, textDeployLink) => {
		return <div className="sm:col-span-2 w-full h-60 z-10">
			<div className="relative px-6 py-3 font-bold text-black group h-full w-full block">
				<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-4 -translate-y-4 bg-neutral-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
				<span className="absolute inset-0 w-full h-full border-4 border-black">
					<div className="text-center text-slate-100 font-lg h-10 mt-3">{textTitle}</div>
					<div className="italic text-slate-100 text-center p-5">{textSummary}</div>
					<div className="flex justify-center">
						<Link to={textGithub} className="relative mr-6" target="_blank" rel="noreferrer" >
							<button className="border-2 border-slate-100 rounded-full bg-neutral-900 py-2 px-3.5 text-white shadow shadow-black/60"><TbBrandGithub /></button>
						</Link>
						{textTitle === "Employee Tracker" ? "" :
							<Link to={textDeployLink} className="relative" target="_blank" rel="noreferrer" >
								<button className="border-2 border-slate-100  rounded-full bg-neutral-900 py-2 px-3.5 text-white shadow shadow-black/60"><IoRocketSharp /></button>
							</Link>
						}

					</div>
				</span>
			</div>
		</div>
	}

	const [currentGif, setCurrentGif] = useState(gif1);
	const [currentTitle, setCurrentTitle] = useState();

	const renderGif = (selectedOption) => {
		console.log(selectedOption)
		setCurrentTitle(selectedOption)
	
		switch (selectedOption) {
			case "Cozia":
				setCurrentGif(coziaGif);
				return;
			case "MeowWoof":
				setCurrentGif(gif1);
				return;
			case "ResuMade":
				setCurrentGif(gif3);
				return;
			case "Jate":
				setCurrentGif(jateGif);
				return;
			case "Employee Tracker":
				setCurrentGif(employeeTrackerGif);
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
		<div className="relative z-0 bg-red-50 pb-36">

			{/* Container */}
			<div className="mx-8">
				<div className="2xl:w-[50%] w-[100%] h-10 2xl:h-20 text-center pt-4 mb-36">
					<h1 className="text-4xl">Projects</h1>
					<img className="mx-auto" src={divider} alt="divider" />
					<div className="text-xl hidden 2xl:block">Click on the project to get a sneek preview!</div>
				</div>

				{/* Projects */}
				{projects.map((project, index) => (
					<div className={`grid grid-rows-1 cursor-pointer mb-16 2xl:h-[40%] 2xl:w-[60%] ${index % 2 === 0 ? "" : "sm:ml-16"}`} key={index}>
						<div className={`w-full grid grid-cols-1 sm:grid-cols-3 `} onClick={() => renderGif(project.title)}>
							{index % 2 === 0 ? imageBlock(project.image) : textBlock(project.summary, project.title, project.technologies, project.github, project.deployLink)}
							{index % 2 === 0 ? textBlock(project.summary, project.title, project.github, project.deployLink) : imageBlock(project.image)}
						</div>
					</div>
				))}

				{/* Gif */}
				<div className="hidden 2xl:block 2xl:fixed top-20 right-0 h-full w-[50%]">
					<img className={`h-full w-full ${currentTitle === "Jate" || currentTitle === "Employee Tracker" ? "object-left-top object-cover" : "object-cover"}`} src={currentGif} alt="gif" />
				</div>
				<div className="hidden 2xl:block 2xl:fixed top-20 right-0 h-full w-[50%] bg-black opacity-40"></div>
			</div>
		</div>
	);
};
export default Projects;
