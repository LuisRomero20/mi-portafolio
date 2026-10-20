import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SectionIntro from "../components/SectionIntro";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Trabajo seleccionado"
        title="Ingeniería aplicada: del pipeline al sistema inteligente."
        description="Casos priorizados por relevancia profesional. Cada ficha distingue el tipo de trabajo, el estado real y la evidencia disponible."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Motion.div
            key={project.id}
            className={project.lead ? "project-grid-item project-grid-item--lead" : "project-grid-item"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: (index % 2) * 0.08 }}
          >
            <ProjectCard project={project} index={index} />
          </Motion.div>
        ))}
      </div>
    </div>
  );
}
