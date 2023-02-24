import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import divider from "../assets/divider.png";
import pic from "./../assets/cherrybloosom.jpeg";

const Resume = () => {

	return (
		<div className="bg-red-50 h-full">
			<div className="text-center">
				<h1 className="text-4xl pt-4">Resume</h1>
				<img className="mx-auto" src={divider} alt="divider"/>
				<p className="italic mb-8 m-4">
					Ambitious Full Stack Web Developer with an extensive background in psychology and basic medical knowledge who has experience building multiple full-stack applications. Enjoys coding web-based applications and has hands-on experience with front-end and back-end. Looking for a fast-paced environment with the goal to become Lead Dev.
				</p>
				
			</div>

			<main className="grid grid-cols-1 md:grid-cols-3 container mx-auto">
				{/* Download Resume */}
				<section className="border-solid border-2 border-indigo-600 h-52 md:h-24 bg-stone-200">
					<h2 className="">Download My Resume</h2>
				</section>

				{/* Projects */}
				<section className="border-solid border-2 border-indigo-600 bg-red-300 h-52 md:col-span-2 row-span-2 md:h-36">
					Projects
				</section>

				{/* Skills */}
				<section className="border-solid border-2 border-indigo-600 h-52 md:row-span-2 md:h-36">
					Skills
				</section>
				{/* Education */}
				<section className="border-solid border-2 border-indigo-600 h-52 md:h-24">
					Education
				</section>

				{/* Experience */}
				<section className="border-solid border-2 border-indigo-600 h-52 md:h-24">
					Experience
				</section>
					

			</main>
		</div>
	);
};
export default Resume;
