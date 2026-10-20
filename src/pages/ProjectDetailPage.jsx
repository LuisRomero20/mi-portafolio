import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
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

  const initials = project.shortName.split(" ").map((word) => word[0]).join("").slice(0, 3);

  return (
    <main className="project-detail">
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
          <div className={`project-detail__fallback project-card__fallback--${project.accent || "blue"}`}>
            <span>{initials}</span><p>{project.shortName}</p>
          </div>
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
          {project.citation && (
            <div className="citation-box"><strong>Referencia</strong><p>{project.citation}</p></div>
          )}
        </div>

        <aside className="project-facts">
          <div><span>Tipo</span><strong>{project.client}</strong></div>
          {Object.entries(project.metrics).map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <div className="project-facts__stack">
            <span>Tecnologías</span>
            <div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
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
