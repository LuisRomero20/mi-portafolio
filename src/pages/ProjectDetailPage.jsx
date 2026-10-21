import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Github, Info } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProjectArchitecture from "../components/ProjectArchitecture";
import ProjectEvidenceGallery from "../components/ProjectEvidenceGallery";
import ProjectMetrics from "../components/ProjectMetrics";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const headingRef = useRef(null);
  const project = projects.find((item) => item.id === id || item.legacyIds?.includes(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    window.requestAnimationFrame(() => headingRef.current?.focus());
  }, [id]);

  useEffect(() => {
    const defaultTitle = "Luis Romero · Data Engineering & AI Applied";
    const description = document.querySelector('meta[name="description"]');
    const defaultDescription = "Portafolio de Luis Romero: ingeniería de datos, automatización, producto digital e IA aplicada.";

    document.title = project ? `${project.shortName} · Luis Romero` : defaultTitle;
    if (description) description.setAttribute("content", project?.description || defaultDescription);

    return () => {
      document.title = defaultTitle;
      if (description) description.setAttribute("content", defaultDescription);
    };
  }, [project]);

  if (!project) {
    return (
      <main id="main-content" tabIndex="-1" className="detail-empty">
        <p className="eyebrow">404</p>
        <h1 ref={headingRef} tabIndex="-1">Este proyecto no está disponible.</h1>
        <Link className="button-primary" to="/?section=projects">Volver a proyectos</Link>
      </main>
    );
  }

  return (
    <main id="main-content" tabIndex="-1" className="project-detail">
      <div className="section-shell project-detail__header">
        <Link to="/?section=projects" className="back-link"><ArrowLeft size={17} /> Volver a proyectos</Link>
        <div className="project-detail__heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 ref={headingRef} tabIndex="-1">{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <div className="project-detail__state">
            <span>{project.status}</span>
            <small>{project.category} · {project.date}</small>
          </div>
        </div>
      </div>

      <div className="section-shell project-detail__body project-detail__body--v21">
        <div className="project-detail__story">
          <section className="project-detail__overview" aria-labelledby="overview-title">
            <p className="eyebrow">Descripción ejecutiva</p>
            <h2 id="overview-title">{project.longDescription}</h2>
          </section>

          <ProjectEvidenceGallery key={project.id} items={project.evidenceGallery} projectName={project.shortName} />

          <section className="case-grid case-grid--v21" aria-label="Problema, solución e impacto">
            <article><h2>Problema</h2><p>{project.context.problem}</p></article>
            <article><h2>Solución</h2><p>{project.context.solution}</p></article>
            <article><h2>Impacto</h2><p>{project.context.impact}</p></article>
          </section>

          <ProjectArchitecture architecture={project.architectureDiagram} />

          {project.engineeringDecisions?.length ? (
            <section className="engineering-decisions" aria-labelledby="decisions-title">
              <div className="project-section-heading">
                <div>
                  <p className="eyebrow">Decisiones de ingeniería</p>
                  <h2 id="decisions-title">Elecciones, motivos y trade-offs.</h2>
                </div>
              </div>
              <div className="engineering-decisions__list">
                {project.engineeringDecisions.map((decision) => (
                  <article key={decision.title}>
                    <h3>{decision.title}</h3>
                    <dl>
                      <div><dt>Problema</dt><dd>{decision.problem}</dd></div>
                      <div><dt>Decisión</dt><dd>{decision.choice}</dd></div>
                      <div><dt>Motivo</dt><dd>{decision.rationale}</dd></div>
                      <div><dt>Trade-off</dt><dd>{decision.tradeoff}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {project.features?.length ? (
            <section className="project-feature-list project-feature-list--v21">
              <div className="project-section-heading">
                <div>
                  <p className="eyebrow">{project.featuresTitle || "Funciones implementadas"}</p>
                  <h2>Qué existe hoy en el proyecto.</h2>
                </div>
              </div>
              <div>
                {project.features.map((feature) => (
                  <article key={feature}><CheckCircle2 aria-hidden="true" /><span>{feature}</span></article>
                ))}
              </div>
            </section>
          ) : null}

          <ProjectMetrics metrics={project.verifiedMetrics} />

          {project.delivery ? (
            <section className="project-delivery">
              <p className="eyebrow">Estado real del producto</p>
              <div>
                {Object.entries(project.delivery).map(([label, items]) => (
                  <article key={label}><h3>{label}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>
                ))}
              </div>
            </section>
          ) : null}

          {project.evidence?.length ? (
            <section className="project-proof-list" aria-labelledby="proof-title">
              <p className="eyebrow">Trazabilidad</p>
              <h2 id="proof-title">Qué puede verificarse</h2>
              <ul>{project.evidence.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
            </section>
          ) : null}

          {project.statusNote ? <div className="project-status-note"><Info aria-hidden="true" /><p>{project.statusNote}</p></div> : null}
          {project.citation ? <div className="citation-box"><strong>Referencia</strong><p>{project.citation}</p></div> : null}
        </div>

        <aside className="project-facts" aria-label="Ficha técnica del proyecto">
          <div><span>Contexto</span><strong>{project.client}</strong></div>
          {Object.entries(project.summaryFacts || {}).map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <div className="project-facts__stack">
            <span>Tecnologías verificadas</span>
            <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          {project.plannedTechnologies?.length ? (
            <div className="project-facts__stack project-facts__stack--planned">
              <span>Tecnologías objetivo</span>
              <div className="tag-list">{project.plannedTechnologies.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ) : null}
          <div className="project-facts__actions">
            {project.demo ? (
              <a className="button-primary" href={project.demo} target="_blank" rel="noreferrer">
                {project.pdfUrl ? "Abrir publicación" : "Ver proyecto"} <ExternalLink size={17} />
              </a>
            ) : null}
            {project.github ? (
              <a className="button-secondary" href={project.github} target="_blank" rel="noreferrer">
                Repositorio <Github size={17} />
              </a>
            ) : null}
            {project.pdfUrl ? (
              <a className="text-link" href={`${import.meta.env.BASE_URL}${project.pdfUrl.slice(1)}`} target="_blank" rel="noreferrer">
                Leer PDF <ArrowUpRight size={17} />
              </a>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}
