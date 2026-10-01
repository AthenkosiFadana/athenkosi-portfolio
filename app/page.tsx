import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { projects, skills, experience, education } from "../data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d]">
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#07090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">AF<span className="text-blue-400">.</span></a>
          <div className="hidden gap-7 text-sm text-gray-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="https://www.linkedin.com/in/athenkosi-fadana-41a013235/" target="_blank" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/5">Let's connect</a>
        </div>
      </nav>

      <section className="grid-bg relative overflow-hidden pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-10 md:grid-cols-[1.25fr_.75fr] md:pb-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> Open to technology opportunities
            </div>
            <p className="mb-4 text-sm uppercase tracking-[.28em] text-gray-500">Athenkosi Fadana</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              I build technology that solves <span className="text-blue-400">real problems.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Computer Science & Biochemistry graduate focused on software development, IT support, cloud technologies and cybersecurity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black hover:bg-gray-200">View my work <ArrowUpRight size={17}/></a>
              <a href="/Athenkosi-Fadana-CV.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium hover:bg-white/5"><Download size={17}/> Download CV</a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-gray-500">
              <a href="https://github.com/AthenkosiFadana" target="_blank" aria-label="GitHub" className="hover:text-white"><Github/></a>
              <a href="https://www.linkedin.com/in/athenkosi-fadana-41a013235/" target="_blank" aria-label="LinkedIn" className="hover:text-white"><Linkedin/></a>
              <a href="mailto:athenkosifadana@gmail.com" aria-label="Email" className="hover:text-white"><Mail/></a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"/>
              <Image src="/profile.jpeg" alt="Athenkosi Fadana" width={412} height={1282} className="relative h-[520px] w-full rounded-[1.6rem] object-cover object-top grayscale-[15%]" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="01 — About" title="A practical technologist with a problem-solving mindset." />
        <div className="grid gap-8 md:grid-cols-[1.3fr_.7fr]">
          <p className="text-lg leading-8 text-gray-400">
            I am a Computer Science and Biochemistry graduate who enjoys turning ideas into working systems. My experience spans software projects, technical support, tutoring and applied technology learning through AWS re/Start. I am particularly interested in building useful digital products while growing deeper into cloud and cybersecurity.
          </p>
          <div className="card rounded-2xl p-6">
            <p className="text-sm text-gray-500">Based in</p>
            <p className="mt-2 flex items-center gap-2 font-medium"><MapPin size={17} className="text-blue-400"/> South Africa</p>
            <p className="mt-6 text-sm text-gray-500">Focus areas</p>
            <p className="mt-2 leading-7 text-gray-300">Software · IT Support · Cloud · Cybersecurity</p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle eyebrow="02 — Skills" title="Tools I use to turn ideas into solutions." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => <div key={s.title} className="card rounded-2xl p-6"><s.icon className="mb-5 text-blue-400"/><h3 className="font-medium">{s.title}</h3><p className="mt-3 text-sm leading-6 text-gray-500">{s.items}</p></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="03 — Selected work" title="Projects that show how I learn and build." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="card group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-blue-400/20">
              <div className="flex items-start justify-between gap-4">
                <div><p className="text-xs uppercase tracking-[.2em] text-blue-400">{p.category}</p><h3 className="mt-3 text-xl font-semibold">{p.name}</h3></div>
                <a href={p.url} target="_blank" className="rounded-full border border-white/10 p-2 text-gray-400 hover:text-white"><ExternalLink size={16}/></a>
              </div>
              <p className="mt-4 leading-7 text-gray-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/5 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle eyebrow="04 — Experience" title="Experience beyond the code." />
          <div className="space-y-5">
            {experience.map(e => <div key={e.role} className="card rounded-2xl p-6 md:flex md:items-start md:justify-between md:gap-10"><div><h3 className="font-semibold">{e.role}</h3><p className="mt-1 text-blue-300">{e.org}</p><p className="mt-4 max-w-3xl leading-7 text-gray-400">{e.description}</p></div><p className="mt-4 whitespace-nowrap text-sm text-gray-500 md:mt-0">{e.period}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="05 — Education" title="Academic foundation." />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map(e => <div key={e.title} className="card rounded-2xl p-6"><p className="text-sm text-blue-300">{e.period}</p><h3 className="mt-3 text-lg font-semibold">{e.title}</h3><p className="mt-2 text-gray-400">{e.org}</p><p className="mt-4 text-sm leading-6 text-gray-500">{e.detail}</p></div>)}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glow rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-8 md:p-12">
          <p className="text-sm uppercase tracking-[.25em] text-blue-300">06 — Contact</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">Let's build something useful.</h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-400">For graduate opportunities, IT support roles, software projects or technology collaborations, feel free to reach out.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:athenkosifadana@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black"><Mail size={17}/> Email me</a>
            <a href="https://www.linkedin.com/in/athenkosi-fadana-41a013235/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium"><Linkedin size={17}/> LinkedIn</a>
            <a href="https://github.com/AthenkosiFadana" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium"><Github size={17}/> GitHub</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Athenkosi Fadana. Built with Next.js.</p>
          <p>Software · Cloud · Cybersecurity</p>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-12"><p className="text-xs uppercase tracking-[.25em] text-blue-400">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2></div>;
}