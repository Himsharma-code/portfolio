"use client";
import { useMyContext } from "@/context/context";
import React from "react";

const About = () => {
  const { someState, setSomeState } = useMyContext();

  return <div>About</div>;
};

export default About;
