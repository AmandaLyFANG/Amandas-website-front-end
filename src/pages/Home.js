import React,{ useState, useEffect } from "react";
import "./Home.css"
import { Link } from 'react-router-dom';
import "../assets/css/main.css";

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ['Creater', 'Developer', 'Designer'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 2000); // Change keyword every 2 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div class="tm_content justify-center max-w-[1680px] place-content-center w-full mt-5 h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div class="row justify-content-center mt-5">
                <div class="col-xl-9 col-12 my-5">
                    <div class="common_heading text-center ">
                        <h1 class="font-extrabold text-[100px]  text-gray-900">Hi, I'm <span class="text-indigo-600">Amanda!</span></h1>
                        <h2 class="font-extrabold text-[100px] ">
                            <span class="cd-headline clip">
                                <span class="blc"><span>{roles[currentRole]}</span>
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div class="subtitle w-full text-center mt-5 mb-[40px]">
                        <p>I am a Sydney-based Software Engineer with <span class="text-indigo-600">3+ years</span> of industry experience.</p>
                        <p>My passion lies in the art of implementation — transforming ideas into reality with precision and creativity. </p>
                        <p>I welcome the opportunity to connect and collaborate on innovative projects. </p>
                        <p class="font-bold mt-5">Let's craft the future of technology together.</p>
                    </div>
                </div>
            </div>

            <div class="buttons justify-center w-full float-left flex items-center mb-[50px]">
                
                <div class="mx-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/project`} >View My Work</Link>
                </div>
                <div class="mx-5 border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-2 px-4 rounded">
                    <Link to={`/contact`} >Get In Touch</Link>
                </div>

            </div>

            {/* <div class="justify-center w-full float-left flex items-center mt-5">
                <ul class="relative">
                    <li class="pl-[15px]"><span class="font-semibold text-[18px] text-gray-800" ><span class="text-indigo-600 h-full w-2">|</span> Phone: +61 4785 84362</span></li>
                    <li class="pl-[15px]"><span class="font-semibold text-[18px] text-gray-800" ><span class="text-indigo-600 h-full w-2">|</span> Email: amanda.ly.f@outlook.com</span></li>
                    <li class="pl-[15px]"><span class="font-semibold text-[18px] text-gray-800" ><span class="text-indigo-600 h-full w-2">|</span> Address: Ultimo, Sydney, NSW 2007</span></li>
                </ul>
            </div> */}

        </div>

    );
};

export default Home;