import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass card-glow rounded-3xl p-6 transition-all duration-500",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
