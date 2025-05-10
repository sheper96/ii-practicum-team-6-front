import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Hero = () => {
  const { user } = useUser();

  return (
    <div >
        <div className=" bg-gray-100 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Find Your Team, Build Your Dream
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                    Share ideas, form teams, and create amazing projects.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <Link to="/projects">
                    <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Browse Projects
                    </button>
                    </Link>
                    {user && (
                    <Link to="/projects/new">
                    <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                        Create Project
                    </button>
                    </Link>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};




export default Hero;
