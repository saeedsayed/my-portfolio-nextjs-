import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa6";

type Props = {
  project: {
    name: string;
    image: string;
    techStack: string[];
    repoUrl: string;
    link: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="border border-hover-color rounded-lg overflow-hidden flex flex-col shadow-lg select-none">
      {/*==========
        card image 👇
      ============*/}
      <Image
        width={600}
        height={338}
        src={project.image}
        alt={`Screenshot of ${project.name} web application`}
        loading="lazy"
        className="aspect-video bg-cover bg-center rounded-md object-cover"
      />
      {/* ===========
            card contents 👇
        =============== */}
      <div className="px-4 pt-6 flex-1 flex flex-col justify-between bg-bg-nav">
        <div className="h-46 overflow-auto scroll-bar-slim transition-all">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm font-semibold my-1 uppercase tracking-wider text-font-sub-color">
            technologies:
          </p>
          <ul className="ps-5">
            {project.techStack.map((tech: string) => (
              <li key={tech} className="flex items-center gap-3">
                - {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-3 -mx-4 gap-px">
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-(--hover-color) py-3 hover:opacity-80 transition-all duration-300 cursor-none cursor-target"
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${project.name} repository`}
            aria-label={`View ${project.name} source code on GitHub`}
            href={project.repoUrl}
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            className="w-1/2 hover:w-full flex justify-center items-center text-2xl bg-(--hover-color) py-3 hover:opacity-80 transition-all duration-300 cursor-none cursor-target"
            target="_blank"
            rel="noopener noreferrer"
            title={`Open live demo of ${project.name}`}
            aria-label={`Open live demo of ${project.name}`}
            href={project.link}
          >
            <FaLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
