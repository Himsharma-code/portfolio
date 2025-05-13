import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Portfolio CMS",
  apiVersion: "2023-05-03",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
