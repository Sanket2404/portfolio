import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom spotlight cursor. A small dot tracks the pointer 1:1 while a larger
 * soft ring follows with spring physics and enlarges over interactive
 * elements. Disabled on touch devices and when reduced motion is requested.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest('a, button, [role="button"], input, textarea, .magnetic')
      );
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      {/* Outer ring */}
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-accent-soft/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hidden ? 0 : hovering ? 0.9 : 0.5,
          backgroundColor: hovering
            ? "rgba(139,92,246,0.12)"
            : "rgba(139,92,246,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Inner dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-soft"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0 : 1 }}
      />
    </div>
  );
}
