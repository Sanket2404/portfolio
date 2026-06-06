import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "mailto" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const sent = status === "success" || status === "mailto";
  const hasKey =
    profile.contactFormKey &&
    profile.contactFormKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if a bot fills the hidden field, silently drop the submission.
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Fallback: no Web3Forms key configured yet → open the visitor's email client.
    if (!hasKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    // Real submission → lands in Sanket's inbox via Web3Forms.
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.contactFormKey,
          subject: `Portfolio enquiry from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: profile.socials.email,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "/in/sanket-jain",
      href: profile.socials.linkedin,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "/Sanket2404",
      href: profile.socials.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to remote and full-time frontend & mobile roles. Have a project or an opportunity? I'd love to hear from you."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal className="space-y-4">
            <div className="glass rounded-3xl p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new opportunities
              </span>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                I typically respond within a day. The fastest way to reach me is
                email or LinkedIn.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const inner = (
                  <div className="group flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-soft transition-transform group-hover:scale-110">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-zinc-500">{c.label}</p>
                      <p className="truncate text-sm text-zinc-200">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-accent-soft/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="glass rounded-2xl p-4">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <Card>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {status === "mailto"
                      ? "Your email client is opening…"
                      : "Message sent — thank you!"}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-400">
                    {status === "mailto" ? (
                      <>
                        If it didn't, reach me directly at{" "}
                        <a className="text-accent-soft" href={profile.socials.email}>
                          {profile.email}
                        </a>
                        .
                      </>
                    ) : (
                      <>I've received your message and will get back to you within a day.</>
                    )}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot — hidden from humans, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-zinc-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about the role or project…"
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent-soft/50 focus:outline-none focus:ring-2 focus:ring-accent-soft/20"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please email me directly at{" "}
                      <a className="underline" href={profile.socials.email}>
                        {profile.email}
                      </a>
                      .
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-zinc-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors focus:border-accent-soft/50 focus:outline-none focus:ring-2 focus:ring-accent-soft/20"
      />
    </div>
  );
}
