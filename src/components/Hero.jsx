import React from "react";
import { Link } from "react-router-dom";

const Hero = () =>{
    return(
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-00 to-gray-400 text-black text-center px-6">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Find Your Team, Build Your Dream
        </h1>
        <p className="mt-2 text-md sm:text-xl max-w-2xl">
            Share ideas, form teams, and create amazing projects.
        </p>
        <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md border border-white hover:bg-gray-500">
                <Link to="/projects">Browse Projects</Link>
            </button>
        </div>
        </section>
    );
};

export default Hero;