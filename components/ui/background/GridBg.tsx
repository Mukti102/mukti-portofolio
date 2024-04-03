"use client";
import { useTheme } from "next-themes";
import React from "react";

export function GridBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  const { themes, setTheme } = useTheme();
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="h-full absolute w-full  dark:bg-white bg-[#1111]  dark:bg-grid-black/[0.2] bg-grid-white/[.1] top-0 z-10 flex items-center justify-center">
        <div className="mx-auto absolute blur-2xl opacity-75 w-full h-full flex flex-wrap justify-center -z-10">
          <div className="contentGradient"></div>
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
      </div>
    </div>
  );
}
