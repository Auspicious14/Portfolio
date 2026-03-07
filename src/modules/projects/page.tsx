import Link from "next/link";
import { NavBar } from "../../components/nav";
import { ProjectComponent } from "./components";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <NavBar />
      <div className="mx-auto px-6 py-32 container max-w-7xl">
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Project Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            A comprehensive gallery of MVPs, AI tools, and scalable systems I&apos;ve built for startups and internal teams.
          </motion.p>
        </div>
        <ProjectComponent />
      </div>
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Auspicious (Uthman Abdulganiyu). Built for high-performance startups.</p>
      </footer>
    </div>
  );
};

