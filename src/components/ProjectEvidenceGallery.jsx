import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, ImageOff, X } from "lucide-react";

export default function ProjectEvidenceGallery({ items = [], projectName }) {
  const normalizedItems = items.filter((item) => item?.src || item?.placeholder);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const activeItem = normalizedItems[activeIndex];

  useEffect(() => {
    if (!dialogOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") setDialogOpen(false);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + normalizedItems.length) % normalizedItems.length);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % normalizedItems.length);
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [dialogOpen, normalizedItems.length]);

  if (!normalizedItems.length) return null;

  const openDialog = (event) => {
    triggerRef.current = event.currentTarget;
    setDialogOpen(true);
  };

  const move = (direction) => {
    setActiveIndex((index) => (index + direction + normalizedItems.length) % normalizedItems.length);
  };

  return (
    <section className="evidence-gallery" aria-labelledby="evidence-title">
      <div className="project-section-heading evidence-gallery__heading">
        <div>
          <p className="eyebrow">Evidencia visual</p>
          <h2 id="evidence-title">Capturas y artefactos del proyecto.</h2>
        </div>
        <span>{normalizedItems.length} {normalizedItems.length === 1 ? "evidencia" : "evidencias"}</span>
      </div>

      <figure className="evidence-gallery__stage">
        {activeItem.src ? (
          <button type="button" onClick={openDialog} aria-label={`Ampliar: ${activeItem.alt}`}>
            <img src={activeItem.src} alt={activeItem.alt} loading="eager" />
            <span><Expand aria-hidden="true" /> Ampliar</span>
          </button>
        ) : (
          <div className="evidence-gallery__placeholder" role="img" aria-label={activeItem.alt}>
            <ImageOff aria-hidden="true" />
            <strong>{activeItem.title || "Evidencia pendiente"}</strong>
            <span>Visual conceptual; no representa una captura funcional.</span>
          </div>
        )}
        <figcaption>
          <span data-type={activeItem.type || "real"}>{activeItem.type === "conceptual" ? "Conceptual" : "Evidencia real"}</span>
          <div><strong>{activeItem.title}</strong><p>{activeItem.caption}</p></div>
        </figcaption>
      </figure>

      {normalizedItems.length > 1 ? (
        <div className="evidence-gallery__thumbs" role="tablist" aria-label={`Galería de ${projectName}`}>
          {normalizedItems.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ver ${item.title}`}
              key={`${item.title}-${index}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.src ? <img src={item.src} alt="" loading="lazy" /> : <ImageOff aria-hidden="true" />}
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      ) : null}

      {dialogOpen && activeItem?.src ? (
        <div className="evidence-dialog" role="dialog" aria-modal="true" aria-labelledby="evidence-dialog-title" ref={dialogRef}>
          <button className="evidence-dialog__backdrop" type="button" onClick={() => setDialogOpen(false)} aria-label="Cerrar vista ampliada" />
          <div className="evidence-dialog__content">
            <div className="evidence-dialog__bar">
              <div><strong id="evidence-dialog-title">{activeItem.title}</strong><span>{activeIndex + 1} / {normalizedItems.length}</span></div>
              <button type="button" ref={closeButtonRef} onClick={() => setDialogOpen(false)} aria-label="Cerrar imagen"><X /></button>
            </div>
            <img src={activeItem.src} alt={activeItem.alt} />
            <p>{activeItem.caption}</p>
            {normalizedItems.length > 1 ? (
              <div className="evidence-dialog__nav">
                <button type="button" onClick={() => move(-1)}><ArrowLeft aria-hidden="true" /> Anterior</button>
                <button type="button" onClick={() => move(1)}>Siguiente <ArrowRight aria-hidden="true" /></button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
