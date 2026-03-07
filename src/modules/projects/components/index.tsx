import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "../../../data/portfolio";
import { Github, ExternalLink, ArrowRight, Search, Filter, Layers, Zap, Cpu, ShoppingBag, Activity, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "AI", "SaaS", "Real-time", "Marketplace", "Internal Tools", "Health"] as const;

export const ProjectComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="space-y-12">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center sticky top-24 z-30 bg-[#0F1115]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-2xl">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search projects or tech..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(199,120,221,0.4)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="text-gray-500" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">No projects found</h3>
          <p className="text-gray-400">Try adjusting your search or filter to find what you&apos;re looking for.</p>
        </motion.div>
      )}
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI": return <Cpu size={14} />;
      case "SaaS": return <Layers size={14} />;
      case "Real-time": return <Zap size={14} />;
      case "Marketplace": return <ShoppingBag size={14} />;
      case "Health": return <Activity size={14} />;
      default: return <Settings size={14} />;
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
    >
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-900">
        <Image 
          src={project.image} 
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white">
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
          {project.live !== "#" && (
            <Link 
              href={project.live} 
              target="_blank" 
              className="p-3 bg-white text-black rounded-xl hover:scale-110 transition-transform shadow-xl flex items-center gap-2 font-bold text-sm"
            >
              <ExternalLink size={18} /> Live Demo
            </Link>
          )}
          <Link 
            href={project.github} 
            target="_blank" 
            className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:scale-110 transition-transform shadow-xl"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary/5 text-primary/80 border border-primary/10 rounded-md">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">{project.description}</p>
        
        <div className="space-y-6 flex-1">
          <div>
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">Key Features</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-primary/50" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <div>
              <h4 className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] mb-2">The Problem</h4>
              <p className="text-xs text-gray-400 leading-relaxed italic">&quot;{project.problem}&quot;</p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-blue-400/60 uppercase tracking-[0.2em] mb-2">What I Built</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{project.built}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
          {project.live !== "#" ? (
            <Link href={project.live} target="_blank" className="text-sm font-bold flex items-center gap-2 text-white hover:text-primary transition-colors group/link">
              View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <span className="text-xs font-medium text-gray-500">Coming soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};


