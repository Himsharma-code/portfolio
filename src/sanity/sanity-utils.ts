import { createClient, groq } from "next-sanity";
import type { Profile } from "@/types/Profile";
import type { Project } from "@/types/Project";
import type { Experience } from "@/types/Experience";
import type { Skill } from "@/types/Skill";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source).url();
}

export async function getProfile(): Promise<Profile> {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      _id,
      _createdAt,
      name,
      image,
      headline,
      email,
      cvUrl,
      linkedinUrl,
      githubUrl,
      techStack,
      passions,
      education,
      availability
    }`
  );
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      description,
      tags,
      projectLink,
      image,
      category,
      type
    } | order(_createdAt desc)`
  );
}

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(
    groq`*[_type == "experience"]{
      _id,
      _createdAt,
      title,
      location,
      description,
      iconType,
      date
    } | order(date desc)`
  );
}

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    groq`*[_type == "skill"]{
      _id,
      _createdAt,
      name
    } | order(name asc)`
  );
}
