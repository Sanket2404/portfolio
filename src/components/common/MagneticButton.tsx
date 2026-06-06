import { useMagnetic } from "@/hooks/useMagnetic";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

/** A Button wrapped with the magnetic-hover micro-interaction. */
export function MagneticButton({
  strength = 0.4,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>(
    strength
  );

  return (
    <Button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
