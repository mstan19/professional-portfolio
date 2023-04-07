import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import emailjs from '@emailjs/browser';
import Reaptcha from 'reaptcha';
import { useReward } from 'react-rewards';
import Confetti from 'react-dom-confetti';
import divider from "../assets/divider.png";

// require("dotenv").config();



const Contact = () => {
	const form = useRef();
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [buttonMessage, setButtonMessage] = useState(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [emailSuccess, setEmailSuccess] = useState(false);
	const { reward, isAnimating } = useReward("rewardId", "confetti");

	const onVerify = recaptchaResponse => {
		setCaptchaVerified(true)
	};

	const textChange = () => {
		setButtonMessage(!buttonMessage)
	}

	const myContactInfomations = [
		{
			info: "melissastan91@gmail.com",
			category: "email",
			title: "My Email:",
			href: "mailto:melissastan91@gmail.com",
			icon: <TfiEmail />,
		},
		{
			info: "(404)447-9089",
			category: "phoneNumber",
			title: "My Phone Number:",
			href: "tel:404-447-9089",
			icon: <ImPhone />,
		},
		{
			info: "Atlanta, GA",
			category: "location",
			title: "Location:",
			href: "#",
			icon: <GoLocation />,
		},
	]

	useEffect(() => {
		if (emailSuccess) {
			reward()
		}
	}, [emailSuccess])

	console.log("errors", errors)


	const sendEmail = async (data) => {
		console.log(data)
		emailjs.sendForm('service_9d0xx8q', 'template_1908rlg', form.current, '3j4PV5samtA2z-FeV')
		.then((result) => {
			console.log(result.text);
			console.log("Message was sent!");
			setEmailSuccess(true);
		}, (error) => {
			console.log(error.text);
		});

		setEmailSuccess(true);
		console.log("at the end")
	};


	return (
		<div className="bg-red-50 min-h-full">
			<h1 className="text-4xl font-normal text-center pt-4">Let's Work Together!</h1>
			<img className="mx-auto" src={divider} alt="divider" />
			<p className=" italic m-6 text-center">Interested in working together? Message me using this form below. Speak to you soon!</p>
			<div className="container mx-auto">
				<form
					ref={form}
					onSubmit={handleSubmit(sendEmail)}
					className="flex flex-col items-center bg-red-50 p-0 m-2 md:m-0">
					<div className="mb-4 md:w-1/2 w-full">
						<label
							className="block text-black-700 text-lg mb-2"
							htmlFor="name"
						>
							Full Name
						</label>
						<input
							{...register("user_name", {
								required: "Name is required.",
								minLength: {
									value: 3,
									message: "Full name must be at least be 2 characters long."
								},
							})}
							className="appearance-none border border-black w-full py-2 px-3 text-black-700 leading-tight rounded-lg"
							name="user_name"
							type="text"
						></input>
						{errors && errors.user_name?.message ? (
							<p className="text-red-700 bg-red-100 text-base border-solid border border-red-700 text-center p-7 m-2">{errors.user_name?.message}</p>
						) : null}

					</div>
					<div className="mb-5 md:w-1/2 w-full">
						<label
							className="block text-black-700 text-lg mb-2"
							htmlFor="email"
						>
							Email Address
						</label>
						<input
							{...register("user_email", {
								required: "Your email is required.",
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Email must be valid."
								},
							})}
							className="appearance-none border border-black w-full py-2 px-3 text-black-700 leading-tight rounded-lg"
							name="user_email"
							type="text"
						></input>

						{errors && errors.user_email?.message ? (
							<p className="text-red-700 bg-red-100 text-base border-solid border border-red-700 text-center p-7 m-2">{errors.user_email?.message}</p>
						) : null}

					</div>

					<div className="mb-6 md:w-1/2 w-full">
						<label
							className="block text-black-700 text-lg mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							{...register("message", {
								required: "Message is required.",
								minLength: {
									value: 15,
									message: "Your message must be at least be 15 characters long."
								},
							})}
							{...register("message")}
							rows="5"
							className="block appearance-none border border-black w-full p-2.5 px-3 text-black-700 leading-tight rounded-lg"
							name="message"
							id="message"
							type="text"
						>
						</textarea>

						{errors && errors.message?.message ? (
							<p className="text-red-700 bg-red-100 text-base border-solid border border-red-700 text-center p-7 m-2">{errors.message?.message}</p>
						) : null}

					</div>

					<Reaptcha
						sitekey="6LcDxpwkAAAAAMYeHaSLMfrnTZbz1mZXAnka-o1B"
						onVerify={onVerify}
					/>

					<button
						className={`w-1/3 relative px-6 py-3 font-bold text-black group mt-7`}
						type="submit"
						value="Send"
						disabled={!captchaVerified || isAnimating}
					>
						<span className={`absolute text-center inset-0 w-[12rem] w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 ${emailSuccess ? "bg-emerald-500 hover:bg-emerald-400" : "bg-red-300 hover:bg-red-400"} group-hover:translate-x-0 group-hover:translate-y-0`} ></span>
						<span className="absolute text-center inset-0 w-[12rem] w-full border-4 border-black h-full md:h-11"></span>
						<span id="rewardId" className="relative">{emailSuccess ? "SUCCESSFULLY SENT!" : "SUBMIT"}</span>

					</button>
				</form>

				<div className="grid grid-cols-1 md:grid-cols-3 mt-16 mb-28 md:mb-0 pb-28">
					{myContactInfomations.map((myContact) => (
						<div className="text-2xl m-5 sm:m-0" key={myContact.info}>
							<Link to={myContact.href}>
								<div className="flex justify-center">
									<div className="w-10 h-10 bg-slate-800 text-slate-200 rounded-full relative flex justify-center text-center mb-5 sm:m-0">
										<h2 className="text-xl grid place-items-center">{myContact.icon}</h2>
									</div>
								</div>
								<div>
									<div className="flex justify-center">{myContact.info}</div>
								</div>
							</Link>
						</div>

					))}
				</div>
			</div>
		</div>


	);
};
export default Contact;
