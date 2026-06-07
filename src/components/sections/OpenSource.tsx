import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Package, BadgeCheck } from "lucide-react";
import { SiNpm } from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { openSource } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

export function OpenSource() {
  const [copied, setCopied] = useState(false);

  const copyInstall = async () => {
    const text = openSource.install;
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch {
      /* fall through to legacy fallback */
    }
    if (!ok) {
      // Legacy fallback for non-secure contexts / sandboxed iframes
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="open-source" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Open Source"
          title="I shipped an npm package"
          description="Beyond client work, I build and maintain open-source tools the community can install and use."
        />

        <Reveal className="mt-16">
          <div className="glass card-glow overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left — package info */}
              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#cb3837]/15 text-[#cb3837]">
                    <SiNpm className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-mono text-lg font-semibold text-white">
                      {openSource.name}
                    </h3>
                    <p className="text-sm text-zinc-500">{openSource.tagline}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { icon: Package, label: `v${openSource.version}` },
                    { icon: BadgeCheck, label: `${openSource.license} License` },
                    { icon: null, label: openSource.language },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                    >
                      {b.icon && <b.icon className="h-3.5 w-3.5 text-accent-soft" />}
                      {b.label}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                  {openSource.description}
                </p>

                {/* Validators */}
                <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Validators
                </p>
                <StaggerGroup className="mt-2 flex flex-wrap gap-2">
                  {openSource.validators.map((v) => (
                    <motion.span
                      key={v}
                      variants={staggerItem}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-soft"
                    >
                      {v}
                    </motion.span>
                  ))}
                </StaggerGroup>

                {/* Framework support */}
                <p className="mt-5 text-xs text-zinc-500">
                  Framework-agnostic core — works with{" "}
                  <span className="text-zinc-300">
                    {openSource.frameworks.join(" · ")}
                  </span>
                </p>

                {/* Actions */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="primary" size="md">
                    <a href={openSource.links.npm} target="_blank" rel="noreferrer noopener">
                      <SiNpm className="h-4 w-4" />
                      View on npm
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="md">
                    <a href={openSource.links.github} target="_blank" rel="noreferrer noopener">
                      <FiGithub className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right — terminal + code */}
              <div className="flex flex-col gap-4 border-t border-white/[0.06] bg-black/30 p-7 sm:p-9 lg:border-l lg:border-t-0">
                {/* Install command with copy */}
                <div>
                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                    Install
                  </p>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-ink-50 px-4 py-3">
                    <code className="font-mono text-sm text-zinc-200">
                      <span className="text-accent-soft">$</span> {openSource.install}
                    </code>
                    <button
                      type="button"
                      onClick={copyInstall}
                      aria-label="Copy install command"
                      className="shrink-0 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <span
                    className={`mt-1.5 block text-xs text-emerald-400 transition-opacity ${
                      copied ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Copied to clipboard
                  </span>
                </div>

                {/* Usage snippet */}
                <div className="flex-1">
                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                    Usage
                  </p>
                  <pre className="overflow-x-auto rounded-xl border border-white/10 bg-ink-50 p-4 text-xs leading-relaxed text-zinc-300">
                    <code className="font-mono">{openSource.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
