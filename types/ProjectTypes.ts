import { IconType } from "@react-icons/all-files";

interface Iicons {
  name: string;
  icon: IconType;
}

interface Ilinks {
  demo: string;
  github: string;
}

export interface IProjects<T> {
  id: number;
  title: T;
  info: T;
  image: any;
  staks: Iicons[];
  links: Ilinks;
}
