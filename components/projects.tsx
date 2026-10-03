"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data";
import { RevealGroup, RevealItem } from "./reveal";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.07}>
      {projects.map(p => (
        <RevealItem key={p.name}>
          <motion.article
            whileHover={reduce ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-blue-400/30"
          >
            <a
              href={p.demo ?? p.url}
              target={p.demo ? "_blank" : undefined}
              rel={p.demo ? "noopener noreferrer" : undefined}
              tabIndex={-1}
              aria-hidden="true"
              className="relative block aspect-[16/10] w-full overflow-hidden bg-[#0b0f16]"
            >
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top opacity-85 grayscale-[25%] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/10 to-transparent" />
            </a>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[.18em] text-blue-400">{p.category}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.name}</h3>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} source code on GitHub`}
                  className="shrink-0 rounded-full border border-white/10 p-2 text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-white"
                >
                  <Github size={16} />
                </a>
              </div>

              <p className="mt-4 flex-1 text-[15px] leading-7 text-gray-400">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[.07] bg-white/5 px-3 py-1 font-mono text-[11px] text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-white/[.06] pt-4 text-sm">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 transition hover:text-white"
                >
                  Source <ArrowUpRight size={15} />
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 transition hover:text-blue-300"
                  >
                    Live demo <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
