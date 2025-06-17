"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

import Circles from "../../../public/circles-15.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Theme from "../../components/Theme";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

type Children = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Children) {
  return (
    <div lang="en" className="!scroll-smooth">
      <div
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-24 sm:pt-32 dark:bg-gray-900 dark:text-gray-500 dark:text-opacity-90 flex flex-col justify-center items-center`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946363]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] "></div>

        <Image
          src={Circles}
          alt={"bg circle image"}
          className="animate-spin absolute top-4 lg:block hidden"
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <Theme />
        </Providers>
      </div>
    </div>
  );
}
