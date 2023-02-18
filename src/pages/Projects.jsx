import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectOnePic from "../assets/project1pic.png";
import projectTwoPic from "../assets/project2pic.png";
import projectThreePic from "../assets/project3pic.png";

const Projects = () => {
	const projects = [
		{
			title: 'MeowWoof',
			image: projectOnePic,
			technologies: [
				'Node.js, ',
				'JQuery UI, ',
				'TailwindCSS/Bootstrap, ',
				'sendgrid, ',
				'Mysql, ',
				'Sequelize'
			],
			github: 'https://github.com/TeryKing/Project-MeowWoof',
			deployLink: ""
		},
		{
			title: 'Turnip Fest',
			image: projectTwoPic,
			technologies: [
				'Sever-side API, ',
				'JQuery UI, ',
				'TailwindCSS ',
			],
			github: 'https://github.com/Yuyitax/TurnipFest',
			deployLink: ""
		},
		{
			title: 'ResuMade',
			image: projectThreePic,
			technologies: [
				'MERN stack',
			],
			github: 'https://github.com/PeytonCast/dream-team',
			deployLink: ""
		},
		// {
		// 	title: 'Team Profile Generator',
		// 	image: teamGeneratorPic,
		// 	technologies: [
		// 		'Test, ',
		// 		'Node.js, ',
		// 		'Inquirer',
		// 	],
		// 	github: 'https://github.com/mstan19/Team-Profile-Generator-MS',
		// 	deployLink: ""
		// },
		// {
		// 	title: 'Text Editor',
		// 	image: textEditorPic,
		// 	technologies: [
		// 		'Program Web Application, ',
		// 		'IDB, ',
		// 		'Express',
		// 	],
		// 	github: 'https://github.com/mstan19/text-editor-ms',
		// 	deployLink: ""
		// },
		// {
		// 	title: 'Social Network',
		// 	image: socialNetworkPic,
		// 	technologies: [
		// 		'Node.js, ',
		// 		'MongoDB, ',
		// 		'Mongoose, ',
		// 		'Moment, ',
		// 		'Express, ',
		// 	],
		// 	github: 'https://github.com/mstan19/social-network-api-ms',
		// 	deployLink: ""
		// }
	]
	return (
		<div className="bg-blue-100">
			hi projects
		</div>
	);
};
export default Projects;
