import React from "react";
import Image from "next/image";
import { ABOUT } from "../../../data/portfolio";

export const AboutComponent = () => {
  return (
    <div className="py-12">
      <div className="lg:flex md:block gap-12 justify-between items-center">
        <div className="text-gray-400 lg:w-1/2">
          <p className="my-4 text-2xl font-bold text-white">
            Hello, I&apos;m {ABOUT.name}
          </p>
          <p className="text-lg leading-relaxed mb-6">
            {ABOUT.story}
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Location</h4>
              <p className="text-white">{ABOUT.location}</p>
            </div>
            <div>
              <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Experience</h4>
              <p className="text-white">{ABOUT.experience}</p>
            </div>
            <div className="col-span-2">
              <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Specialization</h4>
              <p className="text-white">{ABOUT.specialization}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:block mt-12 lg:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/Group 36.png"
              alt="Auspicious"
              width={500}
              height={500}
              className="relative rounded-2xl object-cover bg-[#0F1115] border border-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

