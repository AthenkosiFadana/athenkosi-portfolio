import { Download, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Projects from "../components/projects";
import { Reveal, RevealGroup, RevealItem } from "../components/reveal";
import Contact from "../components/contact";
import { PROFILE, certificates, education, experience, skills } from "../data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d]">
      <Nav />
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionTitle index="01" label="About" title="A practical technologist with a problem-solving mindset." />
        <div className="grid gap-8 md:grid-cols-[1.3fr_.7fr]">
          <Reveal>
            <p className="text-lg leading-8 text-gray-400">
              I am a Computer Science and Biochemistry graduate who enjoys turning ideas into working systems.
              My experience spans software projects, technical support, tutoring and applied technology learning
              through AWS re/Start. I am particularly interested in building useful digital products while growing
              deeper into cloud and cybersecurity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[.18em] text-gray-500">Based in</p>
              <p className="mt-2 flex items-center gap-2 font-medium">
                <MapPin size={17} className="text-blue-400" /> {PROFILE.location}
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[.18em] text-gray-500">Focus areas</p>
              <p className="mt-2 leading-7 text-gray-300">Software · IT Support · Cloud · Cybersecurity</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[.18em] text-gray-500">Currently</p>
              <p className="mt-2 leading-7 text-gray-300">AWS re/Start 2026 · open to roles</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionTitle index="02" label="Skills" title="Tools I use to turn ideas into solutions." />
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {skills.map(s => (
              <RevealItem key={s.title}>
                <div className="card h-full rounded-2xl p-6 transition-colors duration-300 hover:border-blue-400/25">
                  <s.icon className="mb-5 text-blue-400" aria-hidden="true" />
                  <h3 className="font-medium">{s.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map(i => (
                      <li
                        key={i}
                        className="rounded-full border border-white/[.07] bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionTitle index="03" label="Selected work" title="Projects that show how I learn and build." />
        <Projects />
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionTitle index="04" label="Experience" title="Experience beyond the code." />
          <RevealGroup className="space-y-5" stagger={0.08}>
            {experience.map(e => (
              <RevealItem key={e.role}>
                <article className="card rounded-2xl p-6 transition-colors duration-300 hover:border-blue-400/25 md:flex md:items-start md:justify-between md:gap-10">
                  <div>
                    <h3 className="font-semibold">{e.role}</h3>
                    <p className="mt-1 text-blue-300">{e.org}</p>
                    <p className="mt-4 max-w-3xl leading-7 text-gray-400">{e.description}</p>
                  </div>
                  <p className="mt-4 whitespace-nowrap font-mono text-xs uppercase tracking-[.14em] text-gray-500 md:mt-1">
                    {e.period}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionTitle index="05" label="Education" title="Academic and professional training." />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {education.map(e => (
            <RevealItem key={e.title}>
              <article className="card flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-blue-400/25">
                <p className="font-mono text-xs uppercase tracking-[.18em] text-blue-300">{e.period}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7">{e.title}</h3>
                <p className="mt-2 text-gray-400">{e.org}</p>
                <p className="mt-4 text-sm leading-6 text-gray-500">{e.detail}</p>
                {e.url && (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm text-blue-300 transition hover:text-blue-200"
                  >
                    Programme site
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section id="certificates" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <SectionTitle
            index="06"
            label="Certificates"
            title="Continuous learning, verified."
          />
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {certificates.map(c => (
              <RevealItem key={c.file}>
                <a
                  href={`/certificates/${encodeURI(c.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[.16em] text-blue-300">
                      {c.issuer}
                    </span>
                    <ExternalLink
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-gray-600 transition group-hover:text-blue-400"
                    />
                  </div>
                  <h3 className="mt-3 flex-1 text-[15px] font-medium leading-6">{c.title}</h3>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[.06] pt-3">
                    <span className="font-mono text-xs text-gray-500">{c.issued}</span>
                    {c.note && (
                      <span className="truncate text-xs text-gray-500 transition group-hover:text-gray-400">
                        {c.note}
                      </span>
                    )}
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Contact />

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.</p>
          <div className="flex items-center gap-5">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <Github size={16} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="transition hover:text-white">
              <Mail size={16} />
            </a>
            <a
              href="/Athenkosi-Fadana-CV.pdf"
              download
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              CV <Download size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[.28em] text-blue-400">
        {index} — {label}
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <span className="mt-5 block h-px w-16 bg-gradient-to-r from-blue-400 to-transparent" aria-hidden="true" />
    </Reveal>
  );
}
