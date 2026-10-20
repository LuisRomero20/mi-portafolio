import { ArrowUpRight, Download } from "lucide-react";
import { motion as Motion } from "framer-motion";
import indraLogo from "../assets/images/Indra.jfif";
import renovaLogo from "../assets/images/Renova.png";
import miconLogo from "../assets/images/2micon.png";
import SectionIntro from "../components/SectionIntro";
import { experiences, profile } from "../data/profile";

const logos = {
  indra: <img src={indraLogo} alt="Indra" />,
  renova: <img src={renovaLogo} alt="Renova" />,
  micon: <img src={miconLogo} alt="2M MICON" />,
  linkeo: <span aria-hidden="true">L</span>,
};

export default function ResumePage() {
  return (
    <div className="section-shell section-block">
      <div className="experience-heading">
        <SectionIntro
          eyebrow="Experiencia"
          title="Experiencia construida desde la operación real."
          description="Una progresión desde desarrollo y analítica hacia automatización industrial, operación de datos críticos y construcción de producto."
        />
        <a className="button-secondary" href={profile.links.cv} target="_blank" rel="noreferrer">
          CV completo <Download size={17} />
        </a>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Motion.article
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="experience-item__index">0{index + 1}</div>
            <div className={`experience-item__logo experience-item__logo--${experience.logo}`}>
              {logos[experience.logo]}
            </div>
            <div className="experience-item__main">
              <div className="experience-item__title">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company} · {experience.context}</p>
                </div>
                <span>{experience.period}</span>
              </div>
              <p className="experience-item__summary">{experience.summary}</p>
              <ul>
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="tag-list">
                {experience.stack.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </Motion.article>
        ))}
      </div>

      <a className="experience-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
        Más contexto profesional en LinkedIn <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
