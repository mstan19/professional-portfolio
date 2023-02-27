import React from "react";


const Footer = () => {


	return (
		<footer className="flex-grow bg-stone-100 z-50 shadow-inner fixed inset-x-0 bottom-0 w-full h-20 items-center flex justify-center">
			<hr className="border-gray-200 dark:border-gray-700" />
			<div className=" text-base text-gray-500 sm:text-center">© Melissa Stan. All Rights Reserved.
				<div className=" text-base sm:text-center text-gray-400">
					Deployed by AWS.
				</div>
			</div>
		</footer>
	);
};
export default Footer;
