import { ArrowUpRight, Quote, Trophy } from "lucide-react";
import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { recognitions } from "../data/recognitions";
import { testimonials } from "../data/testimonials";

export default function RecommendationsPage() {
  const recognition = recognitions[0];

  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Reseñas"
        title="El trabajo también se mide por la confianza que deja."
        description="Recomendaciones públicas y un reconocimiento corporativo que complementan la evidencia técnica."
      />

      <div className="social-proof-list">
        {testimonials.map((testimonial) => (
          <Motion.blockquote
            key={testimonial.author}
            className="testimonial-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote aria-hidden="true" />
            <p>“{testimonial.quote}”</p>
            <footer>
              <img src={testimonial.image} alt="" />
              <div><strong>{testimonial.author}</strong><span>{testimonial.role}</span></div>
              <a href={testimonial.linkedInUrl} target="_blank" rel="noreferrer" aria-label={`Ver perfil de ${testimonial.author}`}><ArrowUpRight /></a>
            </footer>
          </Motion.blockquote>
        ))}

        <Motion.a
          className="recognition-row"
          href={`${import.meta.env.BASE_URL}${recognition.pdfUrl.slice(1)}`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Trophy aria-hidden="true" />
          <div><span>{recognition.issuer} · {recognition.date}</span><h3>{recognition.title}</h3></div>
          <ArrowUpRight aria-hidden="true" />
        </Motion.a>
      </div>
    </div>
  );
}
