import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectEvidenceGallery from "./ProjectEvidenceGallery";
import ProjectMetrics from "./ProjectMetrics";
import { moveFocusToMain } from "../utils/skipNavigation";
import { projects } from "../data/projects";

describe("ProjectArchitecture", () => {
  it("renders configured stages and their real status", () => {
    const html = renderToStaticMarkup(<ProjectArchitecture architecture={projects[0].architectureDiagram} />);
    expect(html).toContain("CSV de ventas");
    expect(html).toContain("Persistencia idempotente");
    expect(html).toContain("Implementado");
  });

  it("does not render without verified architecture data", () => {
    expect(renderToStaticMarkup(<ProjectArchitecture />)).toBe("");
  });
});

describe("ProjectMetrics", () => {
  it("renders context, source and version for verified metrics", () => {
    const html = renderToStaticMarkup(<ProjectMetrics metrics={projects[0].verifiedMetrics} />);
    expect(html).toContain("15/15");
    expect(html).toContain("Testing &amp; Evidence");
    expect(html).toContain("Commit 1a3ccad");
  });

  it("hides incomplete counters", () => {
    const html = renderToStaticMarkup(<ProjectMetrics metrics={[{ value: "99", label: "sin fuente" }]} />);
    expect(html).toBe("");
  });
});

describe("ProjectEvidenceGallery", () => {
  it("labels conceptual placeholders explicitly", () => {
    const html = renderToStaticMarkup(<ProjectEvidenceGallery projectName="Demo" items={[{
      placeholder: true,
      type: "conceptual",
      title: "Pendiente",
      alt: "Evidencia pendiente",
      caption: "No es una captura real.",
    }]} />);
    expect(html).toContain("Conceptual");
    expect(html).toContain("no representa una captura funcional");
  });
});

describe("verified project data", () => {
  it("keeps sources and versions attached to every published metric", () => {
    for (const project of projects) {
      for (const metric of project.verifiedMetrics || []) {
        expect(metric.context).toBeTruthy();
        expect(metric.source).toBeTruthy();
        expect(metric.version).toBeTruthy();
      }
    }
  });

  it("uses only known architecture statuses", () => {
    const known = new Set(["implemented", "development", "planned"]);
    for (const project of projects) {
      for (const lane of project.architectureDiagram?.lanes || []) {
        for (const stage of lane.stages) expect(known.has(stage.status)).toBe(true);
      }
    }
  });
});

describe("skip navigation", () => {
  it("scrolls and moves focus without changing the hash route", () => {
    let focused = false;
    let scrolled = false;
    const main = {
      scrollIntoView: () => { scrolled = true; },
      focus: () => { focused = true; },
    };
    const doc = { getElementById: (id) => (id === "main-content" ? main : null) };
    const view = { requestAnimationFrame: (callback) => callback() };
    expect(moveFocusToMain(doc, view)).toBe(true);
    expect(scrolled).toBe(true);
    expect(focused).toBe(true);
  });
});
