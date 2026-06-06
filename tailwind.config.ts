import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Aurora palette — near-black canvas + violet/fuchsia accent
        ink: {
          DEFAULT: "#08090c",
          50: "#0c0d12",
          100: "#101118",
        },
        accent: {
          DEFAULT: "#8b5cf6", // violet-500
          soft: "#a78bfa",
          deep: "#6d28d9",
        },
        fuchsia2: "#d946ef",
        cyan2: "#22d3ee",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "accent-gradient":
          "linear-gradient(120deg, #8b5cf6 0%, #d946ef 50%, #22d3ee 100%)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%,-6%,0) scale(1.1)" },
          "66%": { transform: "translate3d(-4%,4%,0) scale(0.95)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "float-y": "float-y 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
