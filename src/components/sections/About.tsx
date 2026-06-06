import { GraduationCap, Sparkles, Code2, Smartphone } from "lucide-react";
import { profile, education, stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/common/Reveal";
import { CountUp } from "@/components/common/CountUp";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const journey = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    text: "3.3+ years architecting scalable Angular & TypeScript applications with reusable component systems.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile",
    text: "Shipping Ionic apps to the Play Store & App Store from a single codebase.",
  },
  {
    icon: Sparkles,
    title: "Performance & SSR",
    text: "SSR, lazy loading and Core Web Vitals tuning for fast, SEO-friendly experiences.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Engineering interfaces that scale"
          description="A frontend developer who turns complex enterprise workflows into fast, intuitive, production-grade experiences."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Bio */}
          <Reveal className="space-y-5">
            {profile.bio.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <Card className="mt-2 flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-medium text-white">{education.degree}</h3>
                <p className="text-sm text-zinc-400">{education.school}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {education.period} · {education.score}
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Journey cards */}
          <StaggerGroup className="space-y-4">
            {journey.map((j) => (
              <motion.div key={j.title} variants={staggerItem}>
                <Card className="group flex items-start gap-4 hover:-translate-y-1">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft transition-transform group-hover:scale-110">
                    <j.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{j.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {j.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
