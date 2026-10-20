import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import aboutImg from "../assets/images/about.JPEG";
import { certifications } from "../data/certifications";
import { capabilityGroups, profile } from "../data/profile";
import { projects } from "../data/projects";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const proofPoints = [
  { value: "3+", label: "años de experiencia", note: "Desde 2023" },
  { value: projects.length.toString(), label: "casos documentados", note: "Datos, IA y producto" },
  { value: certifications.length.toString(), label: "credenciales verificables", note: "Con respaldo documental" },
  { value: capabilityGroups.length.toString(), label: "frentes técnicos", note: "Práctica end-to-end" },
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
          <Motion.p variants={reveal} className="hero-name">{profile.name}</Motion.p>
          <Motion.div variants={reveal} className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            {profile.role} <span aria-hidden="true">→</span> AI Engineering
          </Motion.div>
          <Motion.h1 variants={reveal}>{profile.headline}</Motion.h1>
          <Motion.p variants={reveal} className="hero-summary">
            {profile.summary} Combino experiencia operativa, automatización y construcción de producto mientras expando el perfil hacia sistemas impulsados por IA.
          </Motion.p>
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
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </Motion.div>
          <Motion.div variants={reveal} className="hero-meta">
            <span><MapPin size={16} aria-hidden="true" /> {profile.location}</span>
            <span>Disponible para oportunidades en Data Engineering y DataOps</span>
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero-portrait__frame">
            <img src={aboutImg} alt="Luis Romero, Data Engineer" fetchPriority="high" />
            <div className="hero-portrait__overlay" />
          </div>
          <div className="hero-portrait__tag">
            <BadgeCheck aria-hidden="true" />
            <p><strong>Datos que operan con confianza</strong>Calidad, observabilidad y control antes de escalar.</p>
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
