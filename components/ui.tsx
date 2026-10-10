import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCover } from "@/components/project-media";
import type { Project } from "@/lib/portfolio";
export function SectionTitle({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div className="eyebrow">
        <span>{number}</span> / {eyebrow}
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-card ${index === 0 ? "featured" : ""}`}
      data-reveal
    >
      <Link
        className="project-link"
        href={`/projects/${project.slug}`}
        aria-label={`Read ${project.name} case study`}
      >
        <ProjectCover project={project} />
        <div className="project-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <span
              className={`status ${project.status === "Built" ? "built" : ""}`}
            >
              {project.status}
            </span>
          </div>
          <div className="project-title">
            <h3>{project.name}</h3>
            <ArrowUpRight size={22} />
          </div>
          <p>{project.summary}</p>
          <Tags items={project.stack} />
          <span className="case-link">
            Explore project <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}
