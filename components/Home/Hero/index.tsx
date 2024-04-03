import React from "react";
import { GridBackgroundDemo } from "../../ui/background/GridBg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Navbar from "@/components/shared/Navbar";

function HeroSection() {
  return (
    <div className="z-50 h-screen relative border-b-[.1px] border-slate-700">
      <GridBackgroundDemo>
        <Navbar />
        <div className="sm:w-1/2 w-full p-12">
          <h2 className="text-white sm:text-6xl text-3xl font-semibold">
            Hi, I am Mukti
          </h2>
          <h1 className="bg-gradient-to-r  font-bold from-purple-600 to-pink-600  bg-clip-text text-transparent sm:text-6xl text-3xl">
            Front End Developer
          </h1>
          <p className="mt-5 font-medium sm:text-lg text-xs sm:w-full w-full">
            I'm interested with the modern web development. I build app using on
            demand technologies such as React.js, Next.js and Tailwind.css. Feel
            free to contact me :)
          </p>

          <div className="flex mt-7 justify-center gap-5">
            <button className="bg-white shadow-md sm:px-6 px-6  sm:text-sm text-xs  rounded-full sm:py-2 py-1 text-black">
              My Projects
            </button>
            <button className="flex shadow-md border-[1px] border-slate-700 hover:border-slate-100 gap-2 items-center sm:px-6 px-6 sm:text-sm text-xs  rounded-full py-2 text-slate-50 bg-[#111]">
              <span className="text-lg">
                <MdOutlinePhoneInTalk />
              </span>
              Contac Me
            </button>
          </div>
        </div>
      </GridBackgroundDemo>
    </div>
  );
}

export default HeroSection;
