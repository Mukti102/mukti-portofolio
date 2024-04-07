import { IconType } from "@react-icons/all-files";

interface Iicons {
  name: string;
  icon: IconType;
}

interface Ilinks {
  demo: string;
  github: string;
}

export interface Iskills {
  title: string;
  description: string;
  icon: any;
}

export interface IProjects<T> {
  id: number;
  title: T;
  info: T;
  image: any;
  staks: Iicons[];
  links: Ilinks;
}

export interface Isongs<T> {
  title: T;
  artis: T;
  song: T;
  thumbnail: T;
  duration: T;
}
