import { ArrowUpRight, Download } from "lucide-react";
import { motion as Motion } from "framer-motion";
import indraLogo from "../assets/brands/transparent/indra-v2.png";
import linkeoLogo from "../assets/brands/transparent/linkeo-v2.png";
import miconLogo from "../assets/brands/transparent/micon-v2.png";
import renovaLogo from "../assets/brands/transparent/renova-v2.png";
import SectionIntro from "../components/SectionIntro";
import { experiences, profile } from "../data/profile";

const logos = {
  indra: <img src={indraLogo} alt="Indra" />,
  renova: <img src={renovaLogo} alt="Renova" />,
  micon: <img src={miconLogo} alt="2M MICON" />,
  linkeo: <img src={linkeoLogo} alt="LINKEO" />,
};

export default function ResumePage() {
  return (
    <div className="section-shell section-block">
      <div className="experience-heading">
        <SectionIntro
          eyebrow="Experiencia"
          title="He crecido resolviendo problemas reales."
          description="De desarrollo y analítica a automatización industrial, plataformas de datos y construcción de producto."
        />
        <a className="button-secondary" href={profile.links.cv} target="_blank" rel="noreferrer">
          CV completo <Download size={17} />
        </a>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <Motion.article
            className={`experience-item experience-item--${experience.logo}`}
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={`experience-item__logo experience-item__logo--${experience.logo}`}>
              {logos[experience.logo]}
            </div>
            <div className="experience-item__main">
              <div className="experience-item__title">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-item__context">
                    <strong>{experience.company}</strong>
                    {experience.contextLines.map((line) => <span key={line}>{line}</span>)}
                  </p>
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
