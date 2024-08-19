import Link from "next/link";
import { NavBar } from "../../components/nav";
import Image from "next/image";
import HeroImage from "./../../../public/Group 46.png";
import VendifyLogo from "./../../../public/vendify logo white.jpg";
import SkillPattern from "./../../../public/Group 36.png";
import AboutImage from "./../../../public/Image.png";
import CareerGuideIMage from "./../../../public/career-guidance.png";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import { ProjectsPage } from "../projects/page";
import { ProjectComponent } from "../projects/components";
import { AboutComponent } from "../about/components";
import { ContactComponent } from "../contact/components";

export const HomePage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <NavBar />
      <main className="container mx-auto p-8">
        <section className="lg:flex justify-evenly items-center gap-20 py-12">
          <div className="flex flex-col items-center justify-center lg:block">
            <h1 className="text-6xl font-bold text-center lg:text-left">
              Hi, I'm Auspicious
            </h1>
            <p className="mt-4 text-5xl text-center lg:text-base text-primary">
              A software developer specializing in creating engaging and
              visually stunning web applications.
            </p>
            <Link href={"/contact"} className="text-center !my-8">
              <p className="p-4">Contact Me</p>
            </Link>
          </div>
          <div className="flex justify-center lg:block">
            <Image
              src={HeroImage}
              alt="Image"
              width={500}
              height={500}
              className="bg-primary"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div>
            <div className="italic text-3xl p-4 mt-4">
              " Grind till you become ELENIYAN."
            </div>
          </div>
          {/* <div className="border border-secondary p-4 flex justify-end">
            <p className="italic"> - Auspicious</p>
          </div> */}
        </section>
        <section className="py-12">
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold">Projects</h3>
              <div className="bg-secondary md:w-40 md:h-0.5"></div>
            </div>
            <Link href={"/projects"}>View All</Link>
          </div>
          <ProjectComponent />
        </section>
        <section className="py-12 md:">
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold">Skills</h3>
              <div className="bg-secondary md:w-40 md:h-0.5"></div>
            </div>
            <Link href={"/skills"}>View All</Link>
          </div>
          <div className="lg:flex md:block gap-12 justify-between items-center">
            <div className="lg:w-[40%] my-6 lg:my-0 flex justify-center lg:block">
              <Image
                src={SkillPattern}
                alt="vendify"
                width={500}
                height={500}
                className="bg-primary rounded-t-lg object-cover"
              />
            </div>
            <div className="md:flex gap-4 lg:w-[50%] grid grid-cols-2">
              <div className=" divide-y border">
                <div className="divide-y p-4 font-semibold m-auto">
                  Languages
                </div>
                <div className="flex gap-4 flex-wrap p-2 px-4">
                  <p>TypeScript</p>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="divide-y border">
                  <div className="divide-y p-4 px-4 font-semibold m-auto">
                    Frontend Frameworks
                  </div>
                  <div className="flex gap-4 flex-wrap p-2 px-4">
                    <p>React.js</p>
                    <p>Next.js</p>
                    <p>Angular.js</p>
                    <p>React Native</p>
                  </div>
                </div>
                <div className="divide-y border">
                  <div className="divide-y p-4 px-4 font-semibold m-auto">
                    Backend Frameworks
                  </div>
                  <div className="flex gap-4 flex-wrap p-2 px-4">
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Nest.js</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="divide-y border">
                  <div className="divide-y p-4 font-semibold m-auto">
                    Database
                  </div>
                  <div className="flex gap-4 flex-wrap p-2 px-4">
                    <p>MongoDB</p>
                  </div>
                </div>
                <div className=" divide-y border my-2">
                  <div className="divide-y p-4 font-semibold m-auto">
                    Others
                  </div>
                  <div className="flex gap-4 flex-wrap p-2 px-4">
                    <p>Formik</p>
                    <p>Ant design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold">About-me</h3>
              <div className="bg-secondary md:w-40 md:h-0.5"></div>
            </div>
            <Link href={"/about"}>View All</Link>
          </div>
          <AboutComponent />
        </section>
        <section className="py-12">
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold">Contact</h3>
              <div className="bg-secondary md:w-40 md:h-0.5"></div>
            </div>
          </div>
          <ContactComponent />
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
