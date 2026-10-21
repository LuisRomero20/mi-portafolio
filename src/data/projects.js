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
import caleraPerfil from "../assets/images/CaleraPerfil.png";

export const projects = [
  {
    id: "sales-etl",
    order: 1,
    name: "Sales ETL — Pipeline comercial y forecasting",
    shortName: "Sales ETL",
    status: "Caso técnico funcional",
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
    architecture: [
      "Archivos de ventas → validación de esquema y calidad.",
      "Transformaciones reproducibles y persistencia incremental en SQLite.",
      "Forecasting con Prophet sobre series preparadas.",
      "Publicación de indicadores en Streamlit y Power BI.",
    ],
    evidence: ["Repositorio público", "Demo funcional en Streamlit", "Capturas reales del dashboard"],
    dashboardGallery: [etlImg1, etlImg2],
    client: "Proyecto personal",
    date: "Caso técnico",
    featured: true,
    lead: true,
  },
  {
    id: "calera-report",
    order: 2,
    name: "CaleraReport — Automatización documental y SAP",
    shortName: "CaleraReport",
    status: "Demo técnica verificable",
    category: "Automatización & Controles",
    eyebrow: "Automatización documental · Controles SAP",
    priorityLabel: "Automatización empresarial",
    description:
      "Flujo local que concilia expedientes, genera un maestro de control y prepara la operación SAP MIRO con validaciones bloqueantes antes de cualquier ejecución.",
    longDescription:
      "CaleraReport organiza un proceso documental con información sensible sin exponer archivos empresariales en esta demostración. La solución aplica reglas de conciliación, genera un libro maestro con incidencias y prepara alternativas de integración con SAP MIRO que se detienen ante datos incompletos o ambiguos.",
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
      "Procesamiento": "Local",
      "Conciliación": "Reglas reproducibles",
      "Control SAP": "Parada ante ambigüedad",
      "Validación": "Suite automatizada",
    },
    context: {
      problem:
        "La revisión y conciliación manual de expedientes de servicios (HES, OC, facturas, recibos por honorarios, SOLPED) entre múltiples sedes requería días de trabajo repetitivo, propiciando discrepancias de importes y riesgo crítico de imputación errónea en SAP MIRO.",
      solution:
        "Un motor de conciliación documental local (navegador y Python) con validación de tolerancias, generación del Maestro A–W con fórmulas Excel vivas, gestión de incidencias bloqueantes y tres bots SAP con parada fail-closed y aprobación afirmativa obligatoria.",
      impact:
        "Una demostración reproducible para reducir pasos manuales, documentar incidencias y evitar que registros ambiguos continúen hacia el ERP sin revisión.",
    },
    featuresTitle: "Capacidades Enterprise Operativas",
    features: [
      "Modo Demo Ejecutivo 1-Clic: exploración interactiva instantánea con 81 expedientes sintéticos multisede sin requerir archivos locales.",
      "Dossier Digital 360°: trazabilidad documental interactiva (SOLPED ➔ OC ➔ HES ➔ Factura/RXH) y simulador de payload SAP BAPI_INCOMINGINVOICE_CREATE.",
      "Tablero de Analítica Financiera (HUD): distribución de gasto en Soles por sede y embudo de madurez de contabilización SAP con filtros dinámicos.",
      "Generación de libro Maestro A–W con fórmulas vivas, semáforos condicionales y hoja de incidencias.",
      "Certificado Formal de Conciliación y Control Interno imprimible con hash criptográfico SHA-256.",
      "Integración SAP GUI fail-closed: aprobación afirmativa obligatoria, verificación de saldo 0.00 y validación de 10 dígitos.",
      "Suite automatizada con datos sintéticos y ejecución continua en GitHub Actions.",
    ],
    architecture: [
      "Carga local de expedientes y normalización de documentos.",
      "Motor de reglas para conciliación, tolerancias e incidencias.",
      "Maestro A–W y certificado de control como salidas auditables.",
      "Preparación SAP MIRO con simulación y aprobación explícita.",
    ],
    evidence: ["Demo pública con datos sintéticos", "Repositorio y CI públicos", "Dossier y certificado imprimibles"],
    statusNote:
      "La demostración pública utiliza expedientes sintéticos. No expone documentos, proveedores ni credenciales de los entornos empresariales relacionados.",
    client: "La Calera / Automatización Operativa",
    date: "2025 — 2026",
    featured: true,
  },
  {
    id: "viernes-ai-os",
    order: 3,
    name: "Viernes AI OS — Orquestación con control humano",
    shortName: "Viernes AI OS",
    status: "Arquitectura en desarrollo",
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
    architecture: [
      "Núcleo de IA desacoplado del proveedor de modelos.",
      "Memoria personal consultable y corregible.",
      "Capa de integraciones con permisos y registro de acciones.",
      "Agente local de Windows para capacidades aprobadas por el usuario.",
    ],
    delivery: {
      "Diseñado": ["Arquitectura personal-first", "Modelo de permisos", "Memoria gobernada por el usuario"],
      "En validación": ["Home diario", "Orquestación de tareas", "Registro auditable"],
      "Roadmap": ["Canales móviles", "Integraciones externas", "Agente local para Windows"],
    },
    evidence: ["Arquitectura y roadmap documentados", "Estado de implementación pendiente de validación reproducible"],
    statusNote:
      "La arquitectura, el roadmap y el alcance están documentados. Las funcionalidades implementadas continúan pendientes de validación técnica reproducible.",
    client: "Producto personal",
    date: "Oct. 2026 — Actualidad",
    featured: true,
  },
  {
    id: "skynet-quant",
    order: 5,
    name: "Skynet Quant — Analítica deportiva auditable",
    shortName: "Skynet Quant",
    status: "Laboratorio funcional",
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
    architecture: [
      "Preparación de históricos y variables de partido.",
      "Comparación entre modelos Poisson y clasificadores de machine learning.",
      "Registro de predicción, resultado y contexto de ejecución.",
      "Interfaz Streamlit para exploración y auditoría.",
    ],
    evidence: ["Repositorio público", "Demo Streamlit", "Capturas de módulos y resultados"],
    client: "Proyecto personal",
    date: "En evolución",
    featured: true,
  },
  {
    id: "linkeo",
    order: 4,
    name: "LINKEO — Identidad digital con NFC y QR",
    shortName: "LINKEO",
    status: "Producto en producción",
    category: "Producto digital",
    eyebrow: "Co-Founder & Lead Full-Stack",
    priorityLabel: "Producto en producción",
    description:
      "Producto en producción que conecta tarjetas inteligentes con perfiles editables y una operación comercial preparada para medir, administrar y escalar.",
    longDescription:
      "LINKEO conecta tarjetas inteligentes con perfiles digitales editables y una operación comercial preparada para crecer. Mi trabajo abarca la arquitectura del producto, el desarrollo full-stack y el despliegue de la experiencia pública.",
    technologies: ["React 19", "TypeScript", "Supabase", "Vercel", "NFC / QR"],
    image: null,
    visualVariant: "linkeo",
    accent: "violet",
    github: "",
    demo: "https://linkeocards.com/",
    metrics: { Rol: "Co-Founder", Estado: "En producción", Interacción: "NFC + QR" },
    context: {
      problem: "Los datos de contacto y la presencia profesional suelen quedar fragmentados entre canales difíciles de actualizar.",
      solution: "Una identidad digital editable, activada desde una tarjeta física y respaldada por una arquitectura web moderna.",
      impact: "Una experiencia de contacto coherente y una base tecnológica que permite operar, medir y ampliar el producto.",
    },
    architecture: [
      "Tarjeta NFC o código QR como punto de entrada.",
      "Perfil digital editable y optimizado para interacción móvil.",
      "Persistencia y autenticación sobre Supabase.",
      "Despliegue web y operación comercial sobre Vercel.",
    ],
    evidence: ["Web pública operativa", "Perfiles digitales en producción", "Operación comercial documentada"],
    client: "Emprendimiento propio",
    date: "2025 — Actualidad",
    featured: true,
  },
  {
    id: "finanzas-personales",
    legacyIds: ["finper"],
    order: 6,
    name: "Finanzas Personales — Planificación financiera",
    shortName: "Finanzas Personales",
    status: "En auditoría técnica",
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
    architecture: [
      "Cliente web y móvil construido con React y Capacitor.",
      "Estado de producto organizado con Zustand.",
      "Persistencia y sincronización previstas sobre Supabase.",
      "Visualización de escenarios mediante Recharts.",
    ],
    evidence: ["Repositorio público", "Capturas reales de módulos", "Cobertura funcional pendiente de auditoría completa"],
    client: "Producto personal",
    date: "En revisión",
    featured: true,
  },
  {
    id: "ransomware-ml",
    order: 7,
    name: "ML para detección de ransomware",
    shortName: "Ransomware ML",
    status: "Investigación publicada",
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
    metrics: { Precisión: "> 90% en entorno controlado", Respuesta: "−70% en pruebas simuladas", Publicación: "IJACSA · Scopus" },
    context: {
      problem: "Las microempresas suelen carecer de recursos para implementar plataformas avanzadas de protección contra ransomware.",
      solution: "Diseño y validación experimental de modelos supervisados capaces de detectar comportamiento malicioso con una arquitectura ligera.",
      impact: "Resultados de investigación con precisión superior al 90% y reducción reportada de hasta 70% en tiempo de respuesta.",
    },
    evidence: ["Artículo completo", "DOI público", "Tablas de validación y prueba del estudio"],
    client: "Investigación académica · UPC",
    date: "Diciembre 2024",
    featured: true,
  },
];
