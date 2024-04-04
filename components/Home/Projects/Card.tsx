import React from "@/components/shared/React";
import { IProjects } from "@/types/ProjectTypes";
import Image from "next/image";

function Card({ item }: { item: IProjects<string> }) {
  return (
    <div className="sm:w-[30%] w-full shadow-lg mt-0 p-4 rounded-md border-purple-200 border-opacity-50 border-[.2px]">
      <h1 className="font-bold text-lg">{item?.title}</h1>
      <p className="text-sm text-slate-300 my-1">{item?.info}</p>
      <div className="flex gap-2 text-xs">
        {item.staks.map((icn: any) => {
          return (
            <span className="text-2xl hover:text-purple-500 cursor-pointer my-1">
              {<icn.icon />}
            </span>
          );
        })}
      </div>
      <div className="w-full mb-3 overflow-hidden rounded-md h-44 mt-1 bg-purple-700">
        <Image
          alt={item?.title}
          className="w-full h-full object-cover"
          src={item?.image}
          width={100}
          height={100}
        />
      </div>
      <span className="text-base font-semibold">{"See more ->"}</span>
    </div>
  );
}

export default Card;
