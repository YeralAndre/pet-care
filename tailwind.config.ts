import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          white: "#F1F8F4",
          dark: "#1F2C26",
        },
        border: {
          white: "#E5E7EB",
          dark: "#27272A",
        },
        text: {
          primary: "#171717",
          secondary: "#525252",
        },
        accent: {
          primary: "#22c55e",
          secondary: "#86efac",
          tertiary: "#f43f5e",
        },
        hover: "#16a34a",
      },
      transitions: {
        default: "all 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
