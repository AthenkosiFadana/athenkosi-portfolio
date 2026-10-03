"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE, STACK } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="grid-bg aurora relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 md:grid-cols-[1.2fr_.8fr] md:pb-24">
        <div>
          <motion.p {...rise(0.05)} className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-blue-400">
            $ whoami
          </motion.p>

          <motion.div {...rise(0.12)} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-blue-400/[.07] px-4 py-2 text-sm text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            Open to technology opportunities
          </motion.div>

          <motion.h1
            {...rise(0.2)}
            className="max-w-4xl text-[2.6rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl"
          >
            I build technology that solves{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">real problems.</span>
          </motion.h1>

          <motion.p {...rise(0.28)} className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Computer Science &amp; Biochemistry graduate focused on software development, IT support, cloud
            technologies and cybersecurity.
          </motion.p>

          <motion.div {...rise(0.36)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              View my work
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/Athenkosi-Fadana-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:border-white/25 hover:bg-white/5"
            >
              <Download size={17} /> Download CV
            </a>
          </motion.div>

          <motion.div {...rise(0.44)} className="mt-8 flex items-center gap-5 text-gray-500">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white hover:scale-110">
              <Github />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white hover:scale-110">
              <Linkedin />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition hover:text-white hover:scale-110">
              <Mail />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto w-full max-w-sm"
        >
          <div ref={portraitRef} className="glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent" />
            <motion.div style={{ y }} className="relative">
              <Image
                src="/profile.jpeg"
                alt="Athenkosi Fadana"
                width={412}
                height={1282}
                priority
                className="h-[440px] w-full rounded-[1.6rem] object-cover object-top grayscale-[15%] md:h-[500px]"
              />
            </motion.div>
            <div className="relative flex items-center justify-between px-3 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-gray-500">
              <span>{PROFILE.location}</span>
              <span className="text-blue-400">available</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-white/5 bg-white/[.015] py-4">
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[...STACK, ...STACK].map((t, i) => (
              <span key={`${t}-${i}`} className="ticker__item">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="sr-only">Technologies I work with: {STACK.join(", ")}</span>
      </div>
    </section>
  );
}
