/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Himanshu from "../../public/Himanshu.jpg";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Intro() {
  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section
      id="home"
      ref={ref}
      className=" scroll-mt-32 mb-2 max-w-[50rem] text-center sm:mb-0 dark:text-gray-100 relative "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Himanshu}
              alt="Himanshu image"
              priority={true}
              className="object-cover w-24 h-24 rounded-full overflow-hidden border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-[24px] absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl relative z-20 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Himanshu.</span> I'm a
        Experienced Full Stack Developer with 3+ years of success in crafting
        advanced web applications. Proﬁcient in JavaScript, TypeScript,
        React.js, Node JS and Redux open to learn new technologies.
      </motion.h1>

      <motion.div
        className="sm:flex sm:justify-center sm:align-center sm:gap-2.5 grid grid-cols-1 gap-2 px-2 text-base font-medium relative z-30
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
        }}
      >
        <Link
          href="mailto:himanshu15101998@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-gray-950 active:scale-95
          "
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Himanshu_Sharma_CV_15_6_2.pdf"
          className="group bg-white  px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-gray-100
           active:scale-95 border border-black/20 dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition hover:text-gray-950" />
        </a>

        <a
          href="https://www.linkedin.com/in/himanshu-sharma-672429202/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full transition hover:bg-gray-100
          active:scale-95 border border-black/20 dark:bg-white/10 dark:text-gray-100"
        >
          <BsLinkedin className="group-hover:scale-110 group-hover:text-gray-950 transition" />
        </a>
        <a
          href="https://github.com/Himsharma-code"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full transition hover:bg-gray-100
          active:scale-95 border border-black/20 dark:bg-white/10 dark:text-gray-100"
        >
          <BsGithub className="group-hover:scale-110 group-hover:text-gray-950 transition" />
        </a>
      </motion.div>
    </section>
  );
}
