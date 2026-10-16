"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import {
  experiences,
  featuredProjects,
  principles,
  profile,
  skillGroups,
  supportingProjects,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = heroRef.current;
    if (!node || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      const bounds = node.getBoundingClientRect();
      node.style.setProperty("--px", `${event.clientX - bounds.left}px`);
      node.style.setProperty("--py", `${event.clientY - bounds.top}px`);
    };

    node.addEventListener("pointermove", onMove);
    return () => node.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <main>
      <section
        id="top"
        ref={heroRef}
        className="hero-surface relative scroll-mt-16"
      >
        <div className="section-container grid min-h-[100svh] items-start gap-12 pb-16 pt-28 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-24">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]">
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs text-[11px] uppercase tracking-[0.16em] text-primary sm:max-w-none sm:tracking-[0.22em]">
              Software engineer · Frontend specialist
            </p>
            <h1 className="mt-6 w-full max-w-4xl break-words font-sans font-semibold leading-[0.98] tracking-[-0.045em] text-[clamp(1.9rem,7.2vw,4.6rem)]">
              I build web experiences that{" "}
              <span className="text-primary">feel as good</span> as they work.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a Senior Frontend Developer working with React and Node.js to turn
              product requirements into polished, reliable web applications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore my work
              </a>
              <a
                href={profile.resume}
                download={profile.resumeName}
                className="inline-flex h-12 items-center justify-center gap-2 border border-border px-5 text-sm font-medium transition-colors hover:border-foreground"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Open to connecting
              </span>
            </div>
          </div>

          <aside className="min-w-0 border border-border bg-card/80 p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-start justify-between gap-4">
              <p className="font-sans font-semibold tracking-[-0.045em] text-5xl leading-none">RDS</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                01 / Profile
              </p>
            </div>
            <dl className="mt-8 space-y-5 break-words text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Current focus</dt>
                <dd className="mt-1">Frontend engineering</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Primary stack</dt>
                <dd className="mt-1">React · JavaScript · Node.js</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Also shipping with</dt>
                <dd className="mt-1">TypeScript · Next.js · PostgreSQL</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Based in</dt>
                <dd className="mt-1">{profile.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="section-container">
          <Reveal>
            <SectionLabel index="02">Selected work</SectionLabel>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-xl font-sans font-semibold tracking-[-0.045em] text-4xl leading-none sm:text-6xl">
                Products with a live surface.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Four applications I can point to. Descriptions stay with what each product actually does.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 space-y-20">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={cn("lg:col-span-7", index % 2 === 1 && "lg:order-2")}>
                    <div className="group relative aspect-[16/10] overflow-hidden border border-border bg-muted">
                      <Image
                        src={project.icon}
                        alt={`${project.title} product interface`}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 720px, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </p>
                    <h3 className="mt-3 font-sans font-semibold tracking-[-0.045em] text-4xl leading-none">{project.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li key={item} className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-[0.12em]">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-5 text-sm">
                      <a href={project.web} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-primary">
                        Live demo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                          Source <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <Reveal key={project.id}>
                <article className="group flex h-full flex-col border border-border">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.icon}
                      alt={`${project.title} product interface`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
                      {String(featuredProjects.length + index + 1).padStart(2, "0")} / {project.category}
                    </p>
                    <h3 className="mt-2 font-sans font-semibold tracking-[-0.045em] text-3xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li key={item} className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex gap-5 pt-6 text-sm">
                      <a href={project.web} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-primary">
                        Live demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          Source
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="section-container">
          <Reveal>
            <SectionLabel index="03">How I build</SectionLabel>
            <h2 className="max-w-2xl font-sans font-semibold tracking-[-0.045em] text-4xl leading-none sm:text-6xl">
              Engineering, tied to the work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {principles.map((item) => (
              <Reveal key={item.index} className="bg-background">
                <article className="h-full p-6 sm:p-8">
                  <p className="font-sans font-semibold tracking-[-0.045em] text-3xl text-primary">{item.index}</p>
                  <h3 className="mt-4 text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="section-container">
          <Reveal>
            <SectionLabel index="04">Skills</SectionLabel>
            <h2 className="font-sans font-semibold tracking-[-0.045em] text-4xl leading-none sm:text-6xl">Tools I actually use.</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <Reveal key={group.label}>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-primary">{group.label}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-border py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="section-container">
          <Reveal>
            <SectionLabel index="05">Experience</SectionLabel>
            <h2 className="font-sans font-semibold tracking-[-0.045em] text-4xl leading-none sm:text-6xl">Where I&apos;ve worked.</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {experiences.map((job) => (
              <Reveal key={job.company}>
                <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-sans font-semibold tracking-[-0.045em] text-3xl leading-none">{job.title}</h3>
                    <p className="mt-2 text-primary">{job.company}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {job.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="section-container grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel index="06">About</SectionLabel>
            <h2 className="font-sans font-semibold tracking-[-0.045em] text-4xl leading-none sm:text-6xl">A practical builder.</h2>
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              I taught myself to code through Udemy in 2019 and kept going into the MERN stack:
              MongoDB, Express, React, and Node.js, plus PostgreSQL. That path is now the work I
              do as a Senior Frontend Developer.
            </p>
            <p>
              I care about software people can actually use: clear interfaces, working accounts and
              data, and products that are deployed rather than described. Outside of client work I
              build my own applications and keep learning the parts of the stack I have not used yet.
            </p>
            <p className="text-foreground">Based in {profile.location}.</p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="section-container">
          <Reveal>
            <SectionLabel index="07">Contact</SectionLabel>
            <h2 className="max-w-3xl font-sans font-semibold tracking-[-0.045em] text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Have a challenging product to build?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I&apos;m interested in working with teams that care about product quality, thoughtful
              engineering, and meaningful user experiences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-border px-5 text-sm"
              >
                GitHub
              </a>
              <a
                href={profile.resume}
                download={profile.resumeName}
                className="inline-flex h-12 items-center justify-center border border-border px-5 text-sm"
              >
                Résumé
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
