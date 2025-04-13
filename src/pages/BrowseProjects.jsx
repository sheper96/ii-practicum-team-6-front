import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import ProjectCard from '../components/ProjectCard.jsx'

const BrowseProjects = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Code Crew",
            description: "Build a project collaboration to help find partners for Code The Dream projects.",
            likes: 24,
            contributors: 2,
            tags: ["CTD", "Web Dev", "React"],
            teamSize: 5,
            liked: false,
        },
        {
            id: 2,
            title: "Data Visualization Dashboard",
            description: "Create an interactive dashboard to visualize complex datasets with customizable charts and filters.",
            likes: 18,
            contributors: 3,
            tags: ["Data Science", "UI/UX", "D3.js"],
            teamSize: 5,
            liked: false,
        },
        {
            id: 3,
            title: "Smart Home Automation System",
            description: "Develop a system to control and automate home devices using IoT sensors and machine learning algorithms.",
            likes: 32,
            contributors: 4,
            tags: ["IoT", "ML", "Embedded"],
            teamSize: 6,
            liked: false,
        },
        {
            id: 4,
            title: "Blockchain Voting Platform",
            description: "Build a secure and transparent voting platform using blockchain technology for verifiable elections.",
            likes: 27,
            contributors: 2,
            tags: ["Blockchain", "Security", "Web3"],
            teamSize: 4,
            liked: false,
        }
    ]);
    const handleLike = (id) => {
        setProjects(projects.map(project =>
            project.id === id ? { ...project, liked: !project.liked, likes: project.liked ? project.likes - 1 : project.likes + 1 } : project
        ));
    };
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/projects/${id}`);
    };
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
      <section className="  py-8 px-4">
          <div className="max-w-2xl mx-auto mb-8">
              <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
          <div className="flex justify-center">
              <div className="max-w-full overflow-x-auto pb-6 scrollbar-hide">
                  <div className="flex space-x-6 px-4 justify-center">
                      {filteredProjects.map((project, index) => (
                          <div
                              key={project.id}
                              className={`${index > 0 ? 'hidden' : ''} sm:block ${index > 1 ? 'sm:hidden' : ''} md:block`}
                          >
                              <ProjectCard
                                  project={project}
                                  onLike={handleLike}
                                  onClick={handleCardClick}
                              />
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
};

export default BrowseProjects;

