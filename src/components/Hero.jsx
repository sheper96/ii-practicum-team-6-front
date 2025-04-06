import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-400 text-black text-center px-6 shadow-md rounded-lg border border-gray-300">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl shadow-sm">
        Find Your Team, Build Your Dream
      </h1>
      <p className="mt-2 text-md sm:text-xl max-w-2xl">
        Share ideas, form teams, and create amazing projects.
      </p>
      <div className="mt-6 flex gap-4">
        <Link to="/projects">
          <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md border border-white hover:bg-gray-500 hover:shadow-lg transition">
            Browse Projects
          </button>
        </Link>
      </div>
    </section>
  );
};




export default Hero;
