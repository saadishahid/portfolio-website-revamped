"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "./MultiStepLoader";
import Image from 'next/image'; // Import Image component from Next.js
import SBLogo from "../public/SBLogo.svg"; // Adjust the path if necessary
import ZBLogo from "../public/zenith_blog.svg"; // Adjust the path if necessary

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
        text: "📝 Blog Magic: Create a simple blog app with logins, commenting, and posting.",
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
        <section id="projects" className="p-8 bg-secondary relative">
        <div className="w-full h-[20vh] flex items-center justify-center md:justify-start md:items-start">
          {/* Core Loader Modal */}
          <div className="loader-container">
            <Loader loadingStates={loadingStatesStreamBuddy} loading={loadingSB} duration={1500} />
          </div>
          {/* The SVG image is used to trigger the loading */}
          <div onClick={() => setLoadingSB(true)} className="cursor-pointer m-4">
            <Image src={SBLogo} alt="SBLogo" width={300} height={300} />
          </div>
        </div>
        <div className="w-full h-[20vh] flex items-center justify-center md:justify-end md:items-end">
          {/* Core Loader Modal */}
          <div className="loader-container">
            <Loader loadingStates={loadingStatesZenithBlog} loading={loadingZB} duration={1500} />
          </div>
          {/* The SVG image is used to trigger the loading */}
          <div onClick={() => setLoadingZB(true)} className="cursor-pointer m-4">
            <Image src={ZBLogo} alt="ZBLogo" width={300} height={300} />
          </div>
        </div>
      </section>
    );
}
