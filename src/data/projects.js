import skynetImg from "../assets/images/SkynetPerfil.png";
import skynetMain from "../assets/images/Skynet.png";
import skynetImg1 from "../assets/images/Skynet1.png";
import skynetImg2 from "../assets/images/Skynet2.png";
import skynetImg3 from "../assets/images/Skynet3.png";
import etlPerfil from "../assets/images/etlventasPerfil.png";
import etlImg1 from "../assets/images/etlventas1.png";
import etlImg2 from "../assets/images/etlventas2.png";
import finanzasPerfil from "../assets/images/FinanzasPerfil.png";
import finanzas1 from "../assets/images/Finanzas1.png";
import finanzas2 from "../assets/images/Finanzas2.png";
import finanzas3 from "../assets/images/Finanzas3.png";
import ransomwarePerfil from "../assets/images/RasomwarePerfil.png";
import viernesImg from "../assets/images/viernes-ai-os.jpg";

export const projects = [
  {
    id: "sales-etl",
    name: "ETL & Forecasting de Ventas",
    shortName: "Sales ETL",
    category: "Data Engineering",
    eyebrow: "Pipeline end-to-end",
    priorityLabel: "Caso principal",
    description:
      "Pipeline reproducible que limpia ventas, ejecuta cargas incrementales y proyecta ingresos a 30 días.",
    longDescription:
      "Caso técnico de ingeniería y análisis de datos que transforma archivos con errores e inconsistencias en un flujo reproducible. El proceso limpia la información, entrena un modelo de forecasting y publica indicadores en una interfaz web.",
    technologies: ["Python", "Prophet", "SQLite", "Streamlit", "Power BI", "PowerShell"],
    image: etlPerfil,
    github: "https://github.com/LuisRomero20/end-to-end-sales-etl-pipeline",
    demo: "https://end-to-end-sales-etl-pipeline-6ao8esedhqua4app97w2o2g.streamlit.app/",
    metrics: { Forecast: "30 días", Orquestación: "Diaria", Persistencia: "Incremental" },
    context: {
      problem: "Reportes de ventas con formatos inconsistentes requerían limpieza manual y no daban una vista oportuna del negocio.",
      solution: "Un pipeline en Python que valida, transforma y persiste los datos antes de generar el pronóstico y el dashboard.",
      impact: "KPIs listos para consulta y una proyección reproducible sin repetir la preparación manual de cada archivo.",
    },
    featuresTitle: "Componentes del flujo",
    features: [
      "Validación y limpieza de archivos de entrada.",
      "Carga incremental sobre una capa persistente.",
      "Forecasting a 30 días con ejecución reproducible.",
      "Publicación de KPIs mediante Streamlit y Power BI.",
    ],
    dashboardGallery: [etlImg1, etlImg2],
    client: "Proyecto personal",
    date: "Caso técnico",
    featured: true,
    lead: true,
  },
  {
    id: "calera-report",
    name: "CaleraReport · Automatización SAP",
    shortName: "CaleraReport",
    category: "Automatización",
    eyebrow: "Automation & Data Engineering",
    priorityLabel: "Automatización aplicada",
    description:
      "Consolidador de archivos de pago y automatización de plantillas para ordenar un proceso asociado a SAP.",
    longDescription:
      "Solución enfocada en ordenar archivos de múltiples áreas, validar su estructura y preparar cargas repetibles. Complementa el flujo con automatización de escritorio para disminuir tareas mecánicas y errores de transcripción.",
    technologies: ["Python", "SAP GUI Scripting", "VBScript", "RPA", "JavaScript"],
    image: null,
    accent: "cyan",
    github: "https://github.com/LuisRomero20/CaleraReport",
    demo: "https://calerareport-ten.vercel.app",
    metrics: { Procesamiento: "Por lotes", Ejecución: "100% cliente", Entrega: "Demo pública" },
    context: {
      problem: "La consolidación manual de archivos por departamento consumía tiempo y elevaba el riesgo de inconsistencias.",
      solution: "Un flujo de validación y consolidación por lotes, más plantillas estandarizadas y automatización de pasos repetitivos.",
      impact: "Proceso más claro, repetible y preparado para reducir reprocesos antes de la carga operativa.",
    },
    client: "Caso de automatización",
    date: "2025",
    featured: true,
  },
  {
    id: "viernes-ai-os",
    name: "Viernes · Personal AI Operating System",
    shortName: "Viernes AI OS",
    category: "AI Engineering",
    eyebrow: "Sistema personal · En desarrollo",
    priorityLabel: "AI Engineering en desarrollo",
    description:
      "Arquitectura personal-first para coordinar tareas, calendario, memoria, agentes e integraciones con control humano.",
    longDescription:
      "Viernes es un producto personal en desarrollo y un laboratorio de AI Engineering. Su arquitectura documentada plantea una experiencia mobile-first, un núcleo cloud, memoria corregible y un agente local para Windows, con permisos explícitos y trazabilidad para cualquier acción que cambie sistemas externos.",
    technologies: ["Python", "React", "TypeScript", "SQLite"],
    plannedTechnologies: ["Supabase", "Next.js", "pgvector", "OpenAI / Gemini"],
    image: viernesImg,
    accent: "violet",
    github: "",
    demo: "",
    metrics: { Estado: "En desarrollo", Enfoque: "Personal-first", Control: "Human-in-the-loop" },
    context: {
      problem: "Tareas, proyectos, calendario, conocimiento e integraciones viven en herramientas separadas y pierden contexto entre sí.",
      solution: "Un sistema operativo personal con orquestación de agentes, memoria gobernada por el usuario y un motor de permisos antes de ejecutar acciones externas.",
      impact: "Una base coherente para automatizar vida y trabajo sin presentar como terminadas capacidades que todavía están en construcción.",
    },
    featuresTitle: "Alcance documentado",
    features: [
      "Home diario con agenda, prioridades, tareas y alertas.",
      "Memoria personal consultable, corregible y con trazabilidad de origen.",
      "AI Gateway independiente del proveedor y registro auditable de acciones.",
      "Integración progresiva con Calendar, Gmail, Notion, GitHub y un agente local.",
    ],
    statusNote:
      "La arquitectura, el roadmap y el alcance están documentados. Las funcionalidades implementadas continúan pendientes de validación técnica reproducible.",
    client: "Producto personal",
    date: "Oct. 2026 — Actualidad",
    featured: true,
  },
  {
    id: "skynet-quant",
    name: "Skynet Quant · Analítica deportiva",
    shortName: "Skynet Quant",
    category: "Machine Learning",
    eyebrow: "Modelado cuantitativo",
    priorityLabel: "ML aplicado",
    description:
      "Laboratorio que combina modelos Poisson y aprendizaje automático para explorar predicciones trazables.",
    longDescription:
      "Laboratorio de analítica cuantitativa que integra datos históricos, modelos de clasificación y probabilidades de goles. La aplicación permite comparar predicciones con resultados y mantener una auditoría clara de cada ejecución.",
    technologies: ["Python", "Streamlit", "scikit-learn", "SQLite", "Pandas"],
    image: skynetImg,
    github: "https://github.com/LuisRomero20/skynet-quant-platform",
    demo: "https://skynet-quant-platform-ad5w7seuajetmp7mcnsip4.streamlit.app/",
    metrics: { Ensamble: "Poisson + ML", Histórico: "25+ años", Auditoría: "Predicción vs. resultado" },
    context: {
      problem: "El análisis manual de históricos y mercados secundarios hacía difícil repetir criterios y auditar resultados.",
      solution: "Un flujo automatizado de preparación, modelado y publicación de resultados en una interfaz Streamlit.",
      impact: "Exploración más rápida y decisiones documentadas con trazabilidad sobre las predicciones realizadas.",
    },
    dashboardGallery: [skynetMain, skynetImg1, skynetImg2, skynetImg3],
    client: "Proyecto personal",
    date: "En evolución",
    featured: true,
  },
  {
    id: "linkeo",
    name: "LINKEO · Identidad digital NFC",
    shortName: "LINKEO",
    category: "Producto digital",
    eyebrow: "Co-Founder & Lead Full-Stack",
    priorityLabel: "Producto en producción",
    description:
      "Ecosistema de tarjetas NFC y QR que convierte una interacción física en un perfil digital administrable.",
    longDescription:
      "LINKEO conecta tarjetas inteligentes con perfiles digitales editables y una operación comercial preparada para crecer. Mi trabajo abarca la arquitectura del producto, el desarrollo full-stack y el despliegue de la experiencia pública.",
    technologies: ["React 19", "TypeScript", "Supabase", "Vercel", "NFC / QR"],
    image: null,
    accent: "violet",
    github: "",
    demo: "https://linkeocards.com/",
    metrics: { Rol: "Co-Founder", Estado: "En producción", Interacción: "NFC + QR" },
    context: {
      problem: "Los datos de contacto y la presencia profesional suelen quedar fragmentados entre canales difíciles de actualizar.",
      solution: "Una identidad digital editable, activada desde una tarjeta física y respaldada por una arquitectura web moderna.",
      impact: "Una experiencia de contacto coherente y una base tecnológica que permite operar, medir y ampliar el producto.",
    },
    client: "Emprendimiento propio",
    date: "2025 — Actualidad",
    featured: true,
  },
  {
    id: "finanzas-personales",
    legacyIds: ["finper"],
    name: "Finanzas Personales · Gestión financiera",
    shortName: "Finanzas Personales",
    category: "Aplicación personal",
    eyebrow: "Producto personal · En auditoría",
    priorityLabel: "Producto independiente",
    description:
      "Aplicación para organizar deudas, tasas, presupuestos y cronogramas; actualmente en revisión funcional y técnica.",
    longDescription:
      "Finanzas Personales centraliza obligaciones y cálculos financieros en una experiencia web y móvil. El proyecto correcto vive en el repositorio Finanzas y es independiente de FinPer; su estado actual está siendo auditado antes de presentar funcionalidades como verificadas.",
    technologies: ["React", "TypeScript", "Supabase", "Zustand", "Capacitor", "Recharts"],
    image: finanzasPerfil,
    github: "https://github.com/LuisRomero20/Finanzas",
    demo: "https://finanzas-tau-three.vercel.app/",
    metrics: { Estado: "Auditoría pendiente", Repositorio: "Finanzas", Alcance: "Web + móvil" },
    context: {
      problem: "Gestionar deudas, tasas y presupuestos en herramientas dispersas dificulta comprender compromisos y escenarios.",
      solution: "Una interfaz unificada para registrar obligaciones, explorar cálculos y sincronizar la información entre dispositivos.",
      impact: "Una base de producto que busca aportar claridad financiera; su cobertura real está pendiente de una revisión técnica completa.",
    },
    dashboardGallery: [finanzas1, finanzas2, finanzas3],
    statusNote:
      "Finanzas Personales y FinPer son proyectos distintos. Esta ficha corresponde exclusivamente al repositorio Finanzas.",
    client: "Producto personal",
    date: "En revisión",
    featured: true,
  },
  {
    id: "ransomware-ml",
    name: "ML para detección de ransomware",
    shortName: "Ransomware ML",
    category: "Investigación",
    eyebrow: "Artículo indexado · IJACSA 2024",
    priorityLabel: "Investigación publicada",
    description:
      "Investigación sobre modelos ligeros de detección para organizaciones con recursos tecnológicos limitados.",
    longDescription:
      "Artículo científico que estudia Random Forest, SVM y redes neuronales para reconocer patrones asociados a ransomware. El trabajo propone una alternativa adaptable para pequeñas organizaciones que no pueden desplegar infraestructura EDR compleja.",
    technologies: ["Python", "Random Forest", "SVM", "Neural Networks", "Cybersecurity"],
    image: ransomwarePerfil,
    github: "",
    demo: "https://dx.doi.org/10.14569/IJACSA.2024.0151253",
    pdfUrl: "/papers/ransomware.pdf",
    citation:
      "Luis Jesús Romero Castro, Piero Alexander Cruz Aquino y Fidel Eugenio Garcia Rojas. International Journal of Advanced Computer Science and Applications, 15(12), 2024.",
    metrics: { Precisión: "> 90%", Respuesta: "Hasta −70%", Publicación: "IJACSA · Scopus" },
    context: {
      problem: "Las microempresas suelen carecer de recursos para implementar plataformas avanzadas de protección contra ransomware.",
      solution: "Diseño y validación experimental de modelos supervisados capaces de detectar comportamiento malicioso con una arquitectura ligera.",
      impact: "Resultados de investigación con precisión superior al 90% y reducción reportada de hasta 70% en tiempo de respuesta.",
    },
    client: "Investigación académica · UPC",
    date: "Diciembre 2024",
    featured: true,
  },
];
