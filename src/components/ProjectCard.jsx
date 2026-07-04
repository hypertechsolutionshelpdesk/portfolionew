import React from "react";

const ProjectCard = ({ imgUrl, title, tags, demoUrl }) => {
  return (
    <div className="group h-full bg-white rounded-xl overflow-hidden shadow-md mx-2 border border-slate-200/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-secondary bg-blue-100/50 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
