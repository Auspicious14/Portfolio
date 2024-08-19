import Link from "next/link";
import { NavBar } from "../../components/nav";
import { ProjectComponent } from "./components";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <div className="mx-auto p-8 container">
        <ProjectComponent />
      </div>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
