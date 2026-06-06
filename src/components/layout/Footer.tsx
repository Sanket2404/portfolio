import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export function Footer() {
  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: profile.socials.email, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-white">
            {profile.name}
          </p>
          <p className="text-sm text-zinc-500">
            {profile.title} · {profile.location}
          </p>
        </div>

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
          <a
            href="#hero"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-white transition-transform hover:-translate-y-0.5"
          >
            <FiArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built with React,
          Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
