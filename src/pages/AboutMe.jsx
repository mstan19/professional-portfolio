import React from "react";
import { Link } from "react-router-dom";
import profilePic from "./../assets/profilePic.JPG";
import gradPic from "./../assets/gradpic.jpg";
import divider from "../assets/divider.png";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";


const AboutMe = () => {
	const icons = [
		{
			name: "github",
			link: "https://github.com/mstan19",
			icon: <BsGithub />,
		},
		{
			name: "linkedin",
			link: "https://www.linkedin.com/in/melissa-stan-a67008240",
			icon: <CiLinkedin />,
		},
	]

	const book = () => {
	return <div className="details">
				<div className="content flex flex-col justify-center text-center">
					<h2 className="text-2xl">Melissa Stan</h2>
					<div className="pt-5 italic">Full Stack Web Developer</div>
					{/* icons */}
					<ul className="p-2 flex justify-between">
						{icons.map((icon) => (
							<Link
								className="inline-block px-1.5"
								key={icon.link}
								to={icon.link}
								target="_blank"
								rel="noreferrer"
							>
								<span className="text-2xl text-gray-800 hover:text-gray-400">{icon.icon}</span>
							</Link>
						))}
					</ul>
				</div>
			</div>
	}

	return (
		<div className="bg-red-50 min-h-full">

			<h1 className="text-4xl font-normal text-center pt-4">About Me</h1>
			<img className="mx-auto mb-10" src={divider} alt="divider" />
		
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="m-4 md:m-10 text-xl">
					Hi, my name is Melissa. Welcome to my Portfolio!<br/><br/>Brief synopsis about me: I am an ambitious Full Stack Web Developer with an extensive background in psychology and basic medical knowledge who has experience building multiple full-stack applications. I enjoy coding web-based applications and has hands-on experience with front-end and back-end. Looking for a fast-paced environment with the goal to become Lead Dev.
					
					<div className="mt-10">Here are a few technologies I have been working with recently:</div>
					<ul className="grid grid-cols-1 md:grid-cols-2 list-disc list-inside m-5">
						<li>React</li>
						<li>AWS</li>
						<li>Node.js</li>
						<li>MySQL</li>
						<li>Apollo</li>
						<li>GraphQL</li>
						<li>NoSQL</li>
						<li>RESTful APIs</li>
					</ul>
				</div>
				<div className="aboutme-page mb-28 md:mb-10">
					<div className="card hidden sm:block cursor-pointer">
						<div className="imgBox">
							<img src={gradPic} alt="profilePic"></img>
							<img src={profilePic} alt="profilePic"></img>
						</div>
						
						<div className="details">
							<div className="content flex flex-col justify-center text-center">
								<h2 className="text-2xl">Melissa Stan</h2>
								<div className="pt-5 italic">Full Stack Web Developer</div>
								{/* icons */}
								<ul className="p-2 flex justify-between">
									{icons.map((icon) => (
										<Link
											className="inline-block px-1.5"
											key={icon.link}
											to={icon.link}
											target="_blank"
											rel="noreferrer"
										>
											<span className="text-2xl text-gray-800 hover:text-gray-400">{icon.icon}</span>
										</Link>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="block sm:hidden">
						<div className="">
							<img className="w-1/2 mx-auto" src={profilePic} alt="profilePic"></img>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	);
};
export default AboutMe;