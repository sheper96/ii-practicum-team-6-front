import { useParams } from 'react-router-dom';
const ProjectDetails = () => {

  const { id } = useParams();
  const project = {
    id: 1,
    title: "Code Crew",
    description: "Build a project collaboration to help find partners for Code The Dream projects.",
    likes: 24,
    contributors: 2,
    tags: ["CTD", "Web Dev", "React"],
    teamSize: 5,
    liked: false,
    // Additional details for the full view
    deadline: "2024-06-30",
    skillsRequired: ["React", "Node.js", "MongoDB"],
    timeCommitment: "10 hours/week",
    projectStatus: "Active",
    githubRepo: "https://github.com/codecrew/project",
    longDescription: "Build a comprehensive project collaboration platform that enables developers to find partners for Code The Dream projects. The platform will include features for project discovery, team formation, and progress tracking."
  };
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600">{project.longDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {project.skillsRequired.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Team Information</h2>
              <div className="space-y-2 text-gray-600">
                <p>Team Size: {project.teamSize}</p>
                <p>Spots Available: {project.teamSize - project.contributors}</p>
                <p>Time Commitment: {project.timeCommitment}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Project Details</h2>
              <div className="space-y-2 text-gray-600">
                <p>Status: {project.projectStatus}</p>
                <p>Deadline: {project.deadline}</p>
                <p>GitHub: <a href={project.githubRepo} className="text-blue-600 hover:underline">{project.githubRepo}</a></p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );

};

export default ProjectDetails;
