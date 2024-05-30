import React from "react";
import Link from "next/link";
function layout({ children }: { children: React.ReactElement }) {
  const stacks: any = [
    {
      id: 1,
      name: "React Js",
      link: "ReactJs",
    },
    {
      id: 2,
      name: "Next Js",
      link: "NextJs",
    },
    {
      id: 3,
      name: "Laravel",
      link: "Laravel",
    },
    {
      id: 4,
      name: "HTML CSS JS",
      link: "HTML",
    },
  ];
  return (
    <div className="w-full md:mt-0 py-32  bg-gray-100 gap-10 md:h-screen flex flex-col px-10 md:justify-center justify-start  items-cente">
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
        {/* buttons */}
        <div className="md:w-[25%] w-full  md:block flex mb-7 flex-wrap  md:gap-5 gap-4">
          {stacks.map((item: any, index: number) => {
            return (
              <Link
                href={"/Projects/" + item.link}
                key={index}
                className="out-shadow  my-1 md:my-5 w-max px-5 flex justify-center hover:text-pink-500 md:w-full capitalize py-1 md:py-3.5 text-xs md:text-[1rem] text-gray-800 rounded-sm md:rounded-md font-semibold"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {/* cards */}
        {children}
      </div>
    </div>
  );
}

export default layout;
