import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      output: {
        // Manual code-splitting keeps the main bundle lean for a 90+ Lighthouse score.
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          gsap: ["gsap"],
        },
      },
    },
  },
});
