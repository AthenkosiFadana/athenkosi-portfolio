"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data";

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map(n => document.querySelector(n.href)).filter(Boolean) as Element[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[.07] bg-[#07090d]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
      />

      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight" aria-label="Athenkosi Fadana, back to top">
          AF<span className="text-blue-400">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map(n => (
            <li key={n.href}>
              <a
                href={n.href}
                aria-current={active === n.href ? "true" : undefined}
                className={`relative py-1 transition-colors hover:text-white ${
                  active === n.href ? "text-white" : "text-gray-400"
                }`}
              >
                {n.label}
                {active === n.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-blue-400"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-blue-400/40 hover:bg-blue-400/10 sm:inline-block"
          >
            Let&apos;s connect
          </a>
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:bg-white/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[.07] bg-[#0a0d14] shadow-[0_24px_48px_-24px_rgba(0,0,0,.9)] backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-6 py-3">
              {NAV.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-3.5 text-[15px] text-gray-300 transition hover:text-white"
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black"
                >
                  Let&apos;s connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
