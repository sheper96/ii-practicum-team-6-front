import { useParams } from 'react-router-dom';
const ProjectDetails = () =>{

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
            </div>
        </div>
    )

}

export default ProjectDetails;