import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    "Todas",
    "Software & Data",
    "Investigación",
    "Fotografía",
  ];

  const filtered = useMemo(() => {
    if (selectedCategory === "Todas") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Portafolio</h1>
          <p className="text-[var(--color-muted)] text-lg max-w-3xl">
            Explora mis trabajos más recientes en desarrollo de software, ciencia de datos, investigaciones académicas y fotografía profesional.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center md:justify-center gap-6 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors pb-1 ${
                selectedCategory === category
                  ? "text-[#14b8a6] border-b-2 border-[#14b8a6]"
                  : "text-[var(--color-muted)] hover:text-[#14b8a6]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--color-muted)] text-lg">
              Pronto añadiré más proyectos en esta categoría.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
