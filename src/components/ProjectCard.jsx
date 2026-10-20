import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const initials = project.shortName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  return (
    <article className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card__visual" aria-label={`Ver caso ${project.name}`}>
        {project.image ? (
          <img src={project.image} alt={`Vista del proyecto ${project.shortName}`} loading="lazy" />
        ) : (
          <div className={`project-card__fallback project-card__fallback--${project.accent || "blue"}`}>
            <span>{initials}</span>
            <div aria-hidden="true" className="project-card__grid" />
          </div>
        )}
        <span className="project-card__number">0{index + 1}</span>
        <span className="project-card__arrow"><ArrowUpRight size={20} /></span>
      </Link>
      <div className="project-card__content">
        <p>{project.eyebrow}</p>
        <h3><Link to={`/projects/${project.id}`}>{project.name}</Link></h3>
        <span>{project.description}</span>
      </div>
    </article>
  );
}
