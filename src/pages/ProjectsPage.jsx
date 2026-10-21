import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SectionIntro from "../components/SectionIntro";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const portfolioProjects = projects.filter((project) => project.category !== "Investigación");

  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Proyectos"
        title="Sistemas que ya pasaron de la idea a la práctica."
        description="Una selección de productos y automatizaciones explicados por el problema que resuelven, la decisión técnica y el valor que pueden generar."
      />

      <div className="projects-grid">
        {portfolioProjects.map((project, index) => (
          <Motion.div
            key={project.id}
            className={project.lead ? "project-grid-item project-grid-item--lead" : "project-grid-item"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: (index % 2) * 0.08 }}
          >
            <ProjectCard project={project} />
          </Motion.div>
        ))}
      </div>
    </div>
  );
}
