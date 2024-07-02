import blog from "@/public/assets/Projects/Screenshot 2024-05-26 211712.png";
import movie from "@/public/assets/Projects/web movie .png";
import store from "@/public/assets/Projects/web store.png";
import imsak from "@/public/imsak-app.png";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
export interface Projects {
  id: number;
  image: any;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export const Projects: Projects[] = [
  {
    id: 1,
    title: "Movie",
    description: "",
    techStack: ["React Js", "Taiwindcss"],
    image: movie,
    link: "https://movie-web-app-five.vercel.app/",
  },
  {
    id: 2,
    title: "Eccomerse",
    description: "",
    techStack: ["React Js", "Taiwindcss"],
    image: store,
    link: "https://web-store-app-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Awas Imsak",
    description: "",
    techStack: ["Next Js", "Taiwindcss", "Typescript"],
    image: imsak,
    link: "https://awas-imsak.vercel.app/",
  },
  {
    id: 4,
    title: "MBlogs",
    description: "",
    techStack: ["Laravel", "PHP", "Tailwindcss"],
    image: blog,
    link: "https://awas-imsak.vercel.app/",
  },
];
