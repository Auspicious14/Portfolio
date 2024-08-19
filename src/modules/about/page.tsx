import Link from "next/link";
import { NavBar } from "../../components/nav";
import { AboutComponent } from "./components";

export const AboutPage = () => {
  return (
    <div className=" min-h-screen relative">
      <NavBar />
      <main className=" mx-auto p-8 container">
        <AboutComponent />
      </main>
      <footer className="bg-gray-900 absolute bottom-0 w-full text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
