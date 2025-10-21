import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Database, Server, Rocket, Mail, Github, Linkedin, Cpu, Cloud, BarChart3, ExternalLink } from "lucide-react";

// ====== EDITA ESTOS DATOS Y PUBLICA ======
const PROFILE = {
  name: "Luis Jesús Romero Castro",
  role: "Ingeniero de Datos — Backend",
  about:
    "Ingeniero de Sistemas con enfoque en operación y confiabilidad de datos. Diseño pipelines sobre Spark/HDFS, orquesto procesos en Control‑M y habilito consumo analítico con gobierno y calidad.",
  location: "Lima, Perú",
  email: "luis_jesusrc@hotmail.com",
  github: "https://github.com/LuisRomero20",
  linkedin: "https://www.linkedin.com/in/luisjesusromerocastro/",
  availability: "Abierto a oportunidades Data/Backend (remoto/híbrido)",
};

const SKILLS = [
  "Python", "Scala", "SQL",
  "Spark", "HDFS", "Dataproc",
  "Control-M", "Argos Live",
  "Power BI", "Git", "Bitbucket", "SSH",
  "Scrum/Agile",
];

const METRICS = [
  { label: "Años de experiencia", value: "2+" },
  { label: "Proyectos BI/ETL", value: "10+" },
  { label: "Ambientes", value: "Finanzas y minería" },
  { label: "Disponibilidad", value: "Inmediata" },
];

const EXPERIENCE = [
  {
    company: "Indra / Minsait (BBVA)",
    role: "Ingeniero de Datos",
    period: "2025 — Actualidad",
    bullets: [
      "Orquestación y operación de procesos en Control‑M con monitoreo en Argos Live.",
      "Ingestas y traspasos sobre HDFS bajo enfoque Data Mesh (calidad y gobierno con Hammurabi).",
      "Análisis de incidencias y optimización de logs; soporte a SLAs y continuidad operativa.",
    ],
  },
  {
    company: "Renova SAC (Minería)",
    role: "Ingeniero de Sistemas de TI",
    period: "2023 — 2025",
    bullets: [
      "Dashboards en Power BI para inventarios y procesos; automatización de reportes con Excel/VBA.",
      "Gestión de infraestructura: WSUS, backups, seguridad y redes para continuidad de datos.",
      "Soporte a operaciones en mina; ETL con SQL y documentación operativa.",
    ],
  },
  {
    company: "2M MICON",
    role: "Desarrollador Web Jr (Prácticas)",
    period: "2023",
    bullets: [
      "Optimización de landing pages (SEO, rendimiento) y métricas con Google Analytics.",
    ],
  },
];

const PROJECTS = [
  {
    title: "ETL Spark en Dataproc/HDFS",
    tags: ["Data", "Spark", "HDFS", "GCP", "Control-M"],
    summary:
      "Pipeline batch con Spark (Py/Scala) sobre HDFS; orquestación en Control‑M, validaciones y logging. Diseño pensado para ambientes regulados.",
    links: [
      { href: "https://github.com/LuisRomero20/spark-etl-template", label: "Código" },
    ],
  },
  {
    title: "Observabilidad de Jobs",
    tags: ["Data", "Operación", "Control-M", "Monitoring"],
    summary:
      "Extracción de ejecuciones de Control‑M y bitácora de runs (duración, status, reintentos, SLAs) con export para BI.",
    links: [
      { href: "https://github.com/LuisRomero20/ops-monitoring-controlm", label: "Código" },
    ],
  },
  {
    title: "BI Operativo (Inventarios)",
    tags: ["BI", "Power BI", "SQL"],
    summary:
      "Modelo semántico y dashboards de operación (mock data); ETL con SQL y reglas básicas de calidad.",
    links: [
      { href: "https://github.com/LuisRomero20/bi-inventarios", label: "Código" },
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
            <span>L. Romero • Backend & Data</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#proyectos">Proyectos</a>
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#experiencia">Experiencia</a>
            <a className="px-3 py-1.5 rounded-xl hover:bg-neutral-800" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-5xl xl:max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-5">
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight">
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
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
                <Github size={16}/> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
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
          <div className="flex flex-wrap gap-2 py-1">
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
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700">
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
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
              <Github size={16}/> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-neutral-800 hover:bg-neutral-700">
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
