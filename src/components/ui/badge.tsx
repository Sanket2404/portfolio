import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variant === "default" && "glass text-zinc-300",
        variant === "accent" &&
          "bg-accent/10 text-accent-soft border border-accent/30",
        variant === "outline" && "border border-white/10 text-zinc-400",
        className
      )}
      {...props}
    />
  );
}
