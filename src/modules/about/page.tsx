import Link from "next/link";
import { NavBar } from "../../components/nav";

export const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <main className="container mx-auto p-8">
        <section className="text-center py-12">
          <h2 className="text-4xl font-extrabold">About Me</h2>
          <p className="mt-4 text-lg">
            I'm a frontend developer at Async Techs, where I craft beautiful
            user interfaces and implement scalable and maintainable code. I am
            passionate about creating intuitive and engaging digital experiences
            using modern technologies.
          </p>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
