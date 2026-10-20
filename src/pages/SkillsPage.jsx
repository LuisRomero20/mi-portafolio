import { ArrowRight, BrainCircuit, ShieldCheck } from "lucide-react";
import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { technologyGroups } from "../data/profile";

export default function SkillsPage() {
  return (
    <div className="section-shell section-block section-block--compact">
      <SectionIntro
        eyebrow="Stack técnico"
        title="Herramientas elegidas por el problema y el nivel de riesgo."
        description="El stack se agrupa por su papel en la solución. La profundidad está respaldada por experiencia y casos; las áreas de evolución se presentan como tales."
      />

      <div className="technology-board">
        {technologyGroups.map((group, groupIndex) => (
          <Motion.div
            key={group.label}
            className="technology-row"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.08 }}
          >
            <h3>{group.label}</h3>
            <div>
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </Motion.div>
        ))}
      </div>

      <Motion.aside
        className="ai-direction-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="ai-direction-panel__icon"><BrainCircuit aria-hidden="true" /></div>
        <div>
          <p className="eyebrow">Evolución aplicada · AI Engineering</p>
          <h3>IA sobre una base operable, observable y segura.</h3>
          <p>
            El foco de crecimiento está en RAG, memoria, agentes y automatización inteligente. Viernes funciona como laboratorio para diseñar permisos, trazabilidad y acciones con aprobación humana.
          </p>
        </div>
        <div className="ai-direction-panel__path">
          <span>Data foundations</span><ArrowRight aria-hidden="true" />
          <span>AI systems</span><ArrowRight aria-hidden="true" />
          <span><ShieldCheck aria-hidden="true" /> Human control</span>
        </div>
      </Motion.aside>
    </div>
  );
}
