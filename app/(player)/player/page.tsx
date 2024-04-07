import Table from "@/components/ui/Table";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="w-full overflow-y-auto h-screen px-10 z-50 bg-black dark:bg-opacity-30 bg-opacity-5 pt-24">
      <div className="w-full flex gap-5">
        <span className="w-60 h-60 shadow-sm overflow-hidden rounded-sm">
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
        <div className="flex flex-col justify-between">
          <span className="font-semibold">Playlits</span>
          <h1 className="text-5xl font-bold">My Top Favorite song</h1>
          <p className="w-[70%] text-sm dark:text-slate-300 text-slate-700">
            List of my favorite song. Including twice, avenged sevenfold and
            others. Hope you guys enjoy ^^
          </p>
          <p className="text-xs dark:text-slate-300 text-slate-700">
            Made by{" "}
            <span className="font-semibold dark:text-slate-200 text-slate-800">
              Mukti
            </span>
          </p>
        </div>
      </div>
      <Table />
    </section>
  );
}

export default page;
