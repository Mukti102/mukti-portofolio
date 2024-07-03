import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Project from "@/app/(projects)/Projects/page";
import { teachStack } from "@/data/projects/projects";
function CardProjects({ project }: { project: any }) {
  return (
    <div key={project.id} className="md:w-[30%] text-black w-full  my-4 md:m-3">
      <div className="border-[1px] bg-gray-100 out-shadow w-full p-4 border-slate-100 rounded-sm">
        <div className="md:min-w-48 border-[1.3px] group border-gray-200 md:h-48 rounded-md min-w-full relative overflow-hidden h-52">
          <div className="absolute left-0 top-0 right-0 bottom-96 group-hover:bottom-0 transition-all duration-500 bg-gray-300 bg-opacity-20  backdrop-blur-sm ease-in-out flex justify-center items-center">
            <a
              href="#"
              className="opacity-0 z-[1000] group-hover:opacity-100 transition-all duration-500 bg-white shadow-sm text-black w-7 text-lg h-7 rounded-full flex justify-center items-center delay-300"
            >
              <FaGithub />
            </a>
          </div>
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
          <h1 className="font-bold text-black text-xl">{project.title}</h1>
        </div>
        <div className="my-2 flex">
          {project.techStack.map((item: teachStack) => {
            return (
              <span
                className={`text-[11px] mr-2 rounded-sm bg-${item.color}-200 px-2 py-0.5 text-${item.color}-700 font-semibold`}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        <div className="my-2">
          <p className="text-sm text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            sint!
          </p>
        </div>
        <div className="flex gap-3 mt-5 py-1">
          <Link
            href={`Projects/${String(project.id)}`}
            className="flex hover:bg-primary bg-primary text-white px-2 py-1 rounded-[3px] items-center gap-2 text-sm"
          >
            Details{" "}
            <span className="bg-white text-primary rounded-full text-[8px] flex justify-center items-center w-3 h-3">
              <FaArrowRight />
            </span>
          </Link>
          <a
            href={project.link}
            className="flex border-[1.4px] group hover:bg-primary hover:text-white border-pink-500 px-2 py-1 rounded-[3px] items-center gap-2 text-sm"
          >
            Preview{" "}
            <span className="text-primary group-hover:text-white rounded-full text-sm flex justify-center items-center w-4 h-4">
              <FaEye />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
