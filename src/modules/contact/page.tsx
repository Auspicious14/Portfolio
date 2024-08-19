import Link from "next/link";
import { NavBar } from "../../components/nav";
import { ContactComponent } from "./components";

export const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      <main className="container mx-auto p-8 lg:my-12 ">
        <ContactComponent />
      </main>
      <footer className="bg-gray-900 w-full absolute bottom-0 text-white p-6 text-center">
        <p>© 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
