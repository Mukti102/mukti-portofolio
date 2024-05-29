"use client";
import Table from "@/components/ui/Table";
import Image from "next/image";
import React from "react";
import useZustand from "@/hooks/useZustand";

function page() {
  const { activeSongIndex } = useZustand();
  return (
    <div className="dark:bg-secondary sm:pb-0 pb-20 bg-white">
      <section
        className={`w-full ${
          activeSongIndex !== null ? "pb-20" : ""
        }  h-full overflow-y-auto pb-28  dark:text-slate-100 sm:px-10  px-0 z-50  dark:bg-opacity-30 bg-opacity-5 pt-24`}
      >
        <div className="w-full px-5 flex  sm:flex-row flex-col items-center  sm:gap-5">
          <span className="sm:w-64 out-shadow p-0 sm:h-64 w-64 h-64  shadow-sm overflow-hidden rounded-sm">
            <Image
              src={
                //   "https://i.pinimg.com/564x/bc/dc/39/bcdc39adb4f2d886859bc7b866c6e7ee.jpg"
                "https://i.pinimg.com/564x/b4/6f/f3/b46ff36163ac1762a600e979ad97c3b4.jpg"
              }
              width={70}
              height={70}
              className="w-full h-full object-contain"
              sizes="10xw"
              alt="'s"
            />
          </span>
          <div className="flex flex-col mt-3 gap-2 sm:mt-0 sm:justify-between justify-center  sm:h-64 h-32">
            <span className="sm:font-semibold sm:text-base text-xs font-normal">
              Playlits
            </span>
            <div className="flex flex-col sm:gap-2 gap-1">
              <h1 className="sm:text-5xl text-2xl font-bold">
                My Top Favorite song
              </h1>
              <p className="sm:w-[70%] w-full sm:text-sm text-[.7rem] dark:text-slate-300 text-slate-700">
                List of my favorite song. Including twice, avenged sevenfold and
                others. Hope you guys enjoy ^^
              </p>
            </div>
            <p className="sm:text-xs text-[.5rem] sm:0 mt-1 dark:text-slate-300 text-slate-700">
              Made by{" "}
              <span className="font-semibold dark:text-slate-200 text-slate-800">
                Mukti
              </span>
            </p>
          </div>
        </div>
        <Table />
      </section>
    </div>
  );
}

export default page;
