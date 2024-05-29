import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
import ai from "@/public/assets/ai.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* hero */}
      <div
        className={`md:bg-grid-black/15  bg-grid-black/0 w-full pt-28 font-bold block  md:flex items-center justify-between h-max  md:gap-5 px-5 md:px-20`}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:flex-1 z-50 pl-0 pr-0 md:pl-5 md:pr-32 h-max  md:leading-[50px]"
        >
          <h2 className="md:text-2xl text-black text-xl">Hello It's me</h2>
          <h1 className="font-black text-[2rem] md:text-[3rem] text-pink-500">
            Rachel
          </h1>
          <span className="md:text-3xl text-black text-xl">
            And I am{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Student",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "FrontEnd Developer",
                1000,
                "Web Developer",
                1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
          <p className="md:text-[16px] w-full leading-5 md:leading-6 text-gray-500 font-medium text-xs my-2  md:my-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            aliquam corrupti veritatis quo placeat voluptates facilis.
            Consequatur consectetur vitae laboriosam?
          </p>
          <div className="my-2 flex w-full md:mt-0 mt-5 gap-5">
            <button className="out-shadow text-black bg-white   w-max md:px-3 px-2 py-1 md:py-2 text-xl flex justify-center items-center rounded-md">
              <FaGithub />
            </button>
            <button className="out-shadow text-black bg-white w-max md:px-3 px-2 py-1 md:py-2 text-xl flex justify-center items-center rounded-md">
              <FaInstagram />
            </button>
            <button className="out-shadow text-black bg-white  w-max md:px-3 px-2 py-1 md:py-2 text-xl flex justify-center items-center rounded-md">
              <FaTiktok />
            </button>
            <button className="out-shadow text-black bg-white  w-max md:px-3 px-2 py-1 md:py-2 text-xl flex justify-center items-center rounded-md">
              <FaLinkedin />
            </button>
          </div>
          <div className="mt-5">
            <button className="md:px-12 px-10   rounded-md text-gray-800 md:py-3 py-2 text-lg out-shadow bg-white">
              Hire Me
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="md:w-max md:z-50 z-50 bg-white w-full"
        >
          <div className="out-shadow md:mt-0 my-10  md:p-10 p-0 rounded-md flex justify-center md:w-max w-full py-5">
            {/* <img src={ai} alt="AI illustration" className="w-[19rem]" /> */}
            <Image
              alt="hero"
              src={ai}
              className="w-full h-full z-50 object-cover"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div
          className={`absolute hidden pointer-events-none  bottom-0 inset-0 md:flex items-center justify-center dark:bg-secondary bg-[#fff]  [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]`}
        ></div>
      </div>
    </>
  );
}

export default Hero;
