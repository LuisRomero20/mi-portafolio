import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Github, Info, X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id || item.legacyIds?.includes(id));
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryImages = useMemo(() => {
    if (!project) return [];
    return project.dashboardGallery?.length ? project.dashboardGallery : [project.image].filter(Boolean);
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveImage(0);
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

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxOpen]);

  if (!project) {
    return (
      <main className="detail-empty">
        <p className="eyebrow">404</p>
        <h1>Este proyecto no está disponible.</h1>
        <Link className="button-primary" to="/?section=projects">Volver a proyectos</Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="project-detail">
      <AnimatePresence>
        {lightboxOpen && galleryImages[activeImage] && (
          <Motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada de ${project.shortName}`}
          >
            <button onClick={() => setLightboxOpen(false)} aria-label="Cerrar imagen"><X /></button>
            <img
              src={galleryImages[activeImage]}
              alt={`${project.shortName}, captura ${activeImage + 1}`}
              onClick={(event) => event.stopPropagation()}
            />
          </Motion.div>
        )}
      </AnimatePresence>

      <div className="section-shell project-detail__header">
        <Link to="/?section=projects" className="back-link"><ArrowLeft size={17} /> Volver a proyectos</Link>
        <div className="project-detail__heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <span>{project.category}<small>{project.date}</small></span>
        </div>
      </div>

      <div className="section-shell project-detail__media">
        {galleryImages.length ? (
          <>
            <button className="project-detail__main-image" onClick={() => setLightboxOpen(true)} aria-label="Ampliar imagen">
              <img src={galleryImages[activeImage]} alt={`${project.shortName}, captura ${activeImage + 1}`} />
            </button>
            {galleryImages.length > 1 && (
              <div className="project-detail__thumbs" aria-label="Galería del proyecto">
                {galleryImages.map((image, index) => (
                  <button key={image} onClick={() => setActiveImage(index)} className={activeImage === index ? "is-active" : ""}>
                    <img src={image} alt={`Ver captura ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="project-detail__fallback"><ProjectVisual project={project} detailed /></div>
        )}
      </div>

      <div className="section-shell project-detail__body">
        <div className="project-detail__story">
          <div className="project-detail__overview">
            <p className="eyebrow">Visión general</p>
            <h2>{project.longDescription}</h2>
          </div>
          <div className="case-grid">
            <article><span>01</span><h3>Problema</h3><p>{project.context.problem}</p></article>
            <article><span>02</span><h3>Solución</h3><p>{project.context.solution}</p></article>
            <article><span>03</span><h3>Impacto</h3><p>{project.context.impact}</p></article>
          </div>
          {project.features?.length ? (
            <section className="project-feature-list">
              <p className="eyebrow">{project.featuresTitle || "Funciones principales"}</p>
              <div>
                {project.features.map((feature) => (
                  <article key={feature}><CheckCircle2 aria-hidden="true" /><span>{feature}</span></article>
                ))}
              </div>
            </section>
          ) : null}
          {(project.architecture?.length || project.evidence?.length) ? (
            <section className="project-proof-grid" aria-label="Arquitectura y evidencia">
              {project.architecture?.length ? (
                <article>
                  <p className="eyebrow">Arquitectura</p>
                  <h3>Cómo fluye la solución</h3>
                  <ol>{project.architecture.map((item) => <li key={item}>{item}</li>)}</ol>
                </article>
              ) : null}
              {project.evidence?.length ? (
                <article>
                  <p className="eyebrow">Evidencia disponible</p>
                  <h3>Qué puede verificarse</h3>
                  <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ) : null}
            </section>
          ) : null}
          {project.delivery ? (
            <section className="project-delivery">
              <p className="eyebrow">Estado real del producto</p>
              <div>
                {Object.entries(project.delivery).map(([label, items]) => (
                  <article key={label}>
                    <h3>{label}</h3>
                    <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          {project.statusNote ? (
            <div className="project-status-note"><Info aria-hidden="true" /><p>{project.statusNote}</p></div>
          ) : null}
          {project.citation && (
            <div className="citation-box"><strong>Referencia</strong><p>{project.citation}</p></div>
          )}
        </div>

        <aside className="project-facts">
          <div><span>Contexto</span><strong>{project.client}</strong></div>
          <div><span>Estado</span><strong>{project.status}</strong></div>
          {Object.entries(project.metrics).map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <div className="project-facts__stack">
            <span>Stack actual</span>
            <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          {project.plannedTechnologies?.length ? (
            <div className="project-facts__stack">
              <span>Arquitectura objetivo</span>
              <div className="tag-list">{project.plannedTechnologies.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ) : null}
          <div className="project-facts__actions">
            {project.demo && (
              <a className="button-primary" href={project.demo} target="_blank" rel="noreferrer">
                {project.pdfUrl ? "Abrir publicación" : "Ver proyecto"} <ExternalLink size={17} />
              </a>
            )}
            {project.github && (
              <a className="button-secondary" href={project.github} target="_blank" rel="noreferrer">
                Repositorio <Github size={17} />
              </a>
            )}
            {project.pdfUrl && (
              <a className="text-link" href={`${import.meta.env.BASE_URL}${project.pdfUrl.slice(1)}`} target="_blank" rel="noreferrer">
                Leer PDF <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
