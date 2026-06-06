import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-powered scroll parallax. Any element with a `data-parallax` attribute
 * (value = strength, e.g. "0.2") drifts vertically as it scrolls through the
 * viewport. Disabled under reduced-motion. Works alongside Lenis, which drives
 * the real window scroll position that ScrollTrigger reads.
 */
export function useGsapParallax() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const strength = parseFloat(el.dataset.parallax || "0.15");
        gsap.to(el, {
          yPercent: strength * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}
