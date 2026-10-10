import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";
import { ProjectArt } from "@/components/project-art";

export function ProjectCover({ project }: { project: Project }) {
  const cover = project.screenshots[0];
  if (!cover) return <ProjectArt visual={project.visual} />;
  return (
    <div className="project-cover">
      <Image
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1160px) 45vw, 540px"
      />
      <span className="capture-label">Application screenshot</span>
    </div>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  if (!project.screenshots.length)
    return <ProjectArt visual={project.visual} />;
  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <h2 id="gallery-title">Inside the application</h2>
        <p>Select a screenshot to view the original at full size.</p>
      </div>
      <div
        className={`gallery-grid ${project.screenshots.length === 1 ? "single-capture" : ""}`}
      >
        {project.screenshots.map((shot, index) => (
          <figure
            key={shot.src}
            className={index === 0 ? "gallery-featured" : ""}
          >
            <a
              href={shot.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full-size screenshot: ${shot.alt} (opens in a new tab)`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes={
                  index === 0
                    ? "(max-width: 1160px) 92vw, 1080px"
                    : "(max-width: 700px) 92vw, (max-width: 1160px) 45vw, 530px"
                }
              />
              <span className="gallery-open" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </a>
            <figcaption>
              <span className="tiny-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
