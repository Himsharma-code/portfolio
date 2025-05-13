import type { Image } from "sanity";

export interface Project {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  image: Image;
  category: string;
  type: string;
}
