import React from "react";
import Image from "next/image";
import { stacks } from "@/data/stacks";
import { certificates } from "@/data/certificates";
function Skills() {
  return (
    <>
      <div className="flexw-full flex-col  pt-24 md:pt-32 items-center">
        {/* title */}
        <div
          data-aos="fade-left"
          className="w-max mx-auto"
          data-aos-duration="1500"
        >
          <h1 className="font-black text-2xl md:text-3xl text-primary">
            Tech <span className="text-black">Stacks I use</span>
          </h1>
        </div>
        {/* cards */}
        <section className="md:flex mx-auto px-2 md:gap-5 relative w-screen md:w-[90%] scroll md:mt-10 mt-5 md:overflow-x-auto py-10">
          {stacks.map((item) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                key={item}
                className="md:w-[330px] w-full md:mb-0 mb-12  relative h-[160px] md:rounded-lg rounded-md shadow-md flex-shrink-0 bg-gray-50"
              >
                <div className="rounded-full w-16 flex justify-center items-center  bg-white h-16 shadow-md absolute left-5 -top-7">
                  <img src={item.icon} className="w-9 h-9" />
                </div>
                <div className="w-full py-12 px-4">
                  <h1 className="font-semibold text-black">{item.name}</h1>
                  <p className="text-xs text-gray-800 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="flex w-full my-1 md:my-20 flex-col pt-0 md:pt-0 items-center">
        {/* title */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h1 className="font-black text-2xl md:text-3xl text-primary">
            Certificates<span className="text-black"> that i got</span>
          </h1>
        </div>
        {/* cards */}
        <section className="md:flex px-3 md:gap-5 relative w-screen md:w-[90%] scroll md:mt-1 mt-3 md:overflow-x-auto py-10">
          {certificates.map((item) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                key={item.id}
                className="md:w-[400px] w-max mx-auto h-[200px] md:mb-0 mb-5  relative md:h-[280px] rounded-lg flex-shrink-0 shadow-none md:shadow-xl bg-white overflow-hidden"
              >
                <Image
                  src={item.image}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Skills;
