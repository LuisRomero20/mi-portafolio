import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-transparent py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Recomendaciones</h1>
          <p className="text-[var(--color-muted)] text-lg">
            Reacciones y testimonios de profesionales en LinkedIn
          </p>
        </motion.div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1e293b] rounded-xl shadow-lg p-8 hover:shadow-2xl hover:bg-[#1e293b]/80 transition-all border border-[#1e293b] hover:border-blue-500/30 relative"
              >
                <div className="absolute top-6 right-6 text-slate-700/50">
                  <Quote size={40} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-700"
                  />
                  <div>
                    <a 
                      href={testimonial.linkedInUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <p className="font-bold text-slate-100 text-lg hover:underline">{testimonial.author}</p>
                      <Linkedin size={16} className="text-[#0a66c2] fill-[#0a66c2]" />
                    </a>
                    <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">
                      {testimonial.role}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-slate-300 italic text-md leading-relaxed z-10 relative">
                  "{testimonial.quote}"
                </blockquote>
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
              Testimonios próximamente...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
