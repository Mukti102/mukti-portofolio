import blog from "@/public/assets/Projects/Screenshot 2024-05-26 211712.png";
import movie from "@/public/assets/Projects/web movie .png";
import store from "@/public/assets/Projects/web store.png";
import imsak from "@/public/imsak-app.png";
import absensi from "@/public/assets/Projects/1.png";
import {
  blogSlider,
  eccomersSlider,
  imsakSlider,
  movieSlider,
  absensiSLider,
} from "./slider-asset";

export type teachStack = {
  name: string;
  color: string;
};

export interface IProjects {
  id: number;
  image: any;
  title: string;
  description: string;
  techStack: teachStack[];
  slider: any[];
  github: string;
  link: string;
}

export const Projects: IProjects[] = [
  {
    id: 1,
    title: "Web Movie ",
    description: "Movie",
    github: "https://github.com/Mukti102/movie-web-app",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "green",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: movie,
    slider: movieSlider,
    link: "https://movie-web-app-five.vercel.app/",
  },
  {
    id: 2,
    title: "Web Store Eccomerse",
    description: "Eccomerse",
    github: "https://github.com/Mukti102/web-store-app",
    // techStack: ["React Js", "Taiwindcss"],
    techStack: [
      {
        name: "React Js",
        color: "green",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
    ],
    image: store,
    slider: eccomersSlider,
    link: "https://web-store-app-906e0.firebaseapp.com/",
  },
  {
    id: 3,
    title: "Awas Imsak",
    description: "ImsakApp",
    github: "https://github.com/Mukti102/Awas-Imsak",
    // techStack: ["Next Js", "Taiwindcss", "Typescript"],
    techStack: [
      {
        name: "Next Js",
        color: "slate",
      },
      {
        name: "Tailwindcss",
        color: "blue",
      },
      {
        name: "Typescript",
        color: "yellow",
      },
    ],
    image: imsak,
    slider: imsakSlider,
    link: "https://awas-imsak.vercel.app/",
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Mblogs",
    github: "#",
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
    slider: blogSlider,
    link: "#",
  },
  {
    id: 5,
    title: "APLIKASI ABSENSI SEKOLAH MENENGAH",
    description: "AbsensiApp",
    github: "#",
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
    image: absensi,
    slider: absensiSLider,
    link: "#",
  },
];
