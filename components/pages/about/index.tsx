"use client";
import React from "react";
import Image from "next/image";
import ai from "@/public/assets/ai.png";

const pdf = "https://mukti-portofolio.vercel.app/mukti.pdf";
function About() {
  const downloadCv = (url: string) => {
    if (typeof document !== "undefined") {
      const fileName: any = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.append(aTag);
      aTag.click();
      document.body.removeChild(aTag);
    }
  };

  return (
    <div className="w-full md:flex-row-reverse flex-col pt-10 mb-10 md:mt-0 mt-10 font-bold md:flex items-center h-screen gap-24 px-5 md:px-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="flex-1 touch-element h-max leading-[50px]"
      >
        <h1 className="font-bold mb-0 md:mb-5 text-[2.5rem] md:text-[3rem] text-black">
          About <span className="text-primary">Me</span>
        </h1>
        <span className="md:text-xl text-lg text-primary">
          And I am{" "}
          <span className="text-primary  capitalize">fullstack developer </span>
        </span>
        <p className="md:text-[16px] text-[14px] leading-5 md:leading-6 md:text-gray-500 text-gray-500 font-semibold my-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          aliquam corrupti veritatis quo placeat voluptates facilis. Consequatur
          consectetur vitae laboriosam?
        </p>
        <div className="my-5">
          <button
            onClick={() => downloadCv(pdf)}
            className="md:px-12 px-9 py-2 bg-gray-50 rounded-md text-gray-800 md:py-3 md:text-lg text-sm out-shadow"
          >
            Download CV
          </button>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="w-max mx-auto"
      >
        <div className="out-shadow p-10 md:p-10 rounded-md md:rounded-tr-[200px] hover:rounded-md md:hover:rounded-tl-[200px] hover:rounded-tr-none flex justify-center transition-all duration-200 ease-out md:w-max">
          <Image
            width={200}
            height={200}
            src={ai}
            alt=""
            className="md:w-[19rem] w-[15rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
