import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  ExternalLink,
  Mail,
  Code2,
  Braces,
  Sparkles,
} from "lucide-react";
import { portfolio as p, projects } from "@/lib/portfolio";
import { CopyEmail, RevealEnhancement } from "@/components/interactions";
import { SectionTitle, Tags, ProjectCard } from "@/components/ui";
export default function Home() {
  return (
    <>
      <RevealEnhancement />
      <main id="main">
        <section className="hero shell">
          <div className="hero-top">
            <span className="eyebrow">
              <i className="green-dot" /> SOFTWARE, WITH PURPOSE
            </span>
            <span className="location">
              <MapPin size={13} />
              {p.location}
            </span>
          </div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="intro-name">
                Hello, I’m {p.name} <span className="wave">↗</span>
              </p>
              <h1>
                {p.headline.lead} <span>{p.headline.highlight}</span>
              </h1>
              <p className="hero-description">{p.intro}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View my work <ArrowRight size={17} />
                </a>
                <a className="button secondary" href={p.resume} download>
                  <Download size={16} /> Download resume
                </a>
              </div>
              <div className="hero-socials">
                <a
                  href={p.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} /> LinkedIn <ArrowUpRight size={13} />
                </a>
                {p.socials.github ? (
                  <a
                    href={p.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <ArrowUpRight size={13} />
                  </a>
                ) : null}
                <a href={`mailto:${p.email}`}>
                  <Mail size={15} aria-hidden="true" /> Email
                </a>
                <span className="social-divider" />
                <span className="hero-tagline">{p.heroTagline}</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-grid" />
              <div className="hero-orbit o1" />
              <div className="hero-orbit o2" />
              <div className="hero-orbit o3" />
              <div className="core">
                <Braces size={55} strokeWidth={1} />
              </div>
              <div className="float-chip chip-one">
                <Code2 size={15} /> ENGINEERING
              </div>
              <div className="float-chip chip-two">
                <Sparkles size={15} /> INTELLIGENCE
              </div>
              <span className="art-coordinate">IDEA → SYSTEM → PRODUCT</span>
              <span className="cross cross-one">+</span>
              <span className="cross cross-two">+</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              APPLIED AI <i /> FULL-STACK DEVELOPMENT <i /> PRODUCT ENGINEERING
            </span>
            <a href="#about">
              Scroll to explore <span>↓</span>
            </a>
          </div>
        </section>
        <section id="about" className="shell section about-section">
          <SectionTitle
            number="01"
            eyebrow="THE PERSON BEHIND THE CODE"
            title="Curiosity meets engineering."
          />
          <div className="about-content" data-reveal>
            <p className="large-copy">{p.aboutLead}</p>
            <p>{p.about}</p>
            <div className="about-note">
              <span className="tiny-label">CURRENT FOCUS</span>
              <p>{p.currentFocus}</p>
            </div>
          </div>
        </section>
        <section id="experience" className="shell section">
          <SectionTitle
            number="02"
            eyebrow="LEARNING BY BUILDING"
            title="Experience in practice."
          />
          {p.experience.map((e) => (
            <article
              className="experience-card"
              key={e.organization}
              data-reveal
            >
              <div className="experience-left">
                <div className="company-mark">
                  HCL<span>Tech</span>
                </div>
                <span>{e.duration}</span>
                <span>{e.location}</span>
              </div>
              <div>
                <div className="role-line">
                  <h3>{e.role}</h3>
                  <span className="tiny-label">INTERNSHIP</span>
                </div>
                <p className="experience-subtitle">{e.description}</p>
                <ul className="contributions">
                  {e.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <Tags items={e.technologies} />
              </div>
            </article>
          ))}
        </section>
        <section id="projects" className="shell section">
          <SectionTitle
            number="03"
            eyebrow="SELECTED WORK"
            title="Practical problems. Thoughtful solutions."
            description="A selection of products and systems I’ve been working on — from business operations to applied machine learning."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
        <section id="skills" className="shell section">
          <SectionTitle
            number="04"
            eyebrow="MY TOOLKIT"
            title="The tools behind the work."
            description="Technologies I’ve used to build, connect, and improve software."
          />
          <div className="skills-grid">
            {p.skills.map((s, i) => (
              <div className="skill-group" key={s.category} data-reveal>
                <span className="skill-number">0{i + 1}</span>
                <h3>{s.category}</h3>
                <Tags items={s.items} />
              </div>
            ))}
          </div>
          <div className="concepts">
            <span className="tiny-label">BUILT ON THE FUNDAMENTALS</span>
            <p>{p.concepts.join(" · ")}</p>
          </div>
        </section>
        <section className="shell section education-section">
          <div>
            <SectionTitle
              number="05"
              eyebrow="FOUNDATIONS"
              title="Always learning."
            />
            <div className="education-list">
              {p.education.map((e) => (
                <article key={e.degree} data-reveal>
                  <div className="education-meta">
                    <span>{e.period}</span>
                    <span>{e.result}</span>
                  </div>
                  <h3>{e.degree}</h3>
                  <p>{e.institution}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="certifications">
            <span className="tiny-label">CERTIFICATIONS</span>
            {p.certifications.map((c) => (
              <article key={c.title} data-reveal>
                <span className="certificate-icon">
                  <Sparkles size={19} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>
                    {c.issuer} <span>·</span> {c.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="shell contact-section" data-reveal>
          <div className="eyebrow">
            <i className="green-dot" /> LET’S CONNECT
          </div>
          <h2>
            Have an interesting problem?
            <br />
            <span>Let’s build something meaningful.</span>
          </h2>
          <p>
            I’m interested in software engineering opportunities and
            conversations about building useful products.
          </p>
          <a className="contact-email" href={`mailto:${p.email}`}>
            {p.email}
            <ArrowUpRight size={25} />
          </a>
          <div className="contact-actions">
            <CopyEmail />
            <a
              href={p.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={14} />
            </a>
            {p.socials.github ? (
              <a
                href={p.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <span>
          © {new Date().getFullYear()} {p.name}
        </span>
        <span>Thoughtfully built. Always evolving.</span>
        <a href={p.resume} download>
          Resume <ArrowUpRight size={13} />
        </a>
      </footer>
    </>
  );
}
