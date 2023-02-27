import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Snowfall from 'react-snowfall'
import pic from "./../assets/cherrybloosom.jpeg";
// import flower1 from "";
// import flower2 from "";

const snowflake1 = document.createElement('img')
snowflake1.src = '/assets/snowflake-1.png'
const snowflake2 = document.createElement('img')
snowflake2.src = '/assets/snowflake-2.jpg'


const images = [snowflake1, snowflake2]

const Home = () => {
    const backgroundPic={
      backgroundImage: `url(${pic})`,
      // height:'80vh',
      // marginTop:'0px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
    };
    

    return (
        <div className="flex flex-col justify-center text-center">
          
          <img className="relative object-cover bg-contain" src={pic} alt="backgroundPic"></img>
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
          <Snowfall
          color="pink"
          snowflakeCount={200}
          // images={images}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
            }}
          />
        </div>
    );
};
export default Home;
