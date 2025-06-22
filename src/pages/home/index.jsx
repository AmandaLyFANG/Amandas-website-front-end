import React, {useState, useEffect} from "react"
import "./index.less"
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0)
    const roles = ["Creater", "Developer", "Designer"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length)
        }, 3000) // Change keyword every 2 seconds

        return () => clearInterval(intervalId) // Clear interval on component unmount
    }, [roles.length])

    return (
        <div
            className="tm_content justify-center max-w-[1680px] place-content-center w-full mt-5 h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="home-container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-9 col-12 my-5">
                        <div className="common_heading text-center ">
                            <h1 className="font-extrabold text-[100px]  text-gray-900">
                                Hi, I'm <span className="text-indigo-600">Amanda!</span>
                            </h1>
                            <h2 className="font-extrabold text-[100px] ">
                <span className="cd-headline clip">
                  <span className="fade">
                    <span>{roles[currentRole]}</span>
                  </span>
                </span>
                            </h2>
                        </div>
                        <div
                            className="subtitle w-full text-center mt-5 mb-[40px]"
                            style={{marginTop: 32}}
                        >
                            <p>
                                I am a Sydney-based Software Engineer with
                                <span className="text-indigo-600">3+ years</span> of industry
                                experience.
                            </p>
                            <p>
                                My passion lies in the art of implementation — transforming
                                ideas into reality with precision and creativity.
                            </p>
                            <p>
                                I welcome the opportunity to connect and collaborate on
                                innovative projects.
                            </p>
                            <p className="font-bold mt-5">
                                Let's craft the future of technology together.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="buttons justify-center w-full float-left flex items-center mb-[50px]">
                    <div className="mx-5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "purple",  // 或 "#8b5cf6"（Tailwind purple-500）
                                "&:hover": {
                                    backgroundColor: "#7c3aed", // 或 Tailwind purple-600
                                },
                            }}
                        >
                            <Link to={`/project`}>View My Work</Link>
                        </Button>
                    </div>
                    <div
                        className="mx-5 border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-2 px-4 rounded"
                        style={{marginLeft: 16}}
                    >
                        <Button variant="outlined"
                                variant="contained"
                                sx={{
                                    backgroundColor: "purple",  // 或 "#8b5cf6"（Tailwind purple-500）
                                    "&:hover": {
                                        backgroundColor: "#7c3aed", // 或 Tailwind purple-600
                                    },
                                }}>
                            <Link to={`/contact`}>Get In Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
