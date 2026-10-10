import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { Tags } from "@/components/ui";
import { ProjectGallery } from "@/components/project-media";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="main" className="shell detail">
      <Link className="back-link" href="/#projects">
        <ArrowLeft size={15} /> Back to selected work
      </Link>
      <div className="eyebrow">
        ENGINEERING CASE STUDY / {p.category.toUpperCase()}
      </div>
      <h1>{p.name}</h1>
      <span className="status">{p.status}</span>
      <p className="detail-summary">{p.summary}</p>
      <Tags items={p.stack} />
      <ProjectGallery project={p} />
      <nav className="case-navigation" aria-label="Case study sections">
        <a href="#problem">Problem</a>
        <a href="#solution">Solution</a>
        <a href="#architecture">Architecture</a>
        <a href="#decisions">Technical decisions</a>
        {p.challenges.length ? <a href="#challenges">Challenges</a> : null}
        {p.lessons.length ? <a href="#lessons">Lessons learned</a> : null}
      </nav>
      <div className="detail-grid">
        <section id="problem" className="case-section">
          <span className="tiny-label">01 / CONTEXT</span>
          <h2>The problem</h2>
          <p>{p.problem}</p>
        </section>
        <section id="solution" className="case-section">
          <span className="tiny-label">02 / IMPLEMENTATION</span>
          <h2>The solution</h2>
          <p>{p.solution}</p>
          <h3>Key features & contributions</h3>
          <ul>
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section id="architecture" className="case-section">
          <span className="tiny-label">03 / SYSTEM STRUCTURE</span>
          <h2>Architecture</h2>
          <p className="architecture-note">
            Technology components described in the project summary.
          </p>
          <ol className="architecture">
            {p.architecture.map((a, i) => (
              <li key={a}>
                <span className="tiny-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {a}
              </li>
            ))}
          </ol>
        </section>
        <section id="decisions" className="case-section">
          <span className="tiny-label">04 / ENGINEERING CHOICES</span>
          <h2>Key technical decisions</h2>
          <div className="technical-decisions">
            {p.decisions.map((d) => (
              <article key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.detail}</p>
              </article>
            ))}
          </div>
        </section>
        {p.challenges.length ? (
          <section id="challenges" className="case-section">
            <span className="tiny-label">RETROSPECTIVE</span>
            <h2>Challenges</h2>
            <ul>
              {p.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {p.lessons.length ? (
          <section id="lessons" className="case-section">
            <span className="tiny-label">RETROSPECTIVE</span>
            <h2>Lessons learned</h2>
            <ul>
              {p.lessons.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
      <section className="case-stack" aria-labelledby="stack-title">
        <h2 id="stack-title">Technology stack</h2>
        <Tags items={p.stack} />
        <div className="case-links">
          {p.github ? (
            <a
              className="button secondary"
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code <ArrowUpRight size={15} />
            </a>
          ) : null}
          {p.demo ? (
            <a
              className="button primary"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </section>
      {p.status === "In development" ? (
        <p className="detail-note">
          This project is in development. The features above reflect the
          implementation described in my resume.
        </p>
      ) : null}
      <Link className="button secondary mt-10" href="/#contact">
        Let’s talk about building software <ArrowUpRight size={15} />
      </Link>
    </main>
  );
}
