import React from "react";
import Image from "next/image";
import SkillPattern from "./../../../../public/Group 36.png";
export const AboutComponent = () => {
  return (
    <div>
      <div className="lg:flex md:block gap-12 justify-between items-center">
        <div className="text-secondary lg:w-1/2">
          <p className="my-4 text-xl text-justify">
            Hello, I&apos;m Auspicious!
          </p>
          <p>
            I&apos;m a self-taught software developer based in Ilorin, Nigeria.
            I can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences.
          </p>
          <p className="my-3 text-justify">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
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
    </div>
  );
};
