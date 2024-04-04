import { IconType } from "@react-icons/all-files";

interface Iicons {
  name: string;
  icon: IconType;
}

export interface IProjects<T> {
  id: number;
  title: T;
  info: T;
  image: any;
  staks: Iicons[];
}
