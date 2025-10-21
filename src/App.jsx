import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Database, Server, Rocket, Mail, Github, Linkedin, Cpu, Cloud, BarChart3, ExternalLink } from "lucide-react";

// ====== EDITA ESTOS DATOS Y PUBLICA ======
const PROFILE = {
  name: "Yojhan Padilla Inga",
  role: "Ingeniero de Sistemas — Backend & Data Engineer",
  about:
    "Construyo pipelines de datos robustos y APIs backend de alto rendimiento. Me enfoco en escalabilidad, observabilidad y simplicidad operativa.",
  location: "Lima, Perú",
  email: "tucorreo@dominio.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://www.linkedin.com/in/tuusuario/",
  availability: "Disponible para proyectos y roles full‑time/remoto",
};

const SKILLS = [
  "Python", "SQL", "Bash", "Git", "Docker", "Kubernetes",
  "Airflow", "dbt", "Spark", "Kafka",
  "FastAPI", "Django", "PostgreSQL", "BigQuery",
  "AWS (S3, Lambda, ECS)", "GCP (GCS, Dataflow)",
  "CI/CD", "Observabilidad (Prometheus, Grafana)",
];

const METRICS = [
  { label: "Años de experiencia", value: 4 },
  { label: "Proyectos productivos", value: 18 },
  { label: "TB procesados/mes", value: 6 },
  { label: "SLAs cumplidos", value: "99.9%" },
];

const EXPERIENCE = [
  {
    company: "Acme Retail",
    role: "Data Engineer",
    period: "2023 — 2025",
    bullets: [
      "Orquesté pipelines en Airflow para ingestión batch y streaming (Kafka → S3 → Spark).",
      "Implementé modelado con dbt y métricas BI en BigQuery (costos ↓ 27%).",
      "Creé capa de APIs con FastAPI para servir features a ciencia de datos.",
    ],
  },
  {
    company: "FinServ Latam",
    role: "Backend Engineer",
    period: "2021 — 2023",
    bullets: [
      "Diseñé microservicios en Python + PostgreSQL con pruebas y despliegue CI/CD.",
      "Aumenté throughput 2.3× optimizando consultas y caching.",
      "Instrumenté logs/traces con OpenTelemetry + Grafana.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Data Lakehouse de Retail",
    tags: ["Data", "Airflow", "dbt", "Spark", "GCP"],
    summary:
      "Arquitectura medallion (bronze/silver/gold) con orquestación en Airflow y modelado en dbt; dashboards en Looker.",
    links: [
      { href: "https://github.com/tuusuario/proyecto-lakehouse", label: "Código" },
      { href: "https://demo.example.com", label: "Demo" },
    ],
  },
  {
    title: "API de Features en Tiempo Real",
    tags: ["Backend", "FastAPI", "Kafka", "Redis"],
    summary:
      "Servicio de bajas latencias para features ML con colas Kafka y caching Redis; p95 < 40 ms.",
    links: [
      { href: "https://github.com/tuusuario/feature-api", label: "Código" },
    ],
  },
  {
    title: "ETL Financiero con Calidad de Datos",
    tags: ["Data", "Great Expectations", "PostgreSQL"],
    summary:
      "Pipeline ETL con validaciones automáticas y reportes de calidad; cobertura de tests 92%.",
    links: [
      { href: "https://github.com/tuusuario/etl-finanzas", label: "Código" },
    ],
  },
];

// ====== UI ======
export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const tagSet = useMemo(() => ["Todos", ...new Set(PROJECTS.flatMap(p => p.tags))], []);
  const visible = useMemo(
    () => PROJECTS.filter(p => filter === "Todos" || p.tags.includes(filter)),
    [filter]
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-800 bg-neutral-950/70">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800"><Cpu size={16} /></span>
            <span>Y. Padilla • Backend & Data</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#proyectos">Proyectos</a>
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#experiencia">Experiencia</a>
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {PROFILE.role}
            </h1>
            <p className="text-neutral-300 max-w-prose">{PROFILE.about}</p>
            <ul className="flex flex-wrap gap-2 text-sm text-neutral-300">
              <li className="inline-flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-xl"><Server size={16}/>Backend</li>
              <li className="inline-flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-xl"><Database size={16}/>Data</li>
              <li className="inline-flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-xl"><Cloud size={16}/>Cloud</li>
              <li className="inline-flex items-center gap-2 bg-neutral-800 px-3 py-1.5 rounded-xl"><BarChart3 size={16}/>Analytics</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90">
                <Mail size={16}/> Contáctame
              </a>
              <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
                <Github size={16}/> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
                <Linkedin size={16}/> LinkedIn
              </a>
              <span className="text-sm text-neutral-400">{PROFILE.availability}</span>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">Stack principal</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.02 * i }}
                  className="px-3 py-1.5 rounded-xl bg-neutral-800 text-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {METRICS.map(m => (
                <div key={m.label} className="rounded-2xl bg-neutral-800/60 p-4 text-center">
                  <div className="text-2xl font-bold">{m.value}</div>
                  <div className="text-xs text-neutral-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Proyectos clave</h2>
            <p className="text-neutral-400 text-sm">Filtra por tipo para ver lo más relevante.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto py-1">
            {tagSet.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-xl text-sm border ${
                  t === filter ? "bg-white text-neutral-900 border-white" : "border-neutral-700 hover:bg-neutral-800"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <Rocket size={16} className="opacity-70"/>
              </div>
              <p className="text-neutral-300 text-sm mt-2 flex-1">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-neutral-800">{t}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {p.links?.map(l => (
                  <a key={l.href} href={l.href} target="_blank" className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700">
                    <ExternalLink size={14}/>{l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Experiencia</h2>
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold">{e.role} · <span className="text-neutral-300">{e.company}</span></div>
                <div className="text-sm text-neutral-400">{e.period}</div>
              </div>
              <ul className="list-disc list-inside text-neutral-300 mt-3 space-y-1">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Hablemos</h2>
          <p className="text-neutral-300 mt-2">¿Tienes un reto de datos o backend? Escríbeme y te cuento cómo lo resolvería.</p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90">
              <Mail size={16}/> {PROFILE.email}
            </a>
            <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
              <Github size={16}/> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
              <Linkedin size={16}/> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
      </footer>
    </div>
  );
}
