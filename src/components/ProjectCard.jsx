import { CiHeart } from "react-icons/ci";

const ProjectCard = ({ project, onLike, onClick }) => (
 <div
     className="w-64 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
     onClick={() => onClick(project.id)} >
     <div className="flex justify-between items-start mb-2">
         <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
         <button
             onClick={(e) => {
                 e.stopPropagation();
                 onLike(project.id);
             }}
             className="text-gray-400 hover:text-red-500 transition-colors flex items-center"   >
             <CiHeart
                 className={`h-5 w-5 ${project.liked ? 'text-red-500' : 'text-gray-400'}`}
                 style={{ fill: project.liked ? '#ef4444' : '#9ca3af', stroke: project.liked ? '#ef4444' : '#9ca3af' }}
             />
             <span className="ml-1 text-sm">{project.likes}</span>
         </button>
     </div>

     <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>

     <div className="flex flex-wrap gap-2 mb-4">
         {project.tags.map((tag, index) => (
             <span
                 key={index}
                 className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                 onClick={(e) => e.stopPropagation()} >
                 {tag}
             </span>
         ))}
     </div>

     <div className="flex justify-between items-center">
         <div className="text-sm text-gray-500">
             Team size: {project.teamSize}
         </div>
         <div className="text-sm text-gray-500">{project.teamSize-project.contributors} spots left</div>
     </div>
 </div>
);

export default ProjectCard;