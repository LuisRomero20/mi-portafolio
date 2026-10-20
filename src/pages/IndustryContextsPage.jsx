import { ArrowUpRight, Building2, Factory, Landmark } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro";
import { industryContexts } from "../data/industryContexts";

const icons = [Landmark, Factory, Building2];

export default function IndustryContextsPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Contextos profesionales"
        title="Datos y automatización en entornos donde la operación importa."
        description="Una vista prudente de las industrias y organizaciones vinculadas a mi experiencia y a casos de proyecto documentados."
      />

      <div className="industry-grid">
        {industryContexts.map((context, index) => {
          const Icon = icons[index];
          return (
            <Motion.article
              className={"industry-card industry-card--" + context.logoClass}
              key={context.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="industry-card__logo">
                <img src={context.logo} alt={"Logo de " + context.name} loading="lazy" />
              </div>
              <div className="industry-card__heading">
                <span><Icon size={17} aria-hidden="true" /> {context.sector}</span>
                <h3>{context.name}</h3>
              </div>
              <p>{context.relationship}</p>
              <div className="industry-card__contribution">
                <strong>Aporte relacionado</strong>
                <span>{context.contribution}</span>
              </div>
              <div className="industry-card__links">
                {context.projectId ? (
                  <Link to={"/projects/" + context.projectId}>Ver caso <ArrowUpRight size={15} /></Link>
                ) : null}
                <a href={context.website} target="_blank" rel="noreferrer">
                  Sitio oficial <ArrowUpRight size={15} />
                </a>
              </div>
            </Motion.article>
          );
        })}
      </div>

      <p className="industry-disclaimer">
        Las marcas identifican contextos profesionales o de proyecto. No implican patrocinio del portafolio ni una relación contractual directa distinta de la descrita.
      </p>
    </div>
  );
}
