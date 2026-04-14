import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#0F2040",
          lighter: "#162B52",
          50: "#e8eef7",
          100: "#c5d4e8",
          200: "#9eb8d7",
          300: "#779bc6",
          400: "#5a86ba",
          500: "#3d71ae",
          600: "#3565a0",
          700: "#2a558e",
          800: "#1e457d",
          900: "#0A1628",
        },
        accent: {
          DEFAULT: "#F97316",
          dark: "#ea6c0e",
          light: "#fb8a3c",
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#F97316",
          600: "#ea6c0e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "dot-pattern":
          "radial-gradient(circle, #ffffff15 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
