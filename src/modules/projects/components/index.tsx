import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../../../data/portfolio";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export const ProjectComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => (
        <div 
          key={idx}
          className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/30 transition-all flex flex-col"
        >
          <div className="aspect-video relative overflow-hidden bg-gray-900">
            <Image 
              src={project.image} 
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="flex gap-4">
                <Link href={project.live} target="_blank" className="p-2 bg-white text-black rounded-lg hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </Link>
                <Link href={project.github} target="_blank" className="p-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white hover:scale-110 transition-transform">
                  <Github size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20 rounded-md">{t}</span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
              <Link href={project.live} target="_blank" className="text-sm font-bold flex items-center gap-2 group/link">
                View Project <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

