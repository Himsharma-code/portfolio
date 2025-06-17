"use client";
import { useInView } from "react-intersection-observer";
import React from "react";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect, useRef } from "react";
import type { Profile } from "@/types/Profile";

export default function About({ profile }: { profile: Profile }) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme === "dark") {
      if (imageRef.current) {
        imageRef.current.style.display = "none";
      }
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
      }}
      id="about"
      className="mt-[5rem] mb-[5rem] text-center leading-8 sm:mb-15 relative scroll-mt-28 dark:text-white/70"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="mx-auto lg:w-[50rem] w-[90%] bg-gray-800 rounded-md overflow-hidden shadow-xl">
        <div className="w-full h-6 bg-[#e1e0e2] flex justify-start items-center gap-2 pl-2">
          <div className="w-[16px] h-[16px] rounded-full bg-[#f96256]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#fdbc3d]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#33c948]"></div>
          <p className="font-mono text-sm text-black font-bold">About.js</p>
        </div>

        <div className="md:px-6 md:py-6 p-4 bg-[#5a5d7a] text-left flex flex-col md:gap-6 gap-4">
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const TechStack = &#91;</span>{" "}
              <br />
              {profile?.techStack &&
                profile?.techStack?.map((tech, index) => (
                  <React.Fragment key={index}>
                    '{tech}'{index < profile.techStack.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
              <br />
              <span className="text-yellow-200">&#93;</span> <br />
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const Passion = &#123;</span>{" "}
              <span className="px-4">
                <br />
                {profile?.passions &&
                  profile.passions.map((passion, index) => (
                    <React.Fragment key={index}>
                      'passion{index + 1}': '{passion}',
                      <br />
                    </React.Fragment>
                  ))}
              </span>
              <br />
              <span className="text-yellow-200">&#125;</span> <br />
            </p>
          </div>
          <div className="detail-row w-full">
            <p className="text-white font-mono md:text-base text-sm">
              <span className="text-yellow-200">const Education = &#123;</span>{" "}
              <br />
              <span className="px-4">'graduation': '{profile.education}',</span>
              <br />
              <span className="text-yellow-200">&#125;</span> <br />
            </p>
          </div>

          <div className="w-2 h-4 bg-blue-500 animate-blink"></div>
        </div>
      </div>
    </motion.section>
  );
}
