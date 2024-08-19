import Link from "next/link";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

export const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className=" text-primary p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Auspicious</h1>
        <FaHamburger
          size={20}
          className="md:hidden"
          onClick={() => setToggle(!toggle)}
        />

        <nav className={toggle ? `space-x-10 md:block` : "hidden"}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
