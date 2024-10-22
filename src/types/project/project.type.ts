import type { TProjectCategory } from "./projectCategory.type";

export type TProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  technologies: string[];
  aboutLink?: string;
  githubLink: string;
  category: TProjectCategory;
};
