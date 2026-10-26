import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { industryBrands, industryGroups } from "../data/industryContexts";

function CompanyTrack({ hidden = false }) {
  return (
    <div className="company-track" aria-hidden={hidden || undefined}>
      {industryBrands.map((company) => (
        <div className={`company-logo company-logo--${company.logoClass}`} key={`${hidden ? "copy-" : ""}${company.name}`} role={hidden ? undefined : "img"} aria-label={hidden ? undefined : company.name}>
          <img src={company.logo} alt={hidden ? "" : company.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function IndustryContextsPage() {
  return (
    <div className="section-block company-section">
      <div className="section-shell company-section__intro">
        <SectionIntro
          eyebrow="Experiencia por industrias"
          title="Diseño para contextos donde la operación importa."
          description="Las marcas identifican una relación laboral, un cliente atendido desde un empleador o un proyecto documentado; cada caso aclara el vínculo real."
          align="center"
        />
      </div>
      <Motion.div
        className="company-marquee"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <CompanyTrack />
        <CompanyTrack hidden />
      </Motion.div>
      <p className="section-shell company-note">Marcas vinculadas a experiencia profesional o proyectos documentados; no implican patrocinio del portafolio.</p>
      <div className="section-shell industry-context-grid">
        {industryGroups.map((group, index) => (
          <Motion.article
            className={`industry-relationship-card${group.featured ? " industry-relationship-card--featured" : ""}`}
            key={group.company.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.04 }}
          >
            <header className="industry-relationship-card__company">
              <div className={`industry-brand-mark industry-brand-mark--${group.company.logoClass}`}>
                <img src={group.company.logo} alt={group.company.name} loading="lazy" />
              </div>
              <div>
                <p>{group.sector}</p>
                <h3>{group.company.name}</h3>
              </div>
            </header>

            {group.clients.length ? (
              <div className="industry-clients">
                <span>{group.clients.length === 1 ? "Cliente" : "Clientes vinculados"}</span>
                <div className="industry-clients__grid">
                  {group.clients.map((client) => (
                    <div className={`industry-client industry-client--${client.logoClass}`} key={client.name}>
                      <img src={client.logo} alt="" loading="lazy" />
                      <strong>{client.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="industry-engagement">{group.engagement}</p>
            )}

            <div className="industry-relationship-card__detail">
              <p>{group.relationship}</p>
              <p>{group.contribution}</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  );
}
