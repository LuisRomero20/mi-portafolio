import { Database, BrainCircuit, Monitor, LineChart, ShieldCheck, Sigma } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Data Engineering & ETL",
    description: "Diseño y automatización de pipelines de datos (ETL) para extracción, limpieza y centralización de datos desde múltiples fuentes hacia Data Warehouses.",
    icon: <Database size={32} />,
  },
  {
    title: "Machine Learning & Predictivo",
    description: "Desarrollo de algoritmos de Machine Learning (Random Forest, SVM, Prophet) orientados a pronósticos de ventas y optimización de negocio.",
    icon: <BrainCircuit size={32} />,
  },
  {
    title: "Desarrollo Web Full-Stack",
    description: "Creación de plataformas web modernas, responsivas y seguras usando React, TypeScript y TailwindCSS con backend en la nube (Supabase).",
    icon: <Monitor size={32} />,
  },
  {
    title: "Business Intelligence",
    description: "Transformación de datos en paneles interactivos e intuitivos (Power BI, Streamlit) para el monitoreo de KPIs en tiempo real.",
    icon: <LineChart size={32} />,
  },
  {
    title: "Ciberseguridad con IA",
    description: "Implementación de modelos de inteligencia artificial para la detección temprana de amenazas cibernéticas (como Ransomware) y anomalías.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Análisis Estadístico",
    description: "Aplicación de estadística avanzada y modelos econométricos para realizar investigaciones profundas y obtener insights matemáticos.",
    icon: <Sigma size={32} />,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="py-20 px-4 sm:px-8 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[32px] font-bold text-white mb-4">Servicios</h2>
          <div className="w-16 h-1 bg-[#14b8a6] mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg">
            Soluciones tecnológicas integrales basadas en datos, inteligencia artificial y desarrollo de software moderno.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#0b1120] group p-8 rounded-xl border border-[#1e293b] shadow-sm hover:shadow-xl hover:border-[#14b8a6]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#14b8a6]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6] mb-6 group-hover:bg-[#14b8a6] group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-[var(--color-muted)] leading-relaxed relative z-10 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
