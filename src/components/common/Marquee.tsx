import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
}

/** Infinite, performant CSS marquee (duplicated track). */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      {[0, 1].map((track) => (
        <div
          key={track}
          aria-hidden={track === 1}
          className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
