import { ArrowUpRight, CheckCircle2, GraduationCap } from "lucide-react";
import { motion as Motion } from "framer-motion";
import homeImg from "../assets/images/home.JPEG";
import SectionIntro from "../components/SectionIntro";
import { profile } from "../data/profile";

export default function AboutPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Perfil profesional"
        title="Confiabilidad técnica con una mirada de negocio."
        description="Mi especialidad es transformar procesos manuales o frágiles en flujos claros, medibles y escalables."
      />

      <div className="about-layout">
        <Motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            Soy <strong>{profile.name}</strong>, bachiller en Ingeniería de Sistemas de Información por la UPC y AWS Certified Cloud Practitioner.
          </p>
          <p>
            He trabajado con operaciones de datos en banca, automatización para el sector industrial y construcción de productos digitales. Esa combinación me permite entender tanto la estabilidad del backend como la experiencia que recibe el usuario final.
          </p>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">
            Ver trayectoria completa en LinkedIn <ArrowUpRight size={17} />
          </a>
        </Motion.div>

        <Motion.div
          className="about-principles"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1 }}
        >
          <div className="principle-card">
            <CheckCircle2 aria-hidden="true" />
            <div><strong>Primero, la operación</strong><span>Observo el flujo real antes de proponer arquitectura o automatización.</span></div>
          </div>
          <div className="principle-card">
            <CheckCircle2 aria-hidden="true" />
            <div><strong>Evidencia sobre intuición</strong><span>Mido fallos, tiempos y calidad para priorizar lo que genera impacto.</span></div>
          </div>
          <div className="principle-card">
            <GraduationCap aria-hidden="true" />
            <div><strong>Aprendizaje continuo</strong><span>Mi siguiente nivel profesional está en arquitectura, cloud y plataformas de datos.</span></div>
          </div>
        </Motion.div>
      </div>

      <div className="beyond-card">
        <img src={homeImg} alt="Luis Romero fotografiando un paisaje de montaña" loading="lazy" />
        <div>
          <p className="eyebrow">Más allá del código</p>
          <h3>Curiosidad, calma y perspectiva.</h3>
          <p>La fotografía, los viajes, el fútbol y la música alimentan una forma de trabajar atenta al detalle y abierta a nuevas ideas.</p>
        </div>
      </div>
    </div>
  );
}
