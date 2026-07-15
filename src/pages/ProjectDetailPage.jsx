import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Github, ExternalLink, ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-[#14b8a6] hover:underline">
            Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = project.dashboardGallery?.length > 0
    ? project.dashboardGallery
    : [project.image].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-12 pb-24">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-6xl w-full flex flex-col bg-white rounded shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex-1 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                <img
                  src={galleryImages[activeImage]}
                  alt={`${project.name} - Imagen ${activeImage + 1}`}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
              <div className="bg-white px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-gray-900 font-medium">{project.name}</span>
                <span className="text-gray-500 text-sm">
                  {activeImage + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Detalles del Proyecto</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#14b8a6] transition-colors font-medium text-sm"
          >
            <ArrowLeft size={16} />
            Volver a Proyectos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Images & Long Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Special Views: Coming Soon, PDF Viewer, or Gallery */}
            {project.comingSoon ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 shadow-sm rounded-xl flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximamente</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Estoy trabajando en la selección y edición de mi portafolio fotográfico. Muy pronto esta galería estará disponible.
                </p>
              </motion.div>
            ) : project.pdfUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 shadow-sm rounded-xl"
              >
                <div className="w-full flex justify-between items-center mb-4 px-2">
                  <h3 className="font-bold text-gray-800">Previsualización del Documento</h3>
                  <a href={`${import.meta.env.BASE_URL}${project.pdfUrl.startsWith('/') ? project.pdfUrl.slice(1) : project.pdfUrl}`} download className="text-sm text-[#14b8a6] hover:underline font-medium flex items-center gap-1">
                    Descargar PDF
                  </a>
                </div>
                <iframe
                  src={`${import.meta.env.BASE_URL}${project.pdfUrl.startsWith('/') ? project.pdfUrl.slice(1) : project.pdfUrl}`}
                  title={project.name}
                  className="w-full h-[800px] rounded border border-gray-200"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 shadow-sm rounded-xl"
              >
                <div 
                  className="relative aspect-video overflow-hidden mb-6 flex items-center justify-center cursor-zoom-in group rounded-lg bg-black/5"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  {/* Fondo desenfocado dinámico */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60 transition-all duration-500"
                    style={{ backgroundImage: `url(${galleryImages[activeImage]})` }}
                  />
                  
                  {/* Imagen principal */}
                  <img
                    src={galleryImages[activeImage]}
                    alt={`${project.name} - Imagen ${activeImage + 1}`}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                  />
                  
                  {/* Overlay hover */}
                  <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                {galleryImages.length > 1 && (
                  <div className="flex gap-3 justify-center pb-2">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                          activeImage === idx ? "bg-[#14b8a6] scale-y-110" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                        aria-label={`Ver imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Description Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Descripción General</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {project.context && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Contexto</h3>
                  <div className="bg-white p-6 shadow-sm border-l-4 border-[#14b8a6]">
                    <h4 className="font-semibold text-gray-900 mb-2">El Problema</h4>
                    <p className="text-gray-600 text-sm mb-4">{project.context.problem}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">La Solución</h4>
                    <p className="text-gray-600 text-sm mb-4">{project.context.solution}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Impacto</h4>
                    <p className="text-[#14b8a6] font-medium text-sm">{project.context.impact}</p>
                  </div>
                </div>
              )}

              {project.citation && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Cita del Artículo</h3>
                  <div className="bg-gray-100 p-6 shadow-sm rounded-lg border border-gray-200">
                    <p className="text-gray-700 font-mono text-sm break-words">{project.citation}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Project Info Box */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 shadow-sm space-y-6 sticky top-24"
            >
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#14b8a6]">
                  Información del Proyecto
                </h3>
                
                <ul className="space-y-4 text-sm">
                  <li className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-900">Categoría</span>
                    <span className="text-gray-600">{project.category}</span>
                  </li>
                  
                  {project.client && (
                    <li className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                      <span className="font-semibold text-gray-900">Cliente / Tipo</span>
                      <span className="text-gray-600">{project.client}</span>
                    </li>
                  )}
                  
                  {project.date && (
                    <li className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                      <span className="font-semibold text-gray-900">Fecha</span>
                      <span className="text-gray-600">{project.date}</span>
                    </li>
                  )}
                  
                  {project.demo && (
                    <li className="flex flex-col gap-1 pb-2">
                      <span className="font-semibold text-gray-900">URL del Proyecto</span>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#14b8a6] hover:underline truncate">
                        {project.demo}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {project.metrics && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Métricas Clave</h4>
                  <div className="space-y-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{key}</span>
                        <span className="font-bold text-[#1a1a1a]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-gray-100 text-gray-600 text-xs px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#14b8a6] hover:bg-[#0d9488] text-white text-center py-2.5 rounded-sm transition-colors text-sm font-semibold flex justify-center items-center gap-2"
                  >
                    <ExternalLink size={16} /> {project.pdfUrl ? "Ver Original" : "Visitar"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2.5 rounded-sm transition-colors text-sm font-semibold flex justify-center items-center gap-2"
                  >
                    <Github size={16} /> Repositorio
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
