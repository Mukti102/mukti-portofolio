import React, { useEffect } from "react";
import { GridBackgroundDemo } from "../../ui/background/GridBg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Navbar from "@/components/shared/Navbar";
import { useTheme } from "next-themes";
function HeroSection() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <section className="z-50 h-screen flex justify-center items-center relative border-b-[.1px] dark:border-slate-700 border-slate-300">
        <Navbar />
        <div className="sm:w-1/2 sm:p-0 w-full p-10">
          <h2
            className="sm:text-6xl text-4xl sm:font-bold
           font-semibold"
          >
            Hi, I am Mukti
          </h2>
          <h1 className="bg-gradient-to-r font-[700] sm:mt-2 mt-1 from-purple-600 to-pink-600  bg-clip-text text-transparent sm:text-6xl  text-4xl">
            Front End Developer
          </h1>
          <p className="mt-5 sm:font-[500] font-[400] sm:text-lg text-xs sm:w-full w-full">
            I'm interested with the modern web development. I build app using on
            demand technologies such as React.js, Next.js and Tailwind.css. Feel
            free to contact me :)
          </p>

          <div className="flex mt-7 justify-center gap-5">
            <button
              onClick={() => setTheme("dark")}
              className="bg-white shadow-md sm:px-6 px-6  sm:text-sm text-xs  rounded-full sm:py-2 py-1 text-black"
            >
              My Projects
            </button>
            <button
              onClick={() => setTheme("light")}
              className="flex shadow-md border-[1px] border-slate-700 hover:border-slate-100 gap-2 items-center sm:px-6 px-6 sm:text-sm text-xs  rounded-full py-2 text-slate-50 bg-[#111]"
            >
              <span className="text-lg">
                <MdOutlinePhoneInTalk />
              </span>
              Contac Me
            </button>
          </div>
        </div>
      </section>
      <GridBackgroundDemo />
    </>
  );
}

export default HeroSection;
