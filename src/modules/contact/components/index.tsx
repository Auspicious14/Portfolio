import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ContactComponent = () => {
  return (
    <div>
      <div className="lg:flex justify-between items-start">
        <div className="text-secondary lg:w-1/2">
          <p className="my-3">
            I'm available for both freelance and full-time roles. If you need to
            enquire more, you can hit me up.
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
              <Link href={"https://github.com/Auspicious14"} target="_blank">
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
    </div>
  );
};
