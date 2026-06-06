import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent-soft">
          <span className="h-px w-6 bg-accent-soft/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
