"use client";

import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { PROFILE } from "../data";
import { Reveal } from "./reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:pb-28">
      <Reveal>
        <div className="glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[.16] via-transparent to-transparent p-8 md:p-12">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[.28em] text-blue-300">07 — Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              For graduate opportunities, IT support roles, software projects or technology collaborations,
              feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                <Mail size={17} /> Email me
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:border-white/25 hover:bg-white/5"
                aria-live="polite"
              >
                {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} />}
                {copied ? "Copied" : "Copy email"}
              </button>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:border-white/25 hover:bg-white/5"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:border-white/25 hover:bg-white/5"
              >
                <Github size={17} /> GitHub
              </a>
            </div>

            <p className="mt-6 font-mono text-sm text-gray-500">{PROFILE.email}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
