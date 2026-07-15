import { motion } from "framer-motion";
import { ChevronRight, Code, Network, Award, Clock, User } from "lucide-react";
import aboutImg from "../assets/images/about.JPEG";

export default function AboutPage() {
  return (
    <div className="py-24 bg-transparent text-[var(--color-text)] relative">
      {/* Fondo sutil (opcional para mantener cohesión con el tema oscuro) */}
      <div className="absolute inset-0 bg-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">About</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg">
            Conoce más sobre mi perfil profesional, experiencia y habilidades clave.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="w-full aspect-[3/4] bg-slate-800 rounded-lg shadow-lg border border-slate-700 flex items-center justify-center overflow-hidden">
                <img 
                  src={aboutImg} 
                  alt="Luis Romero" 
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 pt-4 lg:pt-0"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Ingeniero de Datos & Consultor AWS Cloud</h3>
            <p className="italic text-[var(--color-muted)] mb-8 text-lg">
              Transformo la complejidad de tus datos en decisiones claras, seguras y automatizadas. Ayudo a las empresas a escalar y reducir costos operativos mediante soluciones tecnológicas en la nube.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Especialidad:</strong> 
                  <span className="text-[var(--color-muted)]">Soluciones Cloud & Analítica</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Sitio Web:</strong> 
                  <span className="text-[var(--color-muted)] break-all">github.com/LuisRomero20</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Teléfono:</strong> 
                  <span className="text-[var(--color-muted)]">+51 907 362 779</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Ciudad:</strong> 
                  <span className="text-[var(--color-muted)]">Lima, Perú</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Experiencia:</strong> 
                  <span className="text-[var(--color-muted)]">+3 Años (Sector Financiero)</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Grado:</strong> 
                  <span className="text-[var(--color-muted)]">Bachiller en Ingeniería</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Correo:</strong> 
                  <span className="text-[var(--color-muted)] break-all">luis_jesusrc@hotmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0" />
                  <strong className="text-white min-w-[90px]">Freelance:</strong> 
                  <span className="text-[var(--color-muted)]">Disponible</span>
                </li>
              </ul>
            </div>

            <p className="text-[var(--color-muted)] leading-relaxed mb-4 text-justify">
              En el entorno empresarial actual, el verdadero valor no está solo en acumular información, sino en saber cómo utilizarla para ahorrar tiempo, reducir costos operacionales y respaldar decisiones estratégicas. Me especializo en diseñar e implementar soluciones tecnológicas inmediatas que automatizan procesos lentos, integran datos dispersos y construyen una infraestructura sólida y escalable para el crecimiento de tu negocio.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed text-justify">
              Como profesional respaldado por certificaciones internacionales (AWS, ABET) y con experiencia activa como consultor para la alta banca (BBVA Perú), aplico los más altos estándares de seguridad, eficiencia y gobierno de datos corporativo a cada proyecto. Ya sea desarrollando un flujo automatizado de reportes, optimizando bases de datos o migrando operaciones a la nube, mi objetivo es simple: que la tecnología trabaje a favor de tu rentabilidad, dándote visibilidad total y control sobre tu empresa.
            </p>
          </motion.div>
        </div>

        {/* Facts / Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-full mt-1 border border-blue-500/20">
              <Code size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">+12</p>
              <p className="text-sm text-[var(--color-muted)] leading-tight font-medium">Soluciones y Proyectos Entregados</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-full mt-1 border border-blue-500/20">
              <Network size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">+20</p>
              <p className="text-sm text-[var(--color-muted)] leading-tight font-medium">Procesos Automatizados</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-full mt-1 border border-blue-500/20">
              <Award size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">11</p>
              <p className="text-sm text-[var(--color-muted)] leading-tight font-medium">Certificaciones Obtenidas</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-full mt-1 border border-blue-500/20">
              <Clock size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">+3</p>
              <p className="text-sm text-[var(--color-muted)] leading-tight font-medium">Años de Experiencia Corporativa</p>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
