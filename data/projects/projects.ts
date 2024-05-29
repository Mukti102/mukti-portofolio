import blog from "@/public/assets/Projects/Screenshot 2024-05-26 211712.png";
import movie from "@/public/assets/Projects/web movie .png";
import store from "@/public/assets/Projects/web store.png";
import imsak from "@/public/imsak-app.png";
export interface IReact {
  id: number;
  image: any;
  link: string;
}

export const ReactJs: IReact[] = [
  {
    id: 1,
    image: movie,
    link: "https://movie-web-app-five.vercel.app/",
  },
  {
    id: 2,
    image: store,
    link: "https://web-store-app-906e0.firebaseapp.com/",
  },
];

interface INextJs {
  id: number;
  image: any;
  link: string;
}

export const NextJs: INextJs[] = [
  {
    id: 1,
    image: imsak,
    link: "https://awas-imsak.vercel.app/",
  },
];

interface ILaravel {
  id: number;
  image: any;
  link: string;
}

export const Laravel: ILaravel[] = [
  {
    id: 1,
    image: blog,
    link: "",
  },
];

export default Laravel;
