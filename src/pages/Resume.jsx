import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import divider from "../assets/divider.png";
import pic from "./../assets/cherrybloosom.jpeg";
import projectPic from "./../assets/projectPic.jpg";
import gradCap from "./../assets/gradCap.jpg";
import experiencePic from "./../assets/experiencePic.jpg";
import { TfiDownload } from "react-icons/tfi";

const Resume = () => {

	return (
		<div className="bg-red-50 h-full">
			<div className="text-center">
				<h1 className="text-4xl pt-4">Resume</h1>
				<img className="mx-auto" src={divider} alt="divider" />
				<p className="italic mb-8 m-4">
					Ambitious Full Stack Web Developer with an extensive background in psychology and basic medical knowledge who has experience building multiple full-stack applications. Enjoys coding web-based applications and has hands-on experience with front-end and back-end. Looking for a fast-paced environment with the goal to become Lead Dev.
				</p>

			</div>

			<main className="grid grid-cols-1 gap-4 md:grid-cols-3 container mx-auto">
				{/* Download Resume */}
				<section className="bg-neutral-800 h-52 md:h-56">
					<h2 className="text-white text-3xl">Download My Resume</h2>
					
					<button class="border-solid border-2 border-white rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href={pdf} download="myFile" target = "_blank" rel="noreferrer"><TfiDownload/> Resumé</a></button>
				</section>

				{/* Projects */}
				<section className="h-52 md:col-span-2 row-span-2 md:h-96 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
						<img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={projectPic} alt="" />
						<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
						<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 class="font-dmserif text-3xl font-bold text-white mb-10">Projects</h1>
							<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
							<button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
						</div>
				</section>

				{/* Skills */}
				<section className="h-52 md:row-span-2 md:h-96
				group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
					<img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={projectPic} alt="" />
					<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 class="font-dmserif text-3xl font-bold text-white mb-10">Skills</h1>
						<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
						
					</div>
				</section>
				{/* Education */}
				<section className="h-52 md:h-56 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
						<img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={gradCap} alt="" />
						<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
						<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 class="font-dmserif text-3xl font-bold text-white">Education</h1>
							<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Certificate in Full Stack Web Development: Georgia Institute of Technology</p>
							<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Bachelor of Science in Psychology and Minor in Biological Science degree with research distinction: Georgia State University</p>

							<button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
						</div>
					Education
				</section>

				{/* Experience */}
				<section className="h-52 md:h-56 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group [prespective:1000px]">
						<img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={experiencePic} alt="" />
						<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
						<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
							<h1 class="font-dmserif text-3xl font-bold text-white">Experience</h1>
							<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
							<button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
						</div>
					Experience
				</section>


			</main>
		</div>
	);
};
export default Resume;
