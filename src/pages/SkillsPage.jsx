import { motion as Motion } from "framer-motion";
import SectionIntro from "../components/SectionIntro";
import { technologyGroups } from "../data/profile";

export default function SkillsPage() {
  return (
    <div className="section-shell section-block section-block--compact">
      <SectionIntro
        eyebrow="Stack técnico"
        title="Herramientas elegidas por el problema, no por la moda."
        description="Agrupo el stack por el lugar que ocupa en la solución. La profundidad está respaldada en la experiencia y los casos anteriores, no en porcentajes subjetivos."
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
    </div>
  );
}
