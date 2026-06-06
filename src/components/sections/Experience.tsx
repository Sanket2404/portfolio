import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="section-pad px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Building and scaling enterprise frontend systems, one release at a time."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <ExperienceCard exp={exp} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  return (
    <div className="relative pl-14 md:pl-0">
      {/* Node */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-white shadow-[0_0_0_4px_rgba(139,92,246,0.15)] md:left-1/2 md:-translate-x-1/2"
      >
        <Briefcase className="h-4 w-4" />
      </motion.span>

      <Reveal delay={index * 0.05} className="md:w-1/2 md:pr-12">
        <div className="glass card-glow rounded-3xl p-6">
          <div className="flex flex-wrap items-center gap-2">
            {exp.current && <Badge variant="accent">Current</Badge>}
            <Badge variant="outline">{exp.period}</Badge>
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold text-white">
            {exp.role}
          </h3>
          <p className="text-sm font-medium text-accent-soft">{exp.company}</p>
          <p className="text-xs text-zinc-500">{exp.location}</p>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {exp.summary}
          </p>

          <ul className="mt-4 space-y-2.5">
            {exp.highlights.map((h, hi) => (
              <motion.li
                key={hi}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * hi }}
                className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
