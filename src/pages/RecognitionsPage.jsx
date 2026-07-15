import { recognitions } from "../data/recognitions";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function RecognitionsPage() {
  return (
    <div className="min-h-screen bg-transparent py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Reconocimientos</h1>
          <p className="text-[var(--color-muted)] text-lg">
            Premios y reconocimientos destacados en mi trayectoria profesional
          </p>
        </motion.div>

        {recognitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitions.map((rec, idx) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1e293b] rounded-xl shadow-lg p-8 hover:shadow-2xl hover:bg-[#1e293b]/80 transition-all border border-[#1e293b] hover:border-yellow-500/30 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-500/10 rounded-lg shrink-0">
                    <Trophy size={32} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight">
                      {rec.title}
                    </h3>
                    <p className="text-yellow-400 font-semibold text-sm mt-1">{rec.issuer}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{rec.date}</p>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {rec.description}
                  </p>
                </div>
                
                {rec.pdfUrl && (
                  <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <a
                      href={rec.pdfUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${rec.pdfUrl.slice(1)}` : rec.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-yellow-400 hover:text-yellow-300 flex items-center gap-2 transition-colors group"
                    >
                      Ver Certificado Oficial
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[var(--color-muted)] text-lg">
              Reconocimientos próximamente...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
