import { BarChart3, Boxes, Database, Gauge, ShieldCheck, Workflow } from "lucide-react";
import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import TechnologyBadge from "../components/TechnologyBadge";
import { capabilityGroups } from "../data/profile";

const icons = [Database, Gauge, ShieldCheck, BarChart3];

export default function ServicesPage() {
  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Capacidades"
        title="Del dato crudo a una operación que inspira confianza."
        description="Una práctica end-to-end: integro fuentes, automatizo controles, observo la operación y acerco los resultados a quienes toman decisiones."
      />

      <div className="capability-grid">
        {capabilityGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <Motion.article
              key={group.title}
              className="capability-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="capability-card__top">
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="technology-list" aria-label={`Tecnologías de ${group.title}`}>
                {group.stack.map((item) => <TechnologyBadge key={item} name={item} />)}
              </div>
            </Motion.article>
          );
        })}
      </div>

      <div className="capability-note">
        <Workflow aria-hidden="true" />
        <p><strong>Cómo trabajo:</strong> problema → diagnóstico → diseño → automatización → observabilidad → mejora continua.</p>
        <Boxes aria-hidden="true" />
      </div>
    </div>
  );
}
