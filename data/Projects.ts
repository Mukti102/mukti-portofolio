import { IProjects } from "@/types/ProjectTypes";
import imsak_app from "@/public/imsak-app.png";
import webStore from "@/public/web store.png";
import webMovie from "@/public/web movie .png";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export const projects: IProjects<string>[] = [
  {
    id: 1,
    title: "VieFlix",
    info: "An movie website that you can search your favorite movie",
    image: webMovie,
    staks: [
      {
        name: "Reat js",
        icon: FaReact,
      },
      {
        name: "Tailwindcss",
        icon: SiTailwindcss,
      },
    ],
    links: {
      demo: "https://movie-web-app-five.vercel.app/",
      github: "",
    },
  },
  {
    id: 2,
    title: "Ecommers",
    info: "An Ecomers website that i have build use react js",
    image: webStore,
    staks: [
      {
        name: "Reat js",
        icon: FaReact,
      },
      {
        name: "Tailwindcss",
        icon: SiTailwindcss,
      },
    ],
    links: {
      demo: "https://web-store-app-eight.vercel.app/",
      github: "",
    },
  },
  {
    id: 3,
    title: "Imsak-app",
    info: "This is a website that can help you being a productive person in ramadhan month",
    image: imsak_app,
    staks: [
      {
        name: "Next js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwindcss",
        icon: SiTailwindcss,
      },
      {
        name: "Firebase",
        icon: IoLogoFirebase,
      },
    ],
    links: {
      demo: "https://awas-imsak.vercel.app/",
      github: "",
    },
  },
];
