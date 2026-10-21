import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  return (
    <article className={project.lead ? "project-card project-card--lead" : "project-card"}>
      <Link to={`/projects/${project.id}`} className="project-card__visual" aria-label={`Ver caso ${project.name}`}>
        {project.image ? (
          <img src={project.image} alt={`Vista del proyecto ${project.shortName}`} loading="lazy" />
        ) : (
          <ProjectVisual project={project} />
        )}
        <span className="project-card__arrow"><ArrowUpRight size={20} /></span>
        <span className="project-card__badge">{project.priorityLabel}</span>
      </Link>
      <div className="project-card__content">
        <div className="project-card__meta">
          <p>{project.eyebrow}</p>
          <div className="project-card__classification">
            <span>{project.category}</span>
            <small>{project.status}</small>
          </div>
        </div>
        <h3><Link to={`/projects/${project.id}`}>{project.name}</Link></h3>
        <span className="project-card__description">{project.description}</span>
        <div className="project-card__stack" aria-label="Tecnologías principales">
          {project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
    </article>
  );
}
