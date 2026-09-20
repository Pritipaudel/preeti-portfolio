import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#C84B31",
          red: "#C84B31",
          light: "#E06B4F",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FAFAFA",
        },
        bg: {
          primary: "#F5F2EB",
          dark: "#121212",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#666666",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        "soft-lg":
          "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
        glow: "0 0 20px -5px rgba(79, 70, 229, 0.25)",
        "glow-dark": "0 0 24px -6px rgba(129, 140, 248, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
