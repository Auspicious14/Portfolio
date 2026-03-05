import Link from "next/link";
import { NavBar } from "../../components/nav";
import { AboutComponent } from "./components";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <NavBar />
      <div className="mx-auto px-6 py-32 container max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">The Product Partner</h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">Building high-impact MVPs for startup founders who need a technical builder they can trust.</p>
        <AboutComponent />
      </div>
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Auspicious (Uthman Abdulganiyu). Built for high-performance startups.</p>
      </footer>
    </div>
  );
};
