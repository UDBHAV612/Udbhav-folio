import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { ProjectCover, ProjectGallery } from "../components/project-media";
import { projects, type Project } from "../lib/portfolio";

// Rendering-only fixture URLs: no fabricated image files or project content are published.
const original = projects[1];
const originalCaptures = original.screenshots;
const withCaptures: Project = {
  ...original,
  screenshots: [
    {
      src: "/screenshots/render-test-one.png",
      alt: "Rendering test one",
      caption: "First test caption",
      width: 1200,
      height: 800,
    },
    {
      src: "/screenshots/render-test-two.png",
      alt: "Rendering test two",
      caption: "Second test caption",
      width: 800,
      height: 1200,
    },
  ],
};
const fallback = renderToStaticMarkup(<ProjectGallery project={original} />);
assert.match(fallback, /project-art/);
assert.doesNotMatch(fallback, /<img/);
const gallery = renderToStaticMarkup(<ProjectGallery project={withCaptures} />);
assert.equal((gallery.match(/<figure/g) || []).length, 2);
assert.match(gallery, /alt="Rendering test one"/);
assert.match(gallery, /width="800" height="1200"/);
assert.match(gallery, /Second test caption/);
assert.match(gallery, /href="\/screenshots\/render-test-two.png"/);
assert.match(gallery, /rel="noopener noreferrer"/);
assert.match(gallery, /srcSet=/i);
const cover = renderToStaticMarkup(<ProjectCover project={withCaptures} />);
assert.match(cover, /Rendering test one/);
assert.doesNotMatch(cover, /Rendering test two/);
const single = renderToStaticMarkup(
  <ProjectGallery
    project={{ ...withCaptures, screenshots: [withCaptures.screenshots[0]] }}
  />,
);
assert.match(single, /single-capture/);
assert.equal(original.screenshots, originalCaptures);
const bakeflow = projects[0];
assert.equal(bakeflow.screenshots.length, 5);
assert.equal(bakeflow.screenshots[0].src, "/images/bakeflow/dashboard.png");
const bakeflowCover = renderToStaticMarkup(<ProjectCover project={bakeflow} />);
const bakeflowGallery = renderToStaticMarkup(<ProjectGallery project={bakeflow} />);
assert.match(bakeflowCover, /dashboard.png/);
assert.equal((bakeflowGallery.match(/<figure/g) || []).length, 5);
for (const screenshot of bakeflow.screenshots) {
  assert.match(bakeflowGallery, new RegExp(`href="${screenshot.src}"`));
  assert.match(bakeflowGallery, new RegExp(screenshot.caption));
}
console.log(
  "PASS: abstract fallback, BakeFlow cover and five screenshots, optimized gallery, captions, full-size links, single capture, and immutable source data.",
);
