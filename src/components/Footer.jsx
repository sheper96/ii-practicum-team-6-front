import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-100 to-gray-300 text-center py-4 text-gray-700 border-t border-gray-300">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CodeCrew.
      </p>

      {/* GitHub Profiles */}
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://github.com/brrr123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">Roman</span>
        </a>
        <a
          href="https://github.com/sheper96"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">Valery</span>
        </a>
        <a
          href="https://github.com/DariaPavlyuk81"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">Daria</span>
        </a>
        <a
          href="https://github.com/JafariM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">Masooma</span>
        </a>
        <a
          href="https://github.com/canilo1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">John</span>
        </a>
      </div>
    </footer>
  );

};

export default Footer;
