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
import laCaleraLogo from "../assets/brands/la-calera.png";
import caleraPerfil from "../assets/images/CaleraPerfil.png";

export const projects = [
  {
    id: "sales-etl",
    name: "Plataforma de inteligencia comercial y forecasting",
    shortName: "Sales ETL",
    category: "Data Engineering",
    eyebrow: "Pipeline end-to-end",
    priorityLabel: "Caso principal",
    description:
      "Pipeline end-to-end que depura y consolida ventas, automatiza cargas incrementales y proyecta ingresos a 30 días para acelerar decisiones comerciales.",
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
    name: "CaleraReport — Enterprise Document Automation & SAP Integration",
    shortName: "CaleraReport",
    category: "Automatización & Controles",
    eyebrow: "Document Engineering · Fail-Closed SAP · Financial Controls",
    priorityLabel: "Caso Enterprise Destacado",
    description:
      "Plataforma de ingeniería documental y preparación contable que concilia expedientes multisede (HES, OC, Factura/RXH, SOLPED), genera el Maestro de Control A–W con fórmulas vivas y automatiza la contabilización SAP MIRO bajo controles fail-closed.",
    longDescription:
      "Transformación integral de CaleraReport a una suite de operaciones documentales y control financiero empresarial. Procesa expedientes en cliente garantizando cero fuga de datos sensibles, aplica validaciones deterministas de importes y semáforos de liberación de tres niveles, gestiona trazabilidad con hash SHA-256 para renombrado y reversión, e implementa tres alternativas de automatización SAP MIRO con simulación obligatoria y rechazo ante ambigüedad.",
    technologies: [
      "Python 3.11",
      "SAP GUI Scripting",
      "JavaScript (ES2022)",
      "PDF.js",
      "SheetJS",
      "VBScript / PyAutoGUI",
      "GitHub Actions CI",
    ],
    image: caleraPerfil,
    accent: "cyan",
    github: "https://github.com/LuisRomero20/CaleraReport",
    demo: "https://calerareport-ten.vercel.app",
    metrics: {
      "Conciliación": "100% determinista",
      "Privacidad": "Zero Data Leak",
      "Controles SAP": "Fail-Closed estricto",
      "Validación": "21 tests / CI",
    },
    context: {
      problem:
        "La revisión y conciliación manual de expedientes de servicios (HES, OC, facturas, recibos por honorarios, SOLPED) entre múltiples sedes requería días de trabajo repetitivo, propiciando discrepancias de importes y riesgo crítico de imputación errónea en SAP MIRO.",
      solution:
        "Un motor de conciliación documental local (navegador y Python) con validación de tolerancias, generación del Maestro A–W con fórmulas Excel vivas, gestión de incidencias bloqueantes y tres bots SAP con parada fail-closed y aprobación afirmativa obligatoria.",
      impact:
        "Ciclo de procesamiento reducido de días a segundos por lote, trazabilidad forense con reversión instantánea y garantía de tolerancia cero a registros ambiguos o desbalanceados en el ERP.",
    },
    featuresTitle: "Capacidades Enterprise Operativas",
    features: [
      "Ingesta multisede y conciliación determinista de expedientes (HES, OC, Factura/RXH, SOLPED).",
      "Generación de libro Maestro A–W con fórmulas vivas, semáforos condicionales y hoja de incidencias.",
      "Formato Masivo SAP MIRO A–U compatible con procesos contables estándar y bots existentes.",
      "Renombrado documental con nomenclatura {MIRO} y reversión garantizada por hash SHA-256.",
      "Automatización SAP GUI fail-closed: aprobación afirmativa explícita, verificación de saldo 0.00 y validación de 10 dígitos.",
      "Suite de 21 pruebas automatizadas con fixtures 100% sintéticos y CI multiplataforma en GitHub Actions.",
    ],
    client: "La Calera / Automatización Operativa",
    date: "2025 — 2026",
    featured: true,
  },
  {
    id: "viernes-ai-os",
    name: "Sistema operativo personal con IA y control humano",
    shortName: "Viernes AI OS",
    category: "AI Engineering",
    eyebrow: "Sistema personal · En desarrollo",
    priorityLabel: "AI Engineering en desarrollo",
    description:
      "Arquitectura personal-first que conecta tareas, calendario, memoria y agentes bajo permisos explícitos, trazabilidad y control del usuario.",
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
    name: "Motor predictivo y auditable para analítica deportiva",
    shortName: "Skynet Quant",
    category: "Machine Learning",
    eyebrow: "Modelado cuantitativo",
    priorityLabel: "ML aplicado",
    description:
      "Plataforma que combina modelos Poisson y machine learning sobre históricos para comparar probabilidades, registrar predicciones y auditar resultados.",
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
    name: "Ecosistema de identidad digital con NFC y QR",
    shortName: "LINKEO",
    category: "Producto digital",
    eyebrow: "Co-Founder & Lead Full-Stack",
    priorityLabel: "Producto en producción",
    description:
      "Producto en producción que conecta tarjetas inteligentes con perfiles editables y una operación comercial preparada para medir, administrar y escalar.",
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
    name: "Plataforma personal de planificación financiera",
    shortName: "Finanzas Personales",
    category: "Aplicación personal",
    eyebrow: "Producto personal · En auditoría",
    priorityLabel: "Producto independiente",
    description:
      "Aplicación web y móvil que centraliza deudas, tasas, presupuestos y cronogramas para visualizar compromisos y evaluar escenarios con mayor claridad.",
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
