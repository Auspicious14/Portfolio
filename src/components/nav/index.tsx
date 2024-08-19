import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

export const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="relative text-primary p-6 shadow-lg bg-opacity-85 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Auspicious</h1>
        <FaHamburger
          size={20}
          className="md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <nav className={`space-x-10 md:block hidden`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div
        className={
          toggle
            ? "w-1/2 h-screen  m-auto absolute bg-black  top-0 right-0 p-4 z-50"
            : "hidden"
        }
      >
        <FaHamburger
          size={20}
          className="md:hidden absolute right-0 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <nav className={"flex  flex-col gap-10 mt-12"}>
          <Link
            href="/"
            className="text-secondary hover:text-white focus:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-secondary hover:text-white focus:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-secondary hover:text-white focus:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-secondary hover:text-white focus:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
