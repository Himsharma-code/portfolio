"use client";
import type { Project } from "@/types/Project";
import Image from "next/image";
import { urlForImage } from "@/sanity/sanity-utils";

export default function ProjectCard({
  title,
  description,
  tags,
  projectLink,
  image,
  category,
  type,
}: Project) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <a
              href={projectLink}
              target="_blank"
              className="bg-gray-900 text-white px-3 py-1 text-sm rounded-md hover:bg-gray-950 transition"
              rel="noreferrer"
            >
              View Project
            </a>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-1 text-xs rounded-md dark:bg-gray-800">
                {category}
              </span>
              <span className="bg-gray-200 px-2 py-1 text-xs rounded-md dark:bg-gray-800">
                {type}
              </span>
            </div>
          </div>
        </div>

        <Image
          src={urlForImage(image) || "/placeholder.svg"}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          width={500}
          height={300}
        />
      </section>
    </div>
  );
}
