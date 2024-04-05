import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-full dark:bg-secondary sm:pt-16 py-5">
      <div className="sm:w-[90%] w-full mx-auto dark:bg-secondary sm:pt-10 pt-5 border-t-[1.4px] sm:px-5 px-3 border-slate-400 flex justify-center flex-col items-center">
        <div>
          <h1 className="font-semibold sm:text-sm text-xs text-slate-300">
            Reach me out
          </h1>
        </div>
        <div className="flex gap-4 text-slate-300 sm:my-3 my-2">
          <Link
            href={""}
            className="sm:text-2xl text-xl hover:text-white cursor-pointer"
          >
            <MdEmail />
          </Link>
          <Link
            href={""}
            className="sm:text-2xl text-xl hover:text-white cursor-pointer"
          >
            <FaGithub />
          </Link>
          <Link
            href={""}
            className="sm:text-2xl text-xl hover:text-white cursor-pointer"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="mt-5">
          <h2 className="sm:text-sm text-xs font-[400] text-slate-300">
            ©2024 Abdul Mukti created
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
