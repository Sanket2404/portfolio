import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "border border-transparent"
        )}
        aria-label="Primary"
      >
        <a
          href="#hero"
          className="flex items-center gap-2 pl-2 font-display text-lg font-bold tracking-tight text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-sm font-bold text-white">
            SJ
          </span>
          <span className="hidden sm:inline">Sanket</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block whitespace-nowrap rounded-full px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="primary"
            className="hidden sm:inline-flex"
          >
            <a href={profile.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-300 hover:bg-white/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-ink/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 font-display text-2xl text-zinc-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <a href={profile.resumeUrl} download onClick={() => setOpen(false)}>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
