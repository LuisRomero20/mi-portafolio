import { BadgeCheck, ExternalLink } from "lucide-react";

export default function ProjectMetrics({ metrics = [] }) {
  const verifiedMetrics = metrics.filter((metric) => metric.value && metric.label && metric.source);
  if (!verifiedMetrics.length) return null;

  return (
    <section className="project-metrics" aria-labelledby="metrics-title">
      <div className="project-section-heading">
        <div>
          <p className="eyebrow">Resultados verificables</p>
          <h2 id="metrics-title">Medidos con contexto, fuente y versión.</h2>
        </div>
        <BadgeCheck aria-hidden="true" />
      </div>
      <div className="project-metrics__grid">
        {verifiedMetrics.map((metric) => (
          <article key={`${metric.label}-${metric.value}`}>
            <p className="project-metrics__value">{metric.value}<small>{metric.unit}</small></p>
            <h3>{metric.label}</h3>
            <p>{metric.context}</p>
            <footer>
              {metric.sourceUrl ? (
                <a href={metric.sourceUrl} target="_blank" rel="noreferrer">
                  {metric.source} <ExternalLink size={13} aria-hidden="true" />
                </a>
              ) : <span>{metric.source}</span>}
              <small>{metric.version}</small>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
