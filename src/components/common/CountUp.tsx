import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

/** Animated number that counts up once it scrolls into view. */
export function CountUp({
  end,
  duration = 1800,
  suffix = "",
  decimals,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  // Auto-detect decimals from the target (e.g. 3.3 -> 1 decimal)
  const places = decimals ?? (Number.isInteger(end) ? 0 : 1);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {value.toFixed(places)}
      {suffix}
    </span>
  );
}
