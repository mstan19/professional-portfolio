import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    

    return (
        <footer className="shadow-inner absolute bottom-0  w-full h-12 items-center flex justify-center">
            <hr className="border-gray-200 dark:border-gray-700" />
            <span className="block text-base text-gray-500 sm:text-center dark:text-gray-400">© Melissa Stan . All Rights Reserved.</span>
        </footer>
    );
};
export default Footer;
