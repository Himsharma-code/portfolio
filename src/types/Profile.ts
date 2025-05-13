import type { Image } from "sanity";

export interface Profile {
  _id: string;
  _createdAt: Date;
  name: string;
  image: Image;
  headline: string;
  email: string;
  cvUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  techStack: string[];
  passions: string[];
  education: string;
  availability: string;
}
