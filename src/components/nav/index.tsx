import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <header className=" text-primary p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Auspicious</h1>
        <nav className="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
