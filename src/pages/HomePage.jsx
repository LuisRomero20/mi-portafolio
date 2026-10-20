import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { motion as Motion } from "framer-motion";
import aboutImg from "../assets/images/about.JPEG";
import { metrics, profile } from "../data/profile";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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
            Data Engineering · DataOps · Cloud
          </Motion.div>
          <Motion.h1 variants={reveal}>{profile.headline}</Motion.h1>
          <Motion.p variants={reveal} className="hero-summary">
            {profile.summary} Combino automatización, calidad y gobierno del dato con una mirada práctica de producto.
          </Motion.p>
          <Motion.div variants={reveal} className="hero-actions">
            <button className="button-primary" onClick={scrollToProjects}>
              Ver casos de estudio <ArrowUpRight size={18} />
            </button>
            <a className="button-secondary" href={profile.links.cv} target="_blank" rel="noreferrer">
              Descargar CV <Download size={17} />
            </a>
          </Motion.div>
          <Motion.div variants={reveal} className="hero-meta">
            <span><MapPin size={16} aria-hidden="true" /> {profile.location}</span>
            <span>Disponible para oportunidades en Data Engineering</span>
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
            <span>01</span>
            <p><strong>Ingeniería con criterio</strong>Del dato a una operación medible.</p>
          </div>
          <div className="hero-portrait__outline" aria-hidden="true" />
        </Motion.div>
      </div>

      <button className="scroll-cue" onClick={scrollToProjects} aria-label="Ir a proyectos">
        Explorar <ArrowDown size={16} />
      </button>

      <div className="section-shell metrics-strip" aria-label="Resultados profesionales destacados">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-item">
            <strong>{metric.value}</strong>
            <div>
              <span>{metric.label}</span>
              <small>{metric.note}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
