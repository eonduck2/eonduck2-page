import type { TProjectCategory } from "./projectCategory.type";

export type TProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  duration: string;
  technologies: string[];
  aboutLink?: string;
  githubLink: string;
  category: TProjectCategory;
  details?: {
    purpose: string;
    mainTask: string;
    workHistory: string[];
    detailStack: string[];
  };
};
