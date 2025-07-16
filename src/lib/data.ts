import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiFreelancer } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import cybertruck from "../../public/cybertruck.png";
import Ecars from "../../public/Ecars.png";
import WebRtc from "../../public/web-rtc.png";
import Greatlart from "../../public/greatlark.png";
import Hoobank from "../../public/hoobank.png";
import Raydee from "../../public/raydee.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Space-o InfoWeb Pvt. Ltd., Ahemdabad",
    description:
      "Built a recommendation system using React.js, NestJS, and pgvector, processing product data from CSV files. Generated vector embeddings for similarity search. Designed and developed an admin dashboard for a food ordering app with order management and user analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2024 - 07/2025",
  },
  {
    title: "Full Stack Software Developer",
    location: "SyncSignature, Surat",
    description:
      "Led full-stack development, managing frontend (React.js, ShadCN UI, Tailwind CSS) and backend (Node.js, GraphQL). Developed workspace module for multi-user collaboration. Implemented AI image generation, AWS SES for emails, and converted platform to PWA (30% load time reduction).",
    icon: React.createElement(CgWorkAlt),
    date: "02/2024 - 12/2024",
  },
  {
    title: "Web Developer",
    location: "Ciphernutz IT Services, Surat",
    description:
      "Developed tax document management web app with React.js and WebSocket. Built loan service onboarding using React.js and TypeScript. Contributed to tech networking platform with Next.js. Integrated CMS platforms like Sanity and Strapi.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2021 - 01/2024",
  },
  {
    title: "Electrical Engineering",
    location: "GEC, Bharuch",
    description: "Graduated with GPA: 7.41",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "WebRTC File Transfer",
    description:
      "A peer-to-peer file transfer application using WebRTC technology that enables direct browser-to-browser file sharing without a central server.",
    tags: ["WebRTC"],
    projectLink: "https://webrtc-file-transfer.vercel.app/",
    imageUrl: WebRtc,
    category: "Freelance",
    type: "Self",
  },
  {
    title: "GreatLark",
    description:
      "I developed this website for client whose main work was related to business finance.",
    tags: ["Webflow", "Finsweet attrs", "Gsap", "Figma"],
    projectLink: "https://greatlark.webflow.io/",
    imageUrl: Greatlart,
    category: "Freelance",
    type: "Self",
  },
  {
    title: "The Raydee Cafe",
    description:
      "This project was realy close to my heart. One of my friend decided to do a startup called The Raydee Cafe and he wanted a single-page website for his business",
    tags: ["Webflow", "Finsweet attrs"],
    projectLink: "https://the-raydee-cafe.webflow.io/",
    imageUrl: Raydee,
    category: "Freelance",
    type: "Self",
  },
  {
    title: "Hoobank",
    description:
      "I was sharping my React, TailwindCss and Framer motion skills on this beautiful project of bank website.",
    tags: ["ReactJs", "Tainwind Css", "Framer Motion"],
    projectLink: "https://main--moonlit-crumble-3a59c9.netlify.app/",
    imageUrl: Hoobank,
    category: "Frontend",
    type: "Self",
  },
  {
    title: "Cybertruck clone",
    description:
      "Just when I was starting my journey with freelancing and low-code webflow development I built this clone of Tesla Cybertruck website",
    tags: ["Webflow", "Finsweet attrs"],
    projectLink: "https://cybertruck-suhel.webflow.io/",
    imageUrl: cybertruck,
    category: "Frontend",
    type: "Self",
  },
  {
    title: "E-Cars",
    description:
      "My first ever project when I was starting my journey of development.",
    tags: ["HTML", "CSS", "JS", "Splide.js"],
    projectLink: "https://dulcet-paletas-64953e.netlify.app/",
    imageUrl: Ecars,
    category: "Frontend",
    type: "Self",
  },
] as const;

export const skillsData = [
  "Webflow",
  "Finsweet attributes",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Framer Motion",
  "Figma",
  "Tailwind CSS",
  "Gsap",
  "Strapi",
  "Node.js",
  "Express",
  "Git",
  "C++ (For LeetCode)",
] as const;
