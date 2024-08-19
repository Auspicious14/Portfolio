import Link from "next/link";
import { NavBar } from "../../components/nav";

export const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <main className="container mx-auto p-8">
        <section className="py-12">
          <h2 className="text-4xl font-extrabold text-center">Projects</h2>
          <div className="mt-8">
            <h3 className="text-3xl font-semibold">Vendify</h3>
            <p>
              <Link
                href="https://vendiify.vercel.app"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vendiify.vercel.app
              </Link>
              <br />A multi-vendor E-commerce platform designed to ease both
              vendor and customer shopping experience.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-semibold">Career Guidance</h3>
            <p>
              <Link
                href="https://career-guidance.com.ng"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                career-guidance.com.ng
              </Link>
              <br />A platform to help people navigate and choose their careers.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-semibold">Cv-craft</h3>
            <p>
              <Link
                href="https://cv-craft.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                cv-craft.com
              </Link>
              <br />A platform to help job seekers craft professional and
              beautiful CVs.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
