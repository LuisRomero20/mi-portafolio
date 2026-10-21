import { CheckCircle2, CircleDashed, Clock3, ShieldCheck } from "lucide-react";

const statusMeta = {
  implemented: { label: "Implementado", icon: CheckCircle2 },
  development: { label: "En desarrollo", icon: Clock3 },
  planned: { label: "Planificado", icon: CircleDashed },
};

export default function ProjectArchitecture({ architecture }) {
  if (!architecture?.lanes?.length) return null;

  const statuses = [...new Set(
    architecture.lanes.flatMap((lane) => lane.stages.map((stage) => stage.status)).filter(Boolean),
  )];

  return (
    <section className="project-architecture" aria-labelledby="architecture-title">
      <div className="project-section-heading">
        <div>
          <p className="eyebrow">Arquitectura técnica</p>
          <h2 id="architecture-title">{architecture.title || "Cómo fluye la solución"}</h2>
        </div>
        {statuses.length > 1 ? (
          <ul className="architecture-legend" aria-label="Estado de los componentes">
            {statuses.map((status) => {
              const meta = statusMeta[status];
              if (!meta) return null;
              const StatusIcon = meta.icon;
              return <li key={status} data-status={status}><StatusIcon aria-hidden="true" /> {meta.label}</li>;
            })}
          </ul>
        ) : null}
      </div>
      {architecture.description ? <p className="project-section-lead">{architecture.description}</p> : null}

      <div className="architecture-lanes">
        {architecture.lanes.map((lane) => (
          <div className="architecture-lane" key={lane.label}>
            <p className="architecture-lane__label">{lane.label}</p>
            <ol className="architecture-flow">
              {lane.stages.map((stage, index) => {
                const meta = statusMeta[stage.status] || statusMeta.implemented;
                const StatusIcon = meta.icon;
                return (
                  <li className="architecture-stage" data-status={stage.status || "implemented"} key={stage.id || stage.label}>
                    <div className="architecture-stage__topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="architecture-stage__status"><StatusIcon aria-hidden="true" /> {meta.label}</span>
                    </div>
                    <h3>{stage.label}</h3>
                    {stage.description ? <p>{stage.description}</p> : null}
                    {stage.technology ? <small>{stage.technology}</small> : null}
                    {stage.controls?.length ? (
                      <ul className="architecture-stage__controls" aria-label={`Controles de ${stage.label}`}>
                        {stage.controls.map((control) => <li key={control}><ShieldCheck aria-hidden="true" />{control}</li>)}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
      {architecture.note ? <p className="architecture-note">{architecture.note}</p> : null}
    </section>
  );
}
