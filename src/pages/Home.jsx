import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic from "./../assets/cherrybloosom.jpeg";


const Home = () => {
      const backgroundPic={
        backgroundImage: `url(${pic})`,
        height:'80vh',
        // marginTop:'0px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="flex flex-col justify-center text-center">
          <img className="relative object-cover h-full" src={pic} alt="backgroundPic"></img>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 opacity-60">
            <h1 className="text-5xl font-semibold mb-2">Melissa Stan</h1>
            <p className="text-2xl text-gray-500 font-medium">Full Stack Web Developer</p>
            <button className="mt-10">
              <Link to="/aboutme" className="relative px-6 py-3 font-bold text-black group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">About Me</span>
              </Link>
            </button>
          </div>
        </div>
    );
};
export default Home;
