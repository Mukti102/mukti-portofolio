import React, { useEffect, useState } from "react";
import { Arizonia } from "next/font/google";

const satisfy = Arizonia({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  const [windowY, setWindowY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white sm:py-4 py-3 flex items-center justify-between sm:px-12 px-5 right-0 top-0 bg-transparent backdrop-blur-md left-0 fixed ${
        windowY >= 100 ? "border-b-[.7px] border-slate-700" : null
      }`}
    >
      <span className={`${satisfy.className} sm:text-4xl text-2xl`}>MuktI</span>
      <ul className="sm:flex hidden w-1/3 justify-evenly font-semibold sm:text-[1rem]">
        <li className="li-underline">Home</li>
        <li className="li-underline">Player</li>
        <li className="li-underline">Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
