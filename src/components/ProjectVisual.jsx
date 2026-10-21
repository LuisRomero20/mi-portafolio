import { ContactRound, Radio, ScanLine } from "lucide-react";

export default function ProjectVisual({ project, detailed = false }) {
  if (project.visualVariant === "linkeo") {
    return (
      <div
        className={`linkeo-visual ${detailed ? "linkeo-visual--detailed" : ""}`}
        role="img"
        aria-label="Representación conceptual de LINKEO: NFC y QR conectados con un perfil digital"
      >
        <div className="linkeo-visual__signal linkeo-visual__signal--nfc">
          <Radio aria-hidden="true" />
          <span>NFC</span>
        </div>
        <div className="linkeo-visual__profile">
          <div className="linkeo-visual__avatar"><ContactRound aria-hidden="true" /></div>
          <strong>Perfil digital</strong>
          <small>Identidad editable</small>
          <div><span>Contacto</span><span>Redes</span><span>Portafolio</span></div>
        </div>
        <div className="linkeo-visual__signal linkeo-visual__signal--qr">
          <ScanLine aria-hidden="true" />
          <span>QR</span>
        </div>
        <p>Arquitectura de producto · No es una captura de interfaz</p>
      </div>
    );
  }

  const initials = project.shortName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  return (
    <div className={`project-card__fallback project-card__fallback--${project.accent || "blue"}`}>
      <span>{initials}</span>
      <div aria-hidden="true" className="project-card__grid" />
    </div>
  );
}
