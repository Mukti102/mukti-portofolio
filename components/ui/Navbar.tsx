import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Player",
    href: "/player",
  },
];

function Navbar() {
  const pathname = usePathname();
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
      className={`${
        inter.className
      } sm:py-4 py-3 sm:flex z-[100] hidden dark:text-white items-center justify-between sm:px-12 px-5 right-0 top-0  bg-transparent left-0 fixed ${
        windowY >= 100
          ? "border-b-[.7px]  bg-opacity-20 dark:bg-black bg-white  dark:border-slate-800 dark:bg-opacity-30 border-slate-300"
          : null
      }`}
    >
      <div>
        <span className={`sm:text-4xl text-xl font-semibold`}>
          M<span className="gradient-text">KT</span>
        </span>
      </div>
      <ul className="sm:flex items-center hidden w-1/3 justify-evenly font-semibold sm:text-[1rem]">
        {navLinks.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={idx}
              href={item?.href}
              className={`${isActive ? "active" : null} underline-animation`}
            >
              {item?.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
