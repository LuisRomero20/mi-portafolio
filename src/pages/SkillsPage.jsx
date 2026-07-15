import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillsData = [
    { name: "Arquitectura Cloud & Big Data (AWS, Spark SQL, HDFS, Dataproc)", percentage: 95 },
    { name: "DataOps, Ingeniería y Automatización (Python, SQL, CI/CD)", percentage: 90 },
    { name: "Gobierno, Modelado y Calidad de Datos (DQA, Data Lineage)", percentage: 85 },
    { name: "BI & Analítica de Negocios (Power BI, Google Analytics)", percentage: 80 },
  ];

  return (
    <div className="py-24 bg-[#040b14] text-[var(--color-text)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">Skills Funcionales y Técnicas</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg">
            Experiencia comprobada en la construcción de ecosistemas de datos escalables, seguros y alineados a las exigencias corporativas de la alta banca y la industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white uppercase text-sm">{skill.name}</span>
                <span className="font-semibold text-blue-500">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-none h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-blue-500 h-2.5 rounded-none"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
