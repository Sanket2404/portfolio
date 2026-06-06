import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { TiltCard } from "@/components/common/TiltCard";

export function Projects() {
  return (
    <section id="projects" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Enterprise platforms, cross-platform mobile apps and frontend craft — a mix of professional and self-initiated builds."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={(i % 2) * 0.08}
              className={project.featured && i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} wide={project.featured && i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <TiltCard className="group h-full">
      <article className="glass card-glow flex h-full flex-col overflow-hidden rounded-3xl">
        {/* Visual header */}
        <div
          className={`relative overflow-hidden ${wide ? "h-52" : "h-40"}`}
          style={{ background: project.accent }}
        >
          <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Big initial / mock window */}
          <div className="absolute left-5 top-5 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/40" />
            <span className="h-3 w-3 rounded-full bg-white/25" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
          </div>
          <div className="absolute bottom-4 left-5 right-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
              {project.category}
            </p>
            <h3 className="font-display text-2xl font-bold text-white drop-shadow">
              {project.name}
            </h3>
          </div>
          <ArrowUpRight className="absolute right-5 top-5 h-6 w-6 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm font-medium text-accent-soft">{project.tagline}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <ul className={`mt-4 grid gap-1.5 ${wide ? "sm:grid-cols-2" : ""}`}>
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>

            {(project.links.github || project.links.live) && (
              <div className="mt-5 flex gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <FiExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <FiGithub className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
