import { ArrowUpRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import indraLogo from "../assets/images/Indra.jfif";
import renovaLogo from "../assets/images/Renova.png";
import miconLogo from "../assets/images/2micon.png";
import SectionIntro from "../components/SectionIntro";
import { industryContexts, industryGroups } from "../data/industryContexts";

const companies = [
  ...industryContexts.map(({ name, logo }) => ({ name, logo })),
  { name: "Indra / Minsait", logo: indraLogo },
  { name: "RENOVA", logo: renovaLogo },
  { name: "2M MICON", logo: miconLogo },
  { name: "LINKEO", monogram: "LINKEO" },
];

function CompanyTrack({ hidden = false }) {
  return (
    <div className="company-track" aria-hidden={hidden || undefined}>
      {companies.map((company) => (
        <div className="company-logo" key={`${hidden ? "copy-" : ""}${company.name}`} role={hidden ? undefined : "img"} aria-label={hidden ? undefined : company.name}>
          {company.logo ? <img src={company.logo} alt={hidden ? "" : company.name} loading="lazy" /> : <strong>{company.monogram}</strong>}
        </div>
      ))}
    </div>
  );
}

export default function IndustryContextsPage() {
  return (
    <div className="section-block company-section">
      <div className="section-shell">
      <SectionIntro
        eyebrow="Experiencia por industrias"
        title="Diseño para contextos donde la operación importa."
        description="Las marcas identifican una relación laboral, un cliente atendido desde un empleador o un proyecto documentado; cada caso aclara el vínculo real."
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
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.04 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3>
            <strong>{group.organizations}</strong>
            <p>{group.relationship}</p>
            <p>{group.contribution}</p>
            {group.projectId ? (
              <Link to={`/projects/${group.projectId}`}>Ver caso relacionado <ArrowUpRight size={16} /></Link>
            ) : null}
          </Motion.article>
        ))}
      </div>
    </div>
  );
}
