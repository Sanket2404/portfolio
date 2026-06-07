import { lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { useGsapParallax } from "@/hooks/useGsapParallax";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { Cursor } from "@/components/common/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

// Below-the-fold sections are code-split for a leaner initial bundle.
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({
    default: m.Experience,
  }))
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const OpenSource = lazy(() =>
  import("@/components/sections/OpenSource").then((m) => ({
    default: m.OpenSource,
  }))
);
const Achievements = lazy(() =>
  import("@/components/sections/Achievements").then((m) => ({
    default: m.Achievements,
  }))
);
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent-gradient"
    />
  );
}

export default function App() {
  useLenis();
  useGsapParallax();

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <AnimatedBackground />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-screen" />}>
          <Skills />
          <Experience />
          <Projects />
          <OpenSource />
          <Achievements />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
