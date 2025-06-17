"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Loading from "@/components/Loading";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import {
  getExperiences,
  getProfile,
  getProjects,
  getSkills,
} from "@/sanity/sanity-utils";
import {
  Experience as ExperienceType,
  Profile,
  Project as ProjectType,
  Skill,
} from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [profileData, projectsData, experiencesData, skillsData] =
          await Promise.all([
            getProfile(),
            getProjects(),
            getExperiences(),
            getSkills(),
          ]);

        // Validate critical data
        if (!profileData) {
          throw new Error("Profile data is missing");
        }

        setProfile(profileData);
        setProjects(projectsData || []);
        setExperiences(experiencesData || []);
        setSkills(skillsData || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load data. Please try again later."
        );
        console.error("Data fetching error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Data Loading Error
        </h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  // Additional guard for critical data
  if (!profile) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl text-red-600">Profile data is unavailable</h2>
        <p className="text-gray-700">
          Please check your connection or try again later
        </p>
      </div>
    );
  }

  return (
    <main className="flex justify-center items-center flex-col">
      <Intro profile={profile} />
      <Divider />
      <About profile={profile} />
      <Project projects={projects} />
      {/* <Skills skills={skills} />
      <Experience experiences={experiences} /> */}
      <Contact />
    </main>
  );
}
