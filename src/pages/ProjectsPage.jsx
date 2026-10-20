import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SectionIntro from "../components/SectionIntro";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Trabajo seleccionado"
        title="Casos que muestran cómo pienso y ejecuto."
        description="Una selección de producto, automatización, ingeniería de datos e investigación. Cada caso explica el problema, la solución y la evidencia disponible."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Motion.div
            key={project.id}
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
