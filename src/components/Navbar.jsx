import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsStackOverflow } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
	let [open, setOpen] = useState(true);

	const pages = [
		// {
		// 	title: "Home",
		// 	name: "home",
		// 	link: "/",
		// },
		{
			title: "About",
			name: "aboutMe",
			link: "/aboutme",
		},
		{
			title: "Projects",
			name: "projects",
			link: "/projects",
		},
		{
			title: "Resumé",
			name: "resume",
			link: "/resume",
		},
		{
			title: "Contact",
			name: "contact",
			link: "/contact",
		},
	];

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
		{
			name: "stackoverflow",
			link: "https://stackoverflow.com/users/19202356/melissa-s",
			icon: <BsStackOverflow />,
		},
	];

	return (
		<nav className="h-16 z-50 bg-stone-100 fixed shadow-md w-full top-0 left-0">
			<div className=" md:flex items-center px-5 md:grid md:grid-cols-3">
				<h1 className="text-4xl p-2">
					<Link to="/">
					Melissa
					</Link>
				</h1>

				{/* Mobile responsive */}
				<div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
					<span name={open ? "close":"menu"}><FiMenu /></span>
				</div>

				<div className={`md:block bg-white md:bg-stone-100 p-3 md:grid items-center md:flex md:justify-center md:grid-cols-2 md:col-span-2 ${open ? "hidden" : "block border-t-2 border-black-300 md:border-t-0"}`}>
					{/* Options */}
					<ul className="md:flex md:justify-center">
						{pages.map((page) => (
							<NavLink
							key={page.name}
							to={page.link}
							>
								<span className="">{page.title}</span>
							</NavLink>
						))}
					</ul>

					{/* icons */}
					<ul className="p-2 flex justify-between md:justify-end md:float-right">
						{icons.map((icon) => (
							<Link
							className="inline-block md:px-1.5"
							key={icon.name}
							to={icon.link}
							target="_blank" 
							rel="noreferrer"
							>
								<span className="text-2xl md:text-2xl text-gray-800 hover:text-gray-400">{icon.icon}</span>
							</Link>
						))}
					</ul>
				</div>
				
			</div>
		</nav>
	);
};

function NavLink({ to, children, ...props}) {

    return(
        <li className={`nav-link-btn ${useLocation().pathname === to ? "activeBtn underline text-red-300 decoration-red-300 decoration-1 " : "hover:text-red-700 hover:underline hover:underline-offset-4"}`}>
            <Link to={to} {...props} className="text-xl md:px-3.5 py-3 md:py-0 flex inline-block md:inline">
                {children}
            </Link>
        </li>
    )
}

export default Navbar;
