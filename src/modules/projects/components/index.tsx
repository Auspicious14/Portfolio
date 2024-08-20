import React from "react";
import Link from "next/link";
import Image from "next/image";
import VendifyLogo from "./../../../../public/vendify logo white.jpg";
import CareerGuideIMage from "./../../../../public/career-guidance.png";

export const ProjectComponent = () => {
  return (
    <section className="">
      <div className="md:flex justify-center gap-8 ">
        <div className="w-full border-2 rounded-lg border-dashed my-4 md:my-0 border-secondary">
          <Image
            src={VendifyLogo}
            alt="vendify"
            width={500}
            height={500}
            className="bg-primary w-full rounded-t-lg object-cover"
          />
          <div className="border border-b p-4">
            Typescript, Next.js, Node.js
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-semibold text-white mb-2">Vendify</h1>
            <p>
              A multi-vendor E-commerce platform designed to ease both vendor
              and customer shopping experience.
            </p>
            <Link
              href="https://vendiify.vercel.app"
              className="my-8 text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out
            </Link>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg border-dashed border-secondary">
          <Image
            src={CareerGuideIMage}
            alt="career-guidance"
            width={500}
            height={500}
            className="bg-primary w-full rounded-t-lg object-cover"
          />
          <div className="border border-b border-secondary p-4">
            Typescript, Next.js, Node.js
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-semibold text-white mb-2">
              Career Guidance
            </h1>
            <p>A platform to help people navigate and choose their careers.</p>

            <Link
              href="https://career-guidance.com.ng"
              className="my-8 text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out
            </Link>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg border-dashed my-4 md:my-0 border-secondary">
          <Image
            src={VendifyLogo}
            alt="vendify"
            width={500}
            height={500}
            className="bg-primary w-full rounded-t-lg object-cover"
          />
          <div className="border border-b border-secondary p-4">
            Typescript, Next.js, Node.js
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-semibold text-white mb-2">Cv-Craft</h1>
            <p>
              A platform to help job seekers craft professional and beautiful
              CVs.
            </p>

            <Link
              href="https://cv-craft.netlify.app"
              className="my-8 text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
