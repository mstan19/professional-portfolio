import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";



const Contact = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const myContactInfo = 
		{
			myEmail: "melissastan91@gmail.com",
			myLocation: "Atlanta, GA",
			phoneNumber: "(404)447-9089",
		};

    // update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          
        } catch (e) {
            console.error(e);
        }

    };
    return (
        <div className="container m-auto">
            {/* <h1>Contact</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="text-3xl space-y-4">
                    <h2 className="text-3xl font-normal">My Contact Info</h2>
                    <div>
                        <span><ImPhone /></span><div className="text-2xl">Location: </div><p>{myContactInfo.myLocation}</p>
                    </div>
                    <div className="text-2xl">Email: <p>{myContactInfo.myEmail}</p></div>
                    <div className="text-2xl">Phone Number: <p>{myContactInfo.phoneNumber}</p></div>
                </div>
                <form onSubmit={onSubmit} className="bg-white p-0 m-0">
                    {/* {error ? (
                        <div className="text-red-700 bg-red-100 text-base border-solid border border-red-700 text-center p-7 mb-2">
                            Error: Incorrect credentials
                        </div>
                    ) : null} */}
                    <div className="mb-4">
                        <label
                            className="block text-black-700 text-lg mb-2"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            className="appearance-none border border-black w-full py-2 px-3 text-black-700 leading-tight rounded-lg"
                            name="name"
                            type="text"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-black-700 text-lg mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            className="appearance-none border border-black w-full py-2 px-3 text-black-700 leading-tight rounded-lg"
                            name="email"
                            type="text"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    
                    <div className="mb-6">
                        <label
                            className="block text-black-700 text-lg mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea rows="5" className="block appearance-none border border-black w-full p-2.5 px-3 text-black-700 leading-tight rounded-lg" name="message" id="message" type="text" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            className="bg-red-300 w-1/2 shadow-lg rounded-lg hover:bg-red-400 text-white py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;
