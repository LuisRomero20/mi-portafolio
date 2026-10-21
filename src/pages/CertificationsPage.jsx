import { ArrowUpRight, Award, BookOpen, FileText, GraduationCap } from "lucide-react";
import { motion as Motion } from "framer-motion";
import ransomwareImg from "../assets/images/RasomwarePerfil.png";
import SectionIntro from "../components/SectionIntro";
import { complementaryCredentials, principalCredentials } from "../data/certifications";

const credentialHref = (url) => (
  url.startsWith("/") ? `${import.meta.env.BASE_URL}${url.slice(1)}` : url
);

export default function CertificationsPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Formación"
        title="Formación y credenciales verificables."
        description="Una base académica en ingeniería, investigación publicada y aprendizaje continuo con respaldo documental."
      />

      <Motion.article
        className="education-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="education-card__icon"><GraduationCap aria-hidden="true" /></div>
        <div>
          <span>Universidad Peruana de Ciencias Aplicadas · 2020 — 2024</span>
          <h3>Bachiller en Ingeniería de Sistemas de Información</h3>
          <p>Programa acreditado por ABET, con formación en arquitectura de software, datos, analítica, gestión tecnológica e investigación aplicada.</p>
        </div>
        <a href={`${import.meta.env.BASE_URL}papers/Constancia de Bachiller.pdf`} target="_blank" rel="noreferrer">
          Ver constancia <ArrowUpRight size={16} />
        </a>
      </Motion.article>

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
        <div><Award aria-hidden="true" /><h3>Credenciales principales</h3></div>
        <p>Certificaciones y especializaciones con verificación pública o evidencia documental.</p>
      </div>

      <div className="credentials-grid">
        {principalCredentials.map((certification, index) => (
          <Motion.a
            key={certification.id}
            href={credentialHref(certification.credentialUrl)}
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

      <details className="complementary-credentials">
        <summary>
          <span>
            <BookOpen aria-hidden="true" />
            <span><strong>Formación complementaria</strong> Cursos que amplían la base en datos, software, agile, blockchain, diseño y productividad.</span>
          </span>
          <span>Explorar credenciales <ArrowUpRight aria-hidden="true" /></span>
        </summary>
        <div className="complementary-credentials__grid">
          {complementaryCredentials.map((certification) => (
            <a
              key={certification.id}
              href={credentialHref(certification.credentialUrl)}
              target="_blank"
              rel="noreferrer"
              className="credential-row"
            >
              <span>{certification.category}</span>
              <div><strong>{certification.title}</strong><small>{certification.issuer} · {certification.date}</small></div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}
