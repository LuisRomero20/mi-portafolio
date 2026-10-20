import { ArrowUpRight, Award, BookOpen, FileText } from "lucide-react";
import { motion as Motion } from "framer-motion";
import ransomwareImg from "../assets/images/RasomwarePerfil.png";
import SectionIntro from "../components/SectionIntro";
import { certifications } from "../data/certifications";

const selectedIds = new Set([9, 1, 7, 5, 2, 10]);

export default function CertificationsPage() {
  const selected = certifications.filter((certification) => selectedIds.has(certification.id));

  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Formación e investigación"
        title="Formación acreditada y credenciales con evidencia pública."
        description="Incluye la acreditación internacional ABET de mi formación en la UPC, certificación AWS, especialización técnica, trabajo ágil e idiomas. Cada tarjeta abre su respaldo documental."
      />

      <Motion.article
        className="research-feature"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="research-feature__image">
          <img src={ransomwareImg} alt="Portada de la investigación sobre machine learning y ransomware" loading="lazy" />
        </div>
        <div className="research-feature__copy">
          <p className="eyebrow">Publicación científica · IJACSA 2024</p>
          <h3>Machine Learning para detectar ransomware en entornos con recursos limitados.</h3>
          <p>Trabajo indexado en Scopus que evalúa modelos supervisados y reporta precisión superior al 90% en el estudio.</p>
          <div className="research-stats">
            <span><strong>&gt;90%</strong> precisión reportada</span>
            <span><strong>−70%</strong> tiempo de respuesta</span>
            <span><strong>Scopus</strong> publicación indexada</span>
          </div>
          <div className="inline-actions">
            <a className="button-primary" href="https://dx.doi.org/10.14569/IJACSA.2024.0151253" target="_blank" rel="noreferrer">
              Abrir DOI <ArrowUpRight size={17} />
            </a>
            <a className="button-secondary" href={`${import.meta.env.BASE_URL}papers/ransomware.pdf`} target="_blank" rel="noreferrer">
              Ver PDF <FileText size={17} />
            </a>
          </div>
        </div>
      </Motion.article>

      <div className="credentials-heading">
        <div><Award aria-hidden="true" /><h3>Credenciales seleccionadas</h3></div>
        <p>{selected.length} evidencias visibles de un expediente más amplio.</p>
      </div>

      <div className="credentials-grid">
        {selected.map((certification, index) => (
          <Motion.a
            key={certification.id}
            href={certification.credentialUrl.startsWith("/") ? `${import.meta.env.BASE_URL}${certification.credentialUrl.slice(1)}` : certification.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="credential-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.05 }}
          >
            <BookOpen aria-hidden="true" />
            <div>
              <span>{certification.category}</span>
              <h4>{certification.title}</h4>
              <p>{certification.issuer} · {certification.date}</p>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </Motion.a>
        ))}
      </div>
    </div>
  );
}
