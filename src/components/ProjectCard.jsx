import { Github, ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";

const projectImageFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#f8fafc'/>
          <stop offset='100%' stop-color='#e2e8f0'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='44' fill='#94a3b8' font-family='Arial'>No Image</text>
    </svg>`
  );

export default function ProjectCard({ project }) {
  const imageUrl = project.image || projectImageFallback;

  return (
    <div className="group relative overflow-hidden bg-[#0b1120] shadow-sm transition-all duration-300 hover:shadow-xl rounded-none">
      {/* Main Image */}
      <img
        src={imageUrl}
        alt={project.name}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ aspectRatio: "4/3" }}
        onError={(event) => {
          event.currentTarget.src = projectImageFallback;
        }}
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 bg-[#0b1120]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {project.name}
        </h3>
        <p className="text-sm font-medium text-[#14b8a6] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {project.category}
        </p>
        
        <div className="flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          <Link
            to={`/projects/${project.id}`}
            className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#14b8a6] text-white flex items-center justify-center transition-colors shadow-lg"
            title="Detalles del Proyecto"
          >
            <Search size={18} />
          </Link>
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#14b8a6] text-white flex items-center justify-center transition-colors shadow-lg"
              title="Visitar Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#14b8a6] text-white flex items-center justify-center transition-colors shadow-lg"
              title="Repositorio GitHub"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
