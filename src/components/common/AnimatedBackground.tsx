/**
 * Fixed aurora background — drifting gradient blobs + faint grid + noise.
 * Pure CSS animation (GPU-composited) so it stays off the main thread and
 * doesn't hurt Lighthouse. Hidden from assistive tech.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-accent/25 blur-[120px] animate-aurora-drift" />
      <div className="absolute right-[-15rem] top-1/4 h-[38rem] w-[38rem] rounded-full bg-fuchsia2/20 blur-[130px] animate-aurora-drift [animation-delay:-6s]" />
      <div className="absolute bottom-[-20rem] left-1/3 h-[40rem] w-[40rem] rounded-full bg-cyan2/15 blur-[140px] animate-aurora-drift [animation-delay:-12s]" />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
