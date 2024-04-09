import React, { useEffect, useState } from "react";
import { Arizonia } from "next/font/google";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import TogleTheme from "./TogleTheme";
import { AnimatePresence, animate, motion } from "framer-motion";

const satisfy = Arizonia({
  subsets: ["latin"],
  weight: "400",
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
  {
    name: "Blog",
    href: "/blog",
  },
];
const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function NavbarMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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

  const initialNavbar = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.3, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: [0.12, 0, 0.3, 0],
      },
    },
  };

  const linkNavbar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      y: "30vh",
      transition: {
        duration: 2,
      },
    },
  };

  const ulInitial = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <nav
      className={` py-2 flex z-[100] dark:text-white items-center justify-between px-2 right-0 top-0 backdrop-blur-lg  bg-transparent left-0 fixed ${
        windowY >= 100
          ? "border-b-[.7px]  bg-opacity-20 backdrop-blur-md dark:border-slate-800 dark:bg-opacity-30 border-slate-300"
          : null
      }`}
    >
      <Link href={"/"} className={`${satisfy.className} text-2xl`}>
        MuktI
      </Link>
      <span className="z-50">
        <Hamburger toggle={setIsOpen} toggled={isOpen} size={22} />
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={initialNavbar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="items-center z-40 dark:bg-secondary bg-white origin-top h-screen justify-center fixed top-0 right-0 left-0 w-full font-semibold"
          >
            <motion.ul
              variants={ulInitial}
              initial="initial"
              animate="open"
              className="h-full gap-10 text-lg  flex flex-col px-10 py-20"
            >
              {navLinks.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <div
                    className={`overflow-hidden font-[500] dark:text-white text-secondary `}
                  >
                    <motion.div
                      variants={linkNavbar}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link
                        onClick={() => setIsOpen(false)}
                        key={idx}
                        href={item?.href}
                        className={`${
                          isActive ? "active" : null
                        } underline-animation`}
                      >
                        {item?.name}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarMobile;
