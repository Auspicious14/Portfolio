import Link from "next/link";
import { NavBar } from "../../components/nav";
import { ProjectComponent } from "./components";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <NavBar />
      <div className="mx-auto px-6 py-32 container max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">All Projects</h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">A comprehensive list of products I&apos;ve built, from AI-powered tools to scalable marketplaces.</p>
        <ProjectComponent />
      </div>
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Auspicious (Uthman Abdulganiyu). Built for high-performance startups.</p>
      </footer>
    </div>
  );
};

