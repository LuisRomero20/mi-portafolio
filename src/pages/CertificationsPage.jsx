import { certifications } from "../data/certifications";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-transparent py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Certificaciones & Cursos
          </h1>
          <p className="text-[var(--color-muted)] text-lg">
            Certificaciones de especialización profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1e293b] rounded-xl shadow-lg p-6 hover:shadow-2xl hover:bg-[#1e293b]/80 transition-all border border-[#1e293b] hover:border-blue-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
                  <Award size={32} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-100">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm mb-4">{cert.date}</p>
                  <span className="inline-block bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {cert.category}
                  </span>
                  
                  {cert.credentialUrl && (
                    <div className="mt-5">
                      <a
                        href={cert.credentialUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${cert.credentialUrl.slice(1)}` : cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors group"
                      >
                        Ver credencial 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
