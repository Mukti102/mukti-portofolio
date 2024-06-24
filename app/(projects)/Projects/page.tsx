import React from "react";
import { stacks } from "@/data/stacks";
import Link from "next/link";
import { Projects } from "@/data/projects/projects";
import CardProjects from "@/components/pages/Projects/cards";
function page() {
  return (
    <div className="w-full md:mt-3 py-32 bg-gray-100 gap-10 flex flex-col px-6 md:px-10 md:justify-center ">
      {/* title */}
      <div className="mx-auto">
        <h1 className="font-black text-black text-3xl">
          Projects <span className="text-pink-500">Latest</span>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="md:flex block  gap-10 items-center w-full"
      >
        <div className="w-full md:flex-row flex  flex-col md:justify-start justify-center flex-wrap gap-1">
          {Projects.map((item) => {
            return <CardProjects project={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
