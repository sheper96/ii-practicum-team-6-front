import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
            <div className="text-lg font-bold">CodeCrew</div>
            <div className="flex gap-6">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
            <div className="flex gap-4">
                <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700">Login</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
            </div>
            </nav>
    );
};

export default NavBar;