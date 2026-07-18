import { testimonials } from "../data/testimonials";
import { recognitions } from "../data/recognitions";
import { motion } from "framer-motion";
import { Linkedin, Quote, Trophy, Download } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">Testimonios y Reconocimientos</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
            Reacciones de profesionales con los que he trabajado y premios destacados en mi trayectoria.
          </p>
        </motion.div>

        {/* Section: Testimonials */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Quote className="text-blue-500" size={32} />
            <h2 className="text-3xl font-bold text-white">Recomendaciones</h2>
          </div>
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={`test-${testimonial.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0b1120] rounded-xl shadow-lg p-8 hover:shadow-2xl hover:bg-[#0f172a] transition-all border border-[#1e293b] hover:border-blue-500/50 relative group"
                >
                  <div className="absolute top-6 right-6 text-slate-700/30 group-hover:text-blue-500/20 transition-colors">
                    <Quote size={48} />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/50 p-1"
                    />
                    <div>
                      <a 
                        href={testimonial.linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <p className="font-bold text-slate-100 text-lg hover:text-blue-400 transition-colors">{testimonial.author}</p>
                        <Linkedin size={18} className="text-[#0a66c2] fill-[#0a66c2]" />
                      </a>
                      <p className="text-blue-400 font-medium text-xs mt-1">
                        {testimonial.role}
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-300 italic text-[15px] leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-muted)] text-lg">Testimonios próximamente...</p>
          )}
        </div>

        {/* Section: Recognitions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-bold text-white">Reconocimientos Destacados</h2>
          </div>
          {recognitions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recognitions.map((rec, idx) => (
                <motion.div
                  key={`rec-${rec.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#0b1120] rounded-xl shadow-lg p-8 hover:shadow-2xl hover:bg-[#0f172a] transition-all border border-[#1e293b] hover:border-yellow-500/50 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-yellow-500/10 rounded-lg shrink-0 mt-1">
                      <Trophy size={28} className="text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 leading-tight mb-2">
                        {rec.title}
                      </h3>
                      <p className="text-yellow-500 font-medium text-sm">{rec.issuer}</p>
                      <p className="text-slate-500 text-xs mt-1">{rec.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
                      {rec.description}
                    </p>
                  </div>
                  
                  {rec.pdfUrl && (
                    <div className="mt-auto pt-5 border-t border-slate-800">
                      <a
                        href={rec.pdfUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${rec.pdfUrl.slice(1)}` : rec.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-yellow-500 font-medium rounded-lg transition-colors"
                      >
                        <Download size={18} />
                        <span>Ver Certificado Oficial</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-muted)] text-lg">Reconocimientos próximamente...</p>
          )}
        </div>
      </div>
    </div>
  );
}
