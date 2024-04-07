import React from "@/components/shared/React";
import { IProjects } from "@/types/types";
import { Tooltip } from "flowbite-react";

import Image from "next/image";
import Link from "next/link";

function Card({ item }: { item: IProjects<string> }) {
  return (
    <Link
      href={item.links?.demo}
      className="sm:w-[30%] w-full bg-secondary bg-opacity-5 group hover:scale-[103%] delay-100 transition-all backdrop-blur-sm shadow-lg mt-0 p-4 rounded-md dark:border-slate-400 border-slate-600 border-opacity-50 border-[.2px]"
    >
      <h1 className="font-bold text-lg">{item?.title}</h1>
      <p className="text-sm dark:text-slate-400 text-slate-600 leading-tight my-1">
        {item?.info}
      </p>
      <div className="flex gap-2 text-xs">
        {item.staks.map((icn: any) => {
          return (
            <Tooltip content={icn.name} style="auto">
              <span className="text-xl hover:text-primary cursor-pointer my-1">
                {<icn.icon />}
              </span>
            </Tooltip>
          );
        })}
      </div>
      <div className="w-full mb-3 overflow-hidden rounded-md h-44 mt-1">
        <Image
          alt={item?.title}
          className="object-cover"
          src={item?.image}
          sizes="10xw"
          width={100}
          height={100}
          style={{
            width: "100vw",
            height: "100%",
          }}
        />
      </div>
      <span className="text-base font-semibold inline-block group-underline-animation">
        {"See more ->"}
      </span>
    </Link>
  );
}

export default Card;
