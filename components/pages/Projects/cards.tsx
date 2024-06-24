import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
function CardProjects({ project }: { project: any }) {
  return (
    <div key={project.id} className="md:w-[30%] w-full  my-4 md:m-3">
      <div className="border-[1px] bg-gray-100 out-shadow w-full p-4 border-slate-200 rounded-sm">
        <div className="md:min-w-48 border-[1.3px] border-gray-400 md:h-48 rounded-md min-w-full relative overflow-hidden h-52">
          <Image
            alt={project.name}
            width={200}
            height={200}
            src={project?.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-50 hover:backdrop-blur-none transition-all duration-300 cursor-pointer"></div>
        </div>
        <div className="my-2">
          <h1 className="font-bold text-xl">{project.title}</h1>
        </div>
        <div className="my-2 flex">
          {project.techStack.map((item: [string]) => {
            return (
              <span className="text-xs mr-2 bg-slate-200 px-2 py-1 text-black font-semibold">
                {item}
              </span>
            );
          })}
        </div>
        <div className="my-2">
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            sint!
          </p>
        </div>
        <div className="flex gap-3 mt-5 py-1">
          <button className="flex hover:bg-pink-600 bg-pink-500 text-white px-2 py-1 rounded-[3px] items-center gap-2 text-sm">
            Details{" "}
            <span className="bg-white text-pink-500 rounded-full text-xs flex justify-center items-center w-4 h-4">
              <FaArrowRight />
            </span>
          </button>
          <a
            href={project.link}
            className="flex border-[1.4px] hover:bg-pink-500 hover:text-white border-pink-500 px-2 py-1 rounded-[3px] items-center gap-2 text-sm"
          >
            Preview{" "}
            <span className="bg-white text-pink-500 rounded-full text-xs flex justify-center items-center w-4 h-4">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
