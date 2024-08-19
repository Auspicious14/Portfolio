import Link from "next/link";
import { NavBar } from "../../components/nav";

export const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <main className="container mx-auto p-8">
        <section className="text-center py-12">
          <h2 className="text-4xl font-extrabold">Contact</h2>
          <p className="mt-4 text-lg">
            You can reach me via email at{" "}
            <Link
              href="mailto:uthmanabdulganiyu2019@gmail.com"
              className="text-blue-600 hover:underline"
            >
              uthmanabdulganiyu2019@gmail.com
            </Link>
            .
          </p>
          <div className="mt-4">
            <Link
              href="https://github.com/Auspicious14"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>{" "}
            |
            <Link
              href="https://www.linkedin.com/in/uthman-abdulganiyu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
