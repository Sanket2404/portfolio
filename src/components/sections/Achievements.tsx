import { motion } from "framer-motion";
import { Trophy, Rocket, Smartphone, FolderCheck, Award } from "lucide-react";
import { stats, achievements } from "@/data/portfolio";
import { Reveal, StaggerGroup, staggerItem } from "@/components/common/Reveal";
import { CountUp } from "@/components/common/CountUp";
import { Card } from "@/components/ui/card";

const icons = [Trophy, Rocket, Smartphone, FolderCheck];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        {/* Count-up stats */}
        <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div key={s.label} variants={staggerItem}>
                <Card className="group text-center hover:-translate-y-1">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent-soft transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 font-display text-4xl font-bold text-gradient">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Recognition */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <Card className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium text-white">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {a.detail}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
