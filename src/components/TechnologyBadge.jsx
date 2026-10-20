import {
  BadgeCheck,
  BarChart3,
  Clock3,
  Database,
  GitBranch,
  GitPullRequest,
  Layers3,
} from "lucide-react";
import {
  SiApachespark,
  SiBitbucket,
  SiBmcsoftware,
  SiFlask,
  SiGit,
  SiGnubash,
  SiGooglecloud,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";

const technologyIcons = {
  Python: { icon: SiPython, color: "#69a9dc" },
  SQL: { icon: Database, color: "#e2b65c" },
  PySpark: { icon: SiApachespark, color: "#f47b35" },
  "Spark SQL": { icon: SiApachespark, color: "#f47b35" },
  Pandas: { icon: SiPandas, color: "#e86bae" },
  Dataproc: { icon: SiGooglecloud, color: "#71a7ff" },
  "Control-M": { icon: SiBmcsoftware, color: "#ff765b" },
  Flask: { icon: SiFlask, color: "#dce5ef" },
  Bash: { icon: SiGnubash, color: "#76c76a" },
  PowerShell: { icon: VscTerminalPowershell, color: "#69a9ff" },
  Git: { icon: SiGit, color: "#f47655" },
  Bitbucket: { icon: SiBitbucket, color: "#5799ff" },
  "Data Quality": { icon: BadgeCheck, color: "#57d7a0" },
  "Data Lineage": { icon: GitBranch, color: "#55d9d0" },
  "Raw → Master": { icon: Layers3, color: "#a996ff" },
  "SLA / ANS": { icon: Clock3, color: "#f0b45a" },
  "PR checks": { icon: GitPullRequest, color: "#6db4ff" },
  "Power BI": { icon: BarChart3, color: "#f2c811" },
  Streamlit: { icon: SiStreamlit, color: "#ff6b6b" },
  "scikit-learn": { icon: SiScikitlearn, color: "#f7a84a" },
  React: { icon: SiReact, color: "#61dafb" },
  TypeScript: { icon: SiTypescript, color: "#5a9ee8" },
  Supabase: { icon: SiSupabase, color: "#4ed5a1" },
  PostgreSQL: { icon: SiPostgresql, color: "#6f9fc7" },
  Vercel: { icon: SiVercel, color: "#f4f6f8" },
};

export default function TechnologyBadge({ name }) {
  const technology = technologyIcons[name] || { icon: Database, color: "#8fa1b5" };
  const Icon = technology.icon;

  return (
    <span className="technology-badge" style={{ "--technology-color": technology.color }}>
      <Icon aria-hidden="true" />
      <span>{name}</span>
    </span>
  );
}
