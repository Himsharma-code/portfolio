import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: ".5" },
        },
      },

      animation: {
        spin: "spin 20s linear infinite", // Define a custom animation class
        blink: "blink 0.8s step-start infinite;",
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
};

export default config;
