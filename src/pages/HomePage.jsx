import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import profileImg from "../assets/images/perfil.JPEG";
import { certifications } from "../data/certifications";
import { industryContexts } from "../data/industryContexts";
import { capabilityGroups, profile } from "../data/profile";
import { projects } from "../data/projects";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const proofPoints = [
  { value: projects.length.toString(), label: "casos documentados", note: "Datos, IA y producto" },
  { value: certifications.length.toString(), label: "credenciales verificables", note: "Con respaldo documental" },
  { value: capabilityGroups.length.toString(), label: "frentes técnicos", note: "Práctica end-to-end" },
  { value: industryContexts.length.toString(), label: "contextos profesionales", note: "Banca, industria y minería" },
];

export default function HomePage() {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-section">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="section-shell hero-grid">
        <Motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <Motion.div variants={reveal} className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            {profile.role}
          </Motion.div>
          <Motion.h1 variants={reveal}>{profile.headline}</Motion.h1>
          <Motion.p variants={reveal} className="hero-summary">{profile.summary}</Motion.p>
          <Motion.div variants={reveal} className="hero-actions">
            <button className="button-primary" onClick={() => scrollTo("projects")}>
              Ver proyectos <ArrowUpRight size={18} />
            </button>
            <a className="button-secondary" href={profile.links.cv} target="_blank" rel="noreferrer">
              Descargar CV <Download size={17} />
            </a>
            <button className="button-secondary button-secondary--compact" onClick={() => scrollTo("contact")}>
              Contacto <Mail size={17} />
            </button>
          </Motion.div>
          <Motion.div variants={reveal} className="hero-social">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <SiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <SiGithub aria-hidden="true" /> GitHub
            </a>
            <a href={profile.links.whatsapp} target="_blank" rel="noreferrer">
              <SiWhatsapp aria-hidden="true" /> WhatsApp
            </a>
          </Motion.div>
          <Motion.div variants={reveal} className="hero-meta">
            <span><MapPin size={16} aria-hidden="true" /> {profile.location}</span>
            <span>Disponible para oportunidades en datos, automatización y tecnología aplicada</span>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero-portrait__frame">
            <img src={profileImg} alt="Retrato profesional de Luis Romero" fetchPriority="high" />
          </div>
          <div className="hero-portrait__outline" aria-hidden="true" />
        </Motion.div>
      </div>

      <button className="scroll-cue" onClick={() => scrollTo("projects")} aria-label="Ir a proyectos">
        Explorar <ArrowDown size={16} />
      </button>

      <div className="section-shell metrics-strip" aria-label="Indicadores verificables del portafolio">
        {proofPoints.map((metric) => (
          <div key={metric.label} className="metric-item">
            <strong>{metric.value}</strong>
            <div><span>{metric.label}</span><small>{metric.note}</small></div>
          </div>
        ))}
      </div>
    </div>
  );
}
