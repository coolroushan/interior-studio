import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, isLarge = false }) => {
  const aspectRatio = isLarge 
    ? 'aspect-video md:aspect-[21/9]' 
    : 'aspect-[4/3] md:aspect-[16/10]';

  return (
    <Link to={`/projects/${project.slug}`} className="group flex flex-col w-full cursor-pointer">
      <div className={`relative w-full ${aspectRatio} bg-[#EAE8E3] overflow-hidden rounded-sm mb-4`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {project.category && (
          <div className="absolute top-3 right-3 bg-[#1A1A1A] text-white text-[9px] font-medium px-3 py-1 uppercase tracking-widest">
            {project.category}
          </div>
        )}
      </div>
      
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-light text-[#1A1A1A] group-hover:text-[#7A7A7A] transition-colors">
            {project.title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#8A8A8A] mt-1 font-medium">
            {project.location} <span className="mx-1 opacity-50">·</span> {project.year}
          </p>
        </div>
        <div className="flex items-center text-xs font-medium text-[#1A1A1A] pt-1">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;