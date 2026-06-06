import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words"
          description="Placeholder structure — ready to drop in recommendations from colleagues, managers and clients."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card className="flex h-full flex-col">
                <Quote className="h-8 w-8 text-accent-soft/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-gradient font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
