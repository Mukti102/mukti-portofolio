import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
function CardProjects({ stacks }: { stacks: any }) {
  return (
    <div className="flex-1 gap-5 flex  flex-wrap">
      {stacks?.map((item: any) => {
        return (
          <a
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            href={item.link}
            key={item.id}
            className="md:min-w-64  min-w-full  relative overflow-hidden rounded-sm h-40 out-shadow"
          >
            <Image
              alt={item.name}
              width={200}
              height={200}
              src={item.image}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute top-0 bottom-0 left-0 right-0 z-50 hover:backdrop-blur-none transition-all duration-300 cursor-pointer `}
            ></div>
          </a>
        );
      })}
    </div>
  );
}

export default CardProjects;
