"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../MultiStepLoader";
import Image from 'next/image'; // Import Image component from Next.js
import SBLogo from "/public/assets/SBLogo.svg"; // Adjust the path if necessary
import ZBLogo from "/public/assets/zenith_blog.svg"; // Adjust the path if necessary

const loadingStatesStreamBuddy = [
    {
        text: "🎬 Movie Picks: Get awesome movie recommendations based on what you're looking for.",
    },
    {
        text: "🔎 Search Away: Look up movies by title, genre, rating, release date, director, producer, actor, or even how long they are.",
    },
    {
        text: "👤 Your Space: Create an account and choose if you want your profile to be private or public.",
    },
    {
        text: "📝 Movie Lists: Add movies to your watched list and make a list of films you want to see.",
    },
    {
        text: "⚛️ Frontend Fun: ReactJS for an easy-to-use interface.",
    },
    {
        text: "🛠️ Backend Magic: NodeJS and Express for all the behind-the-scenes work.",
    },
    {
        text: "🍃 Data Hub: MongoDB for storing all your movie info.",
    },
    {
        text: "🚀 Smooth Sailing: CI/CD with Github Actions and Heroku Cloud for easy updates and deployment.",
    },
];

const loadingStatesZenithBlog = [
    {
        text: "📝 Blog: Create a simple blog app with logins, commenting, and posting.",
    },
    {
        text: "🔎 Search Away: Search blogs with keywords, author, or publishing dates.",
    },
    {
        text: "🖥️ Developer dashboard: See what is going on in the CI/CD pipeline.",
    },
    {
        text: "📝 RESTful API: A robust and scalabale API design",
    },
    {
        text: "⚛️ Frontend Fun: ReactJS with Redux for an easy-to-use interface.",
    },
    {
        text: "🛠️ Backend Magic: Java Spring Boot backend",
    },
    {
        text: "🍃 Data Hub: Google Cloud SQL for database.",
    },
    {
        text: "🚀 Smooth Sailing: Containerized deployment with docker and CI/CD pipeline with Google Cloud Platform",
    },
    {
        text: "🧪 Automated testing on every push to feature branch, integration test on merges to dev branch and main branches",
    },
];



export default function Projects() {
    const [loadingSB, setLoadingSB] = useState(false);
    const [loadingZB, setLoadingZB] = useState(false);

    useEffect(() => {
        const handleClickOutside = () => {
            setLoadingSB(false);
            setLoadingZB(false);
        };

        if (loadingSB || loadingZB) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [loadingSB, loadingZB]);

    return (
        <section id="projects" className="p-12 bg-secondary text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark">Projects</h2>
        <p className="text-lg md:text-2xl text-gray-700 ">Click to see the projects I am proud of working on 🛠️</p>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-20 m-20">
            <div className="w-full md:w-auto flex flex-col items-center">
                <div className="loader-container">
                    <Loader loadingStates={loadingStatesStreamBuddy} loading={loadingSB} duration={1500} />
                </div>
                <div onClick={() => setLoadingSB(true)} className="cursor-pointer m-4">
                    <Image src={SBLogo} alt="SBLogo" width={300} height={300} />
                </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-center">
                <div className="loader-container">
                    <Loader loadingStates={loadingStatesZenithBlog} loading={loadingZB} duration={1500} />
                </div>
                <div onClick={() => setLoadingZB(true)} className="cursor-pointer m-4">
                    <Image src={ZBLogo} alt="ZBLogo" width={300} height={300} />
                </div>
            </div>
        </div>
    </section>
    );
}
