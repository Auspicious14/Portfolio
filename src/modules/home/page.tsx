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
                <h1 className="text-3xl font-semibold text-white mb-2">
                  Vendify
                </h1>
                <p>
                  A multi-vendor E-commerce platform designed to ease both
                  vendor and customer shopping experience.
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
                <p>
                  A platform to help people navigate and choose their careers.
                </p>

                <Link
                  href="https://career-guidance.com.ng"
                  className="text-blue-600 hover:underline"
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
                <h1 className="text-3xl font-semibold text-white mb-2">
                  Cv-Craft
                </h1>
                <p>
                  A platform to help job seekers craft professional and
                  beautiful CVs.
                </p>

                <Link
                  href="https://cv-craft.netlify.app"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out
                </Link>
              </div>
            </div>
          </div>
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
            <div className="flex gap-4 lg:w-[50%]">
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
          <div className="lg:flex md:block gap-12 justify-between items-center">
            <div className="text-secondary lg:w-1/2">
              <p className="my-4 text-xl text-justify">
                Hello, I'm Auspicious!
              </p>
              <p>
                I'm a self-taught software developer based in Ilorin, Nigeria. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </p>
              <p className="my-3 text-justify">
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:block">
              <Image
                src={SkillPattern}
                alt="vendify"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold">Contact</h3>
              <div className="bg-secondary md:w-40 md:h-0.5"></div>
            </div>
          </div>
          <div className="lg:flex justify-between items-start">
            <div className="text-secondary lg:w-1/2">
              <p className="my-3">
                I'm available for both freelance and full-time roles. If you
                need to enquire more, you can hit me up.
              </p>
            </div>
            <div className=" flex justify-center ">
              <div className="border p-4">
                <div className=" p-4 font-semibold m-auto">Message me</div>
                <div className="flex gap-2 my-2 items-center">
                  <IoMdMail size={20} />
                  <p>uthmanabdulganiyu20189@gmail.com</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaWhatsapp className="text-green-700" size={20} />
                  <Link href={`https://wa.me/+2347010018536`} target="_blank">
                    (+234) 7010018536
                  </Link>
                </div>
                <div className="flex gap-2 my-2 items-center">
                  <FaGithub size={20} />
                  <Link
                    href={"https://github.com/Auspicious14"}
                    target="_blank"
                  >
                    Auspicious
                  </Link>
                </div>
                <div className="flex gap-2 my-2 items-center">
                  <FaLinkedin size={20} />
                  <Link
                    href={"https://www.linkedin.com/in/uthman-abdulganiyu/"}
                    target="_blank"
                  >
                    Uthman Abdulganiyu
                  </Link>
                </div>
                <div className="flex gap-2 my-2 items-center">
                  <FaTwitter size={20} />
                  <Link href={"https://x.com/_Auspy_"} target="_blank">
                    Auspicious
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Auspicious. All rights reserved.</p>
      </footer>
    </div>
  );
};
