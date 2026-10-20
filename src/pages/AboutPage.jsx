import { ArrowUpRight, BrainCircuit, Database, Workflow } from "lucide-react";
import { motion as Motion } from "framer-motion";
import homeImg from "../assets/images/home.JPEG";
import SectionIntro from "../components/SectionIntro";
import { careerDirection, profile } from "../data/profile";

const directionIcons = [Database, Workflow, BrainCircuit];

export default function AboutPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Perfil profesional"
        title="Ingeniería de datos hoy. Arquitectura e IA como siguiente capa."
        description="Una trayectoria construida desde la operación: entender el flujo real, estabilizarlo y convertirlo en una plataforma capaz de crecer."
      />

      <div className="about-layout">
        <Motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            Soy <strong>{profile.name}</strong>, bachiller en Ingeniería de Sistemas de Información por la UPC, AWS Certified Cloud Practitioner y Data Engineer con experiencia desde 2023.
          </p>
          <p>
            Trabajo sobre pipelines, procesos batch, controles de calidad y automatizaciones en contextos donde una falla operativa sí tiene consecuencias. También construyo productos propios, lo que me obliga a conectar arquitectura, experiencia de usuario y entrega.
          </p>
          <p>
            Mi evolución hacia AI Engineering parte de esa base: datos gobernados, observabilidad y acciones controladas. No busco añadir IA como etiqueta, sino diseñar sistemas útiles, auditables y seguros.
          </p>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">
            Ver trayectoria completa en LinkedIn <ArrowUpRight size={17} />
          </a>
        </Motion.div>

        <Motion.div
          className="career-direction"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1 }}
        >
          {careerDirection.map((item, index) => {
            const Icon = directionIcons[index];
            return (
              <article className="direction-card" key={item.title}>
                <Icon aria-hidden="true" />
                <div>
                  <span>{item.title}</span>
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
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
