import { createElement } from "react";
import { ArrowUpRight, BarChart3, BrainCircuit, Database, Layers3, Workflow } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiApachespark,
  SiBitbucket,
  SiFlask,
  SiGit,
  SiGooglecloud,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import SectionIntro from "../components/SectionIntro";
import { capabilityGroups } from "../data/profile";

const capabilityIcons = [Database, Workflow, BrainCircuit, Layers3];

const tools = [
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: Database },
  { name: "PySpark", icon: SiApachespark },
  { name: "Pandas", icon: SiPandas },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Power BI", icon: BarChart3 },
  { name: "Flask", icon: SiFlask },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Supabase", icon: SiSupabase },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "Bitbucket", icon: SiBitbucket },
  { name: "Control-M", icon: Workflow },
];

function ToolTrack({ hidden = false }) {
  return (
    <div className="tool-track" aria-hidden={hidden || undefined}>
      {tools.map(({ name, icon }) => (
        <div className="tool-logo" key={`${hidden ? "copy-" : ""}${name}`}>
          {createElement(icon, { "aria-hidden": true })}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="section-shell section-block section-block--compact">
      <SectionIntro
        eyebrow="Capacidades"
        title="Especialidades conectadas de principio a fin."
        description="No presento herramientas como una lista aislada: cada grupo explica qué problemas resuelvo y dónde puede verse aplicado."
      />

      <div className="capability-grid">
        {capabilityGroups.map((group, index) => {
          const Icon = capabilityIcons[index];
          return (
            <Motion.article
              className="capability-card"
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="capability-card__heading">
                <span><Icon aria-hidden="true" /></span>
                <p>{group.eyebrow}</p>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <strong>{group.problem}</strong>
              <div className="tag-list" aria-label={`Herramientas de ${group.title}`}>
                {group.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <Link to={`/projects/${group.projectId}`}>
                Ver caso relacionado <ArrowUpRight size={16} />
              </Link>
            </Motion.article>
          );
        })}
      </div>

      <div className="tools-heading">
        <p className="eyebrow">Stack transversal</p>
        <span>Tecnologías utilizadas a lo largo de mi carrera.</span>
      </div>
      <Motion.div
        className="tool-marquee"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ToolTrack />
        <ToolTrack hidden />
      </Motion.div>
    </div>
  );
}
