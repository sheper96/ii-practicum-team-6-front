import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const teamMembers = [
    { name: 'Daria', github: 'https://github.com/DariaPavlyuk81' },
    { name: 'John', github: 'https://github.com/canilo1' },
    { name: 'Masooma', github: 'https://github.com/JafariM' },
    { name: 'Roman', github: 'https://github.com/brrr123' },
    { name: 'Valery', github: 'https://github.com/sheper96' }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {teamMembers.map((member) => (
              <a
                key={member.name}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                <span className="mt-2 text-sm text-gray-500 group-hover:text-gray-700">
                  {member.name}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 mb-8 pt-8">
            &copy; {new Date().getFullYear()} CodeCrew.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;