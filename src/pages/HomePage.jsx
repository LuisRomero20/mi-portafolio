import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import profileImg from "../assets/images/portrait-adventure.jpg";
import { profile } from "../data/profile";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
          <Motion.p variants={reveal} className="hero-kicker">Hola, soy Luis Romero</Motion.p>
          <Motion.h1 variants={reveal}>{profile.headline}</Motion.h1>
          <Motion.p variants={reveal} className="hero-role">Data Engineer · Automation Builder · Product Mindset</Motion.p>
          <Motion.p variants={reveal} className="hero-summary">{profile.summary}</Motion.p>
          <Motion.div variants={reveal} className="hero-actions">
            <button className="button-primary" onClick={() => scrollTo("experience")}>
              Conoce mi trabajo <ArrowDown size={17} />
            </button>
            <a className="button-secondary" href={profile.links.cv} target="_blank" rel="noreferrer">
              Ver CV <Download size={17} />
            </a>
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
        </Motion.div>

        <Motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="hero-portrait__frame">
            <img src={profileImg} alt="Luis Romero en un paisaje de montaña" fetchPriority="high" />
          </div>
          <div className="hero-portrait__caption">
            <span>Lima, Perú</span>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              Disponible para conversar <ArrowUpRight size={15} />
            </a>
          </div>
        </Motion.div>
      </div>

      <button className="scroll-cue" onClick={() => scrollTo("experience")} aria-label="Ir a experiencia">
        Recorrer mi trabajo <ArrowDown size={16} />
      </button>
    </div>
  );
}
