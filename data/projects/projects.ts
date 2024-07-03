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

export type teachStack = {
  name: string;
  color: string;
};

export interface Projects {
  id: number;
  image: any;
  title: string;
  description: string;
  techStack: teachStack[];
  link: string;
}

export const Projects: Projects[] = [
  {
    id: 1,
    title: "Movie",
    description: "",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "teal",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: movie,
    link: "https://movie-web-app-five.vercel.app/",
  },
  {
    id: 2,
    title: "Eccomerse",
    description: "",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "teal",
      },
      {
        name: "Tailwindcss",
        color: "sky",
      },
    ],
    image: store,
    link: "https://web-store-app-906e0.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Awas Imsak",
    description: "",
    // techStack: ["Next Js", "Taiwindcss", "Typescript"],
    techStack: [
      {
        name: "Next Js",
        color: "slate",
      },
      {
        name: "Tailwindcss",
        color: "pink",
      },
      {
        name: "Typescript",
        color: "blue",
      },
    ],
    image: imsak,
    link: "https://awas-imsak.vercel.app/",
  },
  {
    id: 4,
    title: "MBlogs",
    description: "",
    // techStack: ["Laravel", "PHP", "Tailwindcss"],
    techStack: [
      {
        name: "Laravel",
        color: "red",
      },
      {
        name: "PHP",
        color: "purple",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: blog,
    link: "https://awas-imsak.vercel.app/",
  },
];
