"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function ClientIntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.15 });

  useEffect(() => {
    if (inView) setActiveSection("Home");
  }, [inView, setActiveSection]);

  return <div ref={ref}>{children}</div>;
}
