import Link from "next/link";
import { NavBar } from "../../components/nav";
import { AboutComponent } from "./components";

export const AboutPage = () => {
  return (
    <div className="container min-h-screen">
      <NavBar />
      <main className=" mx-auto p-8">
        <AboutComponent />
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
