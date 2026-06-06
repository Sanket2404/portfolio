import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          description="A categorized look at the technologies I use to design, build, ship and deploy."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.05}>
              <Card className="h-full">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{cat.description}</p>
                </div>

                <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      className="group/skill relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-3">
                        <skill.icon
                          className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover/skill:scale-125"
                          style={{ color: skill.color }}
                          aria-hidden
                        />
                        <span className="truncate text-sm font-medium text-zinc-200">
                          {skill.name}
                        </span>
                      </div>

                      {/* Proficiency indicator */}
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-accent-gradient"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </StaggerGroup>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
