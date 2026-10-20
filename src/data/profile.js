export const profile = {
  name: "Luis Jesús Romero Castro",
  shortName: "Luis Romero",
  role: "Data Engineering · DataOps · Cloud · AI Applied",
  location: "Lima, Perú",
  email: "luis_jesusrc@hotmail.com",
  phone: "+51907362779",
  phoneDisplay: "+51 907 362 779",
  headline: "Transformo datos en sistemas inteligentes que impulsan decisiones y automatizan procesos.",
  summary:
    "Ingeniería de datos, automatización y tecnología aplicada para construir sistemas confiables, eficientes y escalables.",
  links: {
    github: "https://github.com/LuisRomero20",
    linkedin: "https://www.linkedin.com/in/luisjesusromerocastro/",
    whatsapp: "https://wa.me/51907362779",
    instagram: "https://www.instagram.com/luisjesusrc/",
    vsco: "https://vsco.co/luisromerocastro/gallery",
    tiktok: "https://www.tiktok.com/@luisjesusrc",
    x: "https://x.com/LuisJesus_rc",
    cv: `${import.meta.env.BASE_URL}papers/CV-LUISROMEROCASTRO.pdf`,
  },
};

export const careerDirection = [
  {
    title: "Base actual",
    label: "Ingeniería + automatización",
    description:
      "Construyo soluciones confiables conectando datos, procesos y tecnología aplicada.",
  },
  {
    title: "Ventaja diferencial",
    label: "Pensamiento end-to-end",
    description:
      "Entiendo el problema completo y lo convierto en sistemas claros, medibles y mantenibles.",
  },
  {
    title: "Dirección profesional",
    label: "AI Applied",
    description:
      "Extiendo esa base hacia soluciones inteligentes con memoria, automatización y control humano.",
  },
];

export const experiences = [
  {
    company: "Indra / Minsait",
    role: "Ingeniero de Datos Jr",
    period: "Mar. 2025 — Actualidad",
    context: "Servicios para el sector financiero",
    summary:
      "Confiabilidad batch, aseguramiento de calidad y gobierno del dato en un entorno regulado y de alta criticidad.",
    highlights: [
      "Análisis de causa raíz y remediación de flujos batch para sostener niveles de servicio.",
      "Automatización en Python y Flask para visualizar dependencias y priorizar cuellos de botella.",
      "Validaciones preventivas, certificación de pases y trazabilidad entre capas de datos.",
    ],
    stack: ["Python", "PySpark", "Spark SQL", "Control-M", "Dataproc", "Bitbucket"],
    logo: "indra",
  },
  {
    company: "LINKEO",
    role: "Co-Founder & Lead Full-Stack",
    period: "Ago. 2025 — Actualidad",
    context: "Producto digital",
    summary:
      "Dirección técnica de un ecosistema de identidad digital y operación comercial basado en NFC y QR.",
    highlights: [
      "Arquitectura y despliegue de perfiles digitales editables listos para producción.",
      "Diseño de herramientas internas para operación, trazabilidad y prospección comercial.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Vercel", "NFC / QR"],
    logo: "linkeo",
  },
  {
    company: "RENOVA S.A.C.",
    role: "Soporte TI & Automatización de Datos",
    period: "Dic. 2023 — Feb. 2025",
    context: "Operaciones para gran minería",
    summary:
      "Automatización de reportes, tableros operativos y soporte de infraestructura para operaciones industriales.",
    highlights: [
      "Scripts en Python y VBA para integrar información de producción e inventarios.",
      "Dashboards en Power BI y SQL para seguimiento de KPI operacionales.",
      "Gestión de incidencias y documentación técnica con Jira Service Management y Confluence.",
    ],
    stack: ["Python", "SQL", "Power BI", "VBA", "Windows Server", "Jira"],
    logo: "renova",
  },
  {
    company: "2M MICON SAC",
    role: "Desarrollador Web Jr & Analítica",
    period: "Ene. 2023 — Oct. 2023",
    context: "Experiencia digital",
    summary:
      "Optimización de una landing corporativa y creación de medición digital orientada a rendimiento y conversión.",
    highlights: [
      "Reducción reportada del 20% en tiempo de carga y mejora de accesibilidad técnica.",
      "Implementación de analítica web y seguimiento de objetivos comerciales.",
    ],
    stack: ["JavaScript", "HTML / CSS", "Google Analytics", "SEO técnico"],
    logo: "micon",
  },
];

export const capabilityGroups = [
  {
    title: "Data Engineering",
    description:
      "Pipelines ETL/ELT, ingesta incremental, procesamiento distribuido y modelos listos para consumo analítico.",
    stack: ["Python", "SQL", "PySpark", "Spark SQL", "Pandas", "Dataproc"],
  },
  {
    title: "DataOps & Observabilidad",
    description:
      "Monitoreo de procesos críticos, análisis de causa raíz, mapeo de dependencias y automatización operativa.",
    stack: ["Control-M", "Flask", "Bash", "PowerShell", "Git", "Bitbucket"],
  },
  {
    title: "Calidad & Gobierno",
    description:
      "Controles preventivos, certificación técnica, diccionarios, metadatos y linaje auditable de extremo a extremo.",
    stack: ["Data Quality", "Data Lineage", "Raw → Master", "SLA / ANS", "PR checks"],
  },
  {
    title: "Analytics & Producto",
    description:
      "Dashboards, modelos predictivos y aplicaciones que convierten datos confiables en decisiones y experiencias útiles.",
    stack: ["Power BI", "Streamlit", "scikit-learn", "React", "TypeScript", "Supabase"],
  },
];

export const technologyGroups = [
  {
    label: "Datos",
    items: ["Python", "SQL", "PySpark", "Spark SQL", "Pandas", "HDFS", "PostgreSQL"],
  },
  {
    label: "Operación",
    items: ["Control-M", "Dataproc", "Bash", "PowerShell", "Git", "Bitbucket", "Jira"],
  },
  {
    label: "Producto",
    items: ["React 19", "TypeScript", "Supabase", "Vercel", "Streamlit", "Power BI"],
  },
];
