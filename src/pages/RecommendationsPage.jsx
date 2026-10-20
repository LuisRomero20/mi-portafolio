import { ArrowUpRight, Quote, Trophy } from "lucide-react";
import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { recognitions } from "../data/recognitions";
import { testimonials } from "../data/testimonials";

export default function RecommendationsPage() {
  const [primary, secondary] = testimonials;
  const recognition = recognitions[0];

  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Confianza profesional"
        title="La calidad también se demuestra en cómo trabajamos con otros."
        description="Recomendaciones públicas y un reconocimiento corporativo que complementan la evidencia técnica."
      />

      <div className="social-proof-grid">
        <Motion.blockquote
          className="testimonial-card testimonial-card--primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Quote aria-hidden="true" />
          <p>“{primary.quote}”</p>
          <footer>
            <img src={primary.image} alt="" />
            <div><strong>{primary.author}</strong><span>{primary.role}</span></div>
            <a href={primary.linkedInUrl} target="_blank" rel="noreferrer" aria-label={`Ver perfil de ${primary.author}`}><ArrowUpRight /></a>
          </footer>
        </Motion.blockquote>

        <div className="social-proof-stack">
          <Motion.blockquote
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote aria-hidden="true" />
            <p>“{secondary.quote}”</p>
            <footer>
              <img src={secondary.image} alt="" />
              <div><strong>{secondary.author}</strong><span>{secondary.role}</span></div>
              <a href={secondary.linkedInUrl} target="_blank" rel="noreferrer" aria-label={`Ver perfil de ${secondary.author}`}><ArrowUpRight /></a>
            </footer>
          </Motion.blockquote>

          <Motion.a
            className="recognition-card"
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
    </div>
  );
}
