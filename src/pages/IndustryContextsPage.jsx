import { motion as Motion } from "framer-motion";
import indraLogo from "../assets/images/Indra.jfif";
import renovaLogo from "../assets/images/Renova.png";
import miconLogo from "../assets/images/2micon.png";
import SectionIntro from "../components/SectionIntro";
import { industryContexts } from "../data/industryContexts";

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
        eyebrow="Contexto profesional"
        title="Empresas que forman parte de mi recorrido."
        description="Banca, minería, industria, consultoría y producto digital: contextos donde aprendí a diseñar para la operación real."
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
      <p className="section-shell company-note">Marcas vinculadas a experiencia profesional o proyectos documentados.</p>
    </div>
  );
}
