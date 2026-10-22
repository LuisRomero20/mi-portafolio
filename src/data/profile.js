export const profile = {
  name: "Luis Jesús Romero Castro",
  shortName: "Luis Romero",
  role: "Data Engineering · Automation · Applied AI · Digital Solutions",
  location: "Lima, Perú",
  email: "luis_jesusrc@hotmail.com",
  phone: "+51907362779",
  phoneDisplay: "+51 907 362 779",
  headline: "Construyo sistemas de datos que las personas pueden entender y usar.",
  summary:
    "Diseño e implemento soluciones tecnológicas que integran ingeniería de datos, automatización e inteligencia artificial aplicada. Desarrollo plataformas y sistemas inteligentes orientados a optimizar procesos, transformar información en decisiones estratégicas y generar soluciones confiables, eficientes y escalables.",
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
    contextLines: [
      "Cliente: BBVA",
      "Área: Ingeniería, calidad y operación de datos",
    ],
    summary:
      "Ingeniería y continuidad operativa de procesos batch para un entorno financiero regulado, con foco en calidad, observabilidad y trazabilidad del dato.",
    highlights: [
      "Diagnóstico de causa raíz y remediación de flujos batch críticos para sostener la continuidad del servicio.",
      "Desarrollo de automatizaciones en Python y Flask para visualizar dependencias, incidencias y cuellos de botella.",
      "Ejecución de controles preventivos, certificación de pases y trazabilidad entre capas de procesamiento.",
    ],
    stack: ["Python", "PySpark", "Spark SQL", "Control-M", "Dataproc", "Bitbucket"],
    logo: "indra",
  },
  {
    company: "LINKEO",
    role: "Co-Founder & Lead Full-Stack",
    period: "Ago. 2025 — Actualidad",
    contextLines: [
      "Emprendimiento tecnológico propio",
      "Producto digital: identidad NFC/QR y operación comercial",
    ],
    summary:
      "Liderazgo técnico y de producto para una plataforma de identidad digital que conecta perfiles administrables, experiencias NFC/QR y herramientas de operación comercial.",
    highlights: [
      "Arquitectura y despliegue de perfiles digitales editables con flujos preparados para producción.",
      "Diseño de herramientas internas para administración, trazabilidad y prospección comercial.",
      "Integración de una base operativa en Supabase y despliegues continuos sobre Vercel.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Vercel", "NFC / QR"],
    logo: "linkeo",
  },
  {
    company: "RENOVA S.A.C.",
    role: "Soporte TI & Automatización de Datos",
    period: "Dic. 2023 — Feb. 2025",
    contextLines: [
      "Tecnología y automatización para gran minería",
      "Contextos: Quellaveco, Antamina, Yanacocha y Cerro Verde",
    ],
    summary:
      "Soporte tecnológico, integración de información y automatización de reportes para operaciones vinculadas a cuatro clientes de gran minería.",
    highlights: [
      "Automatización con Python y VBA para consolidar información de producción, inventarios y mantenimiento.",
      "Construcción de tableros en Power BI y consultas SQL para seguimiento de KPI operacionales.",
      "Soporte de infraestructura, gestión de incidencias y documentación técnica con Jira y Confluence.",
    ],
    stack: ["Python", "SQL", "Power BI", "VBA", "Windows Server", "Jira"],
    logo: "renova",
  },
  {
    company: "2M MICON SAC",
    role: "Desarrollador Web Jr & Analítica",
    period: "Ene. 2023 — Oct. 2023",
    contextLines: [
      "Desarrollo web y analítica digital",
      "Rendimiento, medición y experiencia de usuario",
    ],
    summary:
      "Desarrollo y optimización de una experiencia web corporativa con medición digital orientada a rendimiento, accesibilidad y conversión.",
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
    eyebrow: "Datos confiables",
    description:
      "Pipelines ETL/ELT, ingesta incremental, procesamiento distribuido y modelos listos para consumo analítico.",
    stack: ["Python", "SQL", "PySpark", "Spark SQL", "Pandas", "PostgreSQL", "Dataproc"],
    problem: "Conecto fuentes dispersas y convierto datos operativos en productos reproducibles y auditables.",
    projectId: "sales-etl",
  },
  {
    title: "DataOps y automatización",
    eyebrow: "Operación observable",
    description:
      "Monitoreo de procesos críticos, análisis de causa raíz, mapeo de dependencias y automatización operativa.",
    stack: ["Control-M", "Flask", "Bash", "PowerShell", "Git", "Bitbucket", "Jira", "Confluence"],
    problem: "Reduzco trabajo manual y hago visibles los puntos de fallo antes de que afecten la operación.",
    projectId: "calera-report",
  },
  {
    title: "AI y Machine Learning",
    eyebrow: "Modelos con contexto",
    description:
      "Modelos predictivos, experimentación reproducible y sistemas de IA con permisos, trazabilidad y control humano.",
    stack: ["scikit-learn", "Prophet", "Python", "Pandas", "NumPy", "SVM", "Random Forest", "Human-in-the-loop"],
    problem: "Aplico modelos cuando mejoran una decisión concreta y documento sus límites, evidencia y estado real.",
    projectId: "viernes-ai-os",
  },
  {
    title: "Product Engineering",
    eyebrow: "Producto digital",
    description:
      "Aplicaciones web, experiencias móviles e integraciones que conectan arquitectura, operación y necesidades comerciales.",
    stack: ["React", "TypeScript", "JavaScript", "Supabase", "Vercel", "Streamlit", "Notion", "NFC / QR"],
    problem: "Llevo una solución desde la idea hasta una experiencia que puede operarse, medirse y evolucionar.",
    projectId: "linkeo",
  },
];

export const technologyGroups = [
  {
    label: "Datos",
    items: ["Python", "SQL", "PySpark", "Spark SQL", "Pandas", "HDFS", "PostgreSQL"],
  },
  {
    label: "Operación",
    items: ["Control-M", "Dataproc", "Bash", "PowerShell", "Git", "Bitbucket", "Jira", "Confluence"],
  },
  {
    label: "Producto",
    items: ["React 19", "TypeScript", "JavaScript", "Supabase", "Vercel", "Streamlit", "Power BI", "Notion"],
  },
];
