import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
import Toggle from "./Toggle";
function Navbar() {
  const lists: any[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/About",
      name: "About",
    },
    {
      href: "/Skills",
      name: "Skills",
    },
    {
      href: "/Projects/ReactJs",
      name: "Projects",
    },
    {
      href: "/player",
      name: "Player",
    },
    {
      href: "/Contact",
      name: "Contact",
    },
  ];
  return (
    <nav className="flex w-screen  h-max z-50 text-black shadow-md px-4 md:px-10 fixed bg-white  right-0 top-0 left-0 items-center md:w-full justify-between py-3">
      {/* logo */}
      <a
        href="/"
        className="font-bold z-50 w-max px-3 md:px-5 md:py-1 out-shadow rounded-md h-max"
      >
        <h1 className="text-black text-lg md:text-2xl">
          CHEV<span className="text-pink-500">DEV</span>
        </h1>
      </a>
      {/* ul list */}
      <ul className="md:flex hidden font-semibold gap-5 text-[17px] capitalize">
        {lists.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href} className="hover:text-pink-500">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="h-14 rounded-tr-xl rounded-tl-xl  w-screen items-center gap-6 flex md:hidden bg-pink-500 fixed bottom-0 text-white  right-0 left-0">
        {/* <a className="text-2xl flex-1 flex justify-center">
          <FaLaptopCode />
        </a> */}
        <Link href="/About" className="text-[19px] flex-1 flex justify-center">
          <FaBookReader />
        </Link>
        <Link href="/Skills" className="text-lg flex-1 flex justify-center">
          <BsStack />
        </Link>
        <Link href="/" className="text-2xl flex-1 flex justify-center">
          <FaHome />
        </Link>
        <Link
          href="/Projects/ReactJs"
          className="text-xl flex-1 flex justify-center"
        >
          <FaLaptopCode />
        </Link>
        <Link href="/Contact" className="text-xl flex-1 justify-center flex">
          <IoPerson />
        </Link>
      </div>
      {/* togle  */}
      <Toggle />
    </nav>
  );
}

export default Navbar;
