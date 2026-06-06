import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/useTypewriter";
import { MagneticButton } from "@/components/common/MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  const typed = useTypewriter(profile.typingRoles);

  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: profile.socials.email, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Availability pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={item}
            className="mt-4 flex h-9 items-center font-mono text-lg text-zinc-400 sm:text-xl"
          >
            <span className="text-accent-soft">&gt;</span>
            <span className="ml-2 text-zinc-200">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent-soft" />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            {profile.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton asChild size="lg" variant="primary">
              <a href={profile.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </MagneticButton>
            <MagneticButton asChild size="lg" variant="glass">
              <a href="#contact">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Socials + location */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent-soft/50 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Right — animated profile / portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          data-parallax="0.18"
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <ProfileOrb />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/15 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent-soft"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  );
}

/** Animated glassy orb with the initials + orbiting tech ring. */
function ProfileOrb() {
  return (
    <div className="relative h-full w-full">
      {/* Glow */}
      <div className="absolute inset-6 rounded-full bg-accent-gradient opacity-30 blur-3xl" />

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/10"
        style={{ borderTopColor: "rgba(167,139,250,0.6)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-white/5"
        style={{ borderBottomColor: "rgba(217,70,239,0.5)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Core */}
      <div className="absolute inset-12 grid place-items-center rounded-full glass-strong">
        <div className="text-center">
          <div className="font-display text-7xl font-bold text-gradient">SJ</div>
          <div className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Frontend · Mobile
          </div>
        </div>
      </div>

      {/* Floating badges */}
      {[
        { label: "Angular", x: "-8%", y: "12%", d: 0 },
        { label: "Ionic", x: "92%", y: "22%", d: 0.6 },
        { label: "TypeScript", x: "0%", y: "80%", d: 1.2 },
        { label: "SSR", x: "88%", y: "78%", d: 1.8 },
      ].map((b) => (
        <motion.span
          key={b.label}
          className="absolute -translate-x-1/2 rounded-full glass px-3 py-1 font-mono text-xs text-zinc-300"
          style={{ left: b.x, top: b.y }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: b.d, ease: "easeInOut" }}
        >
          {b.label}
        </motion.span>
      ))}
    </div>
  );
}
