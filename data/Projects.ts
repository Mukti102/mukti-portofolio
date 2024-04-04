import { IProjects } from "@/types/ProjectTypes";
import webMovie from "@/public/webstore.png";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

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
  },
  {
    id: 2,
    title: "Ecommers",
    info: "An Ecomers website that i have build use react js",
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
  },
  {
    id: 2,
    title: "Ecommers",
    info: "An Ecomers website that i have build use react js",
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
  },
];
