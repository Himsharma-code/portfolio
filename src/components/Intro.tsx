"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { urlForImage } from "@/sanity/sanity-utils";
import type { Profile } from "@/types/Profile";
import ClientIntroWrapper from "./ClientIntroWrapper";
import { MotionDiv, MotionSpan } from "./MotionComponents";

export default function Intro({ profile }: { profile: Profile }) {
  return (
    <section
      id="home"
      className="scroll-mt-32 mb-2 max-w-[50rem] text-center sm:mb-0 dark:text-gray-100 relative"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {profile?.image && (
              <Image
                src={urlForImage(profile.image) || "/placeholder.svg"}
                alt={`${profile.name} image`}
                width={96}
                height={96}
                priority={true}
                className="object-cover w-24 h-24 rounded-full overflow-hidden border-[0.35rem] border-white shadow-xl"
              />
            )}
          </MotionDiv>
          <MotionSpan
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
          </MotionSpan>
        </div>
      </div>

      <ClientIntroWrapper>
        <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl relative z-20">
          <span className="font-bold">Hello, I'm {profile?.name}.</span>{" "}
          {profile?.headline}
        </h1>

        <div className="sm:flex sm:justify-center sm:align-center sm:gap-2.5 grid grid-cols-1 gap-2 px-2 text-base font-medium relative z-30">
          <Link
            href={`mailto:${profile?.email}`}
            className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-gray-950 active:scale-95"
          >
            Contact me here{" "}
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          {/* Other interactive elements remain the same */}
        </div>
      </ClientIntroWrapper>
    </section>
  );
}
