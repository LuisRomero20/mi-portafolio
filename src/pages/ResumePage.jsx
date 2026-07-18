import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="py-24 bg-transparent text-[var(--color-text)]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">Resumen</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg">
            Transformando operaciones empresariales complejas en soluciones automatizadas, gobernadas y eficientes mediante tecnología de vanguardia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Perfil Profesional</h3>
            <div className="border-l-2 border-blue-500 pl-6 relative mb-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-xl font-bold text-blue-500 uppercase mb-2">Luis Jesus Romero Castro</h4>
              <p className="italic text-[var(--color-muted)] mb-4 text-justify">
                Consultor e Ingeniero de Datos con más de tres años de trayectoria optimizando ecosistemas corporativos y financieros estrictamente regulados. Especialista en habilitar la toma de decisiones estratégicas mediante el diseño de arquitecturas robustas, automatización de procesos y el gobierno del ciclo de vida del dato.
              </p>
              <ul className="list-disc ml-5 text-[var(--color-muted)] space-y-2">
                <li>Lima, Perú</li>
                <li>+51 907 362 779</li>
                <li>luis_jesusrc@hotmail.com</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Educación</h3>
            
            <div className="border-l-2 border-blue-500 pl-6 relative mb-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-lg font-bold text-blue-500 uppercase mb-2">Bachiller en Ingeniería de Sistemas de Información</h4>
              <h5 className="text-sm font-semibold text-slate-300 bg-slate-800 inline-block px-3 py-1 mb-3">2020 - 2024</h5>
              <p className="text-white italic mb-2">Universidad Peruana de Ciencias Aplicadas (UPC)</p>
              <p className="text-[var(--color-muted)]">
                Programa académico de excelencia tecnológica, acreditado internacionalmente por la prestigiosa certificadora ABET.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6 relative mb-12">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-lg font-bold text-blue-500 uppercase mb-2">Programa Avanzado de Inglés (TOEFL ITP)</h4>
              <h5 className="text-sm font-semibold text-slate-300 bg-slate-800 inline-block px-3 py-1 mb-3">2017 - 2023</h5>
              <p className="text-white italic mb-2">Instituto Cultural Peruano Norteamericano (ICPNA)</p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Certificaciones e Instituciones Globales</h3>
            
            <div className="border-l-2 border-blue-500 pl-6 relative mb-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <ul className="list-disc ml-5 text-[var(--color-muted)] space-y-3">
                <li><strong>AWS Certified Cloud Practitioner</strong> otorgado por Amazon Web Services (AWS).</li>
                <li><strong>Scrum Fundamentals Certified</strong> otorgado por SCRUMstudy.</li>
                <li><strong>Distributed Computing with Spark SQL</strong> por la University of California, Davis.</li>
                <li><strong>Python for Everybody</strong> por la University of Michigan.</li>
                <li><strong>Excel Skills for Business: Advanced</strong> por la Macquarie University.</li>
                <li><strong>Learn SQL Basics for Data Science</strong> por la University of California, Davis.</li>
              </ul>
            </div>
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Experiencia Profesional</h3>
            
            <div className="border-l-2 border-blue-500 pl-6 relative mb-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-lg font-bold text-blue-500 uppercase mb-2">Ingeniero de Datos & Cloud</h4>
              <h5 className="text-sm font-semibold text-slate-300 bg-slate-800 inline-block px-3 py-1 mb-3">Marzo 2025 - Presente</h5>
              <p className="text-white italic mb-4">Indra / Minsait (Cliente Exclusivo: BBVA Perú)</p>
              <ul className="list-disc ml-5 text-[var(--color-muted)] space-y-2 text-justify">
                <li>Lidero la optimización, calidad y continuidad operativa de procesos analíticos y mallas de datos para el sector financiero regulado.</li>
                <li>Diseñé e implementé avanzadas soluciones de automatización en Python para asegurar la resiliencia operativa y eliminar cuellos de botella en las rutas críticas del ecosistema bancario.</li>
                <li>Ejecuto auditorías de arquitectura, certificando fuentes de datos primarias y asegurando el estricto cumplimiento de los Service Level Agreements (SLA) del banco.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6 relative mb-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-lg font-bold text-blue-500 uppercase mb-2">Ingeniero de Soporte TI y Consultoría de Datos</h4>
              <h5 className="text-sm font-semibold text-slate-300 bg-slate-800 inline-block px-3 py-1 mb-3">Diciembre 2023 - Febrero 2025</h5>
              <p className="text-white italic mb-4">RENOVA S.A.C.</p>
              <ul className="list-disc ml-5 text-[var(--color-muted)] space-y-2 text-justify">
                <li>Implementé soporte tecnológico estratégico y optimización de recursos operativos para gigantes de la industria minera, incluyendo Anglo American Quellaveco, Compañía Minera Antamina, Minera Yanacocha y Sociedad Minera Cerro Verde.</li>
                <li>Desarrollé cuadros de mando integrales en Power BI y macros automatizadas para elevar la eficiencia en la gestión de inventarios y reportes de producción.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6 relative mb-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#040b14] border-2 border-blue-500"></div>
              <h4 className="text-lg font-bold text-blue-500 uppercase mb-2">Desarrollador Web & Analítica</h4>
              <h5 className="text-sm font-semibold text-slate-300 bg-slate-800 inline-block px-3 py-1 mb-3">Enero 2023 - Octubre 2023</h5>
              <p className="text-white italic mb-4">2M MICON SAC</p>
              <ul className="list-disc ml-5 text-[var(--color-muted)] space-y-2 text-justify">
                <li>Lideré la implementación de métricas analíticas en tiempo real y estrategias de optimización de rendimiento web, elevando significativamente los estándares de usabilidad y conversión comercial.</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
