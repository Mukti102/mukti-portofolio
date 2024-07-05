"use client";
import { Carousel } from "flowbite-react";
import React from "react";
import { IProjects } from "@/types/types";
import Image from "next/image";
function Caraosel({ project }: { project: any }) {
  return (
    <div className="w-full out-shadow h-52 md:h-[400px]">
      <Carousel>
        {project?.slider?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <Image
                src={item?.src}
                alt="High resolution image"
                quality={100}
                className="w-full brightness-90 h-full object-cover"
                width={1920} // Set desired width
                height={1080} // Set desired height
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Caraosel;
