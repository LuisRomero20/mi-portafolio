import { createElement } from "react";
import { BarChart3, Database, Workflow } from "lucide-react";
import { motion as Motion } from "framer-motion";
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
        title="Herramientas que me acompañan de principio a fin."
        description="Un stack construido a lo largo de mi carrera para conectar datos, operación, producto y entrega."
      />
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
