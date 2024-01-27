
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imageSrc, tools, projectName, liveLink, description }) => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-8 gap-5 lg:p-4 lg:mb-0 mb-14 ">
      {/* First Column */}
      <div className="col-span-1 p-4 shadow-lg bg-slate-400">
        <img
          src={imageSrc}
          alt="Project Image"
          className="w-full h-auto rounded-md"
        />
        <div className="mt-2 p-2 bg-slate-300 rounded-md">
          <p className="text-sm font-medium text-slate-900">Built with:  <span className="text-xs font-normal text-black">{tools}</span></p>
        </div>
      </div>

      {/* Second Column */}
      <div className="col-span-1 lg:py-3">
        <div className="mb-2 flex  gap-4 item-center">
         <h3 className="text-lg font-semibold ">{projectName}</h3>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <FaExternalLinkAlt size={20} /> 
          </a>
        </div>

        <div>
          <p className="text-md font-medium ">Description: &nbsp;
          <span className="text-gray-700 ml-auto text-sm">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
