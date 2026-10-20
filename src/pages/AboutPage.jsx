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
        title="Ingeniería, automatización y producto con una base sólida en datos."
        description="Una trayectoria orientada a comprender problemas reales y convertirlos en soluciones tecnológicas que puedan crecer."
      />

      <div className="about-layout">
        <Motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            Soy <strong>{profile.name}</strong>, bachiller en Ingeniería de Sistemas de Información por la UPC, egresado de un programa acreditado por ABET y AWS Certified Cloud Practitioner.
          </p>
          <p>
            Mi trabajo combina ingeniería de datos, automatización, desarrollo de productos digitales y tecnología aplicada. Conecto procesos, arquitectura y experiencia de uso para convertir necesidades complejas en soluciones claras, eficientes y mantenibles.
          </p>
          <p>
            Mi evolución hacia la IA aplicada parte de esa base: información confiable, sistemas observables y automatizaciones con propósito. El objetivo no es añadir IA como etiqueta, sino construir soluciones inteligentes, útiles y responsables.
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
          <p className="eyebrow">Un poco más de mí</p>
          <h3>Curiosidad, calma y perspectiva.</h3>
          <p>También encuentro inspiración fuera del trabajo. La fotografía, los viajes, el fútbol y la música fortalecen mi atención al detalle, mi creatividad y la forma en que observo cada problema.</p>
        </div>
      </div>
    </div>
  );
}
