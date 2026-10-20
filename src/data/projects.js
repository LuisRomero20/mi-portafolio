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

export const projects = [
  {
    id: "linkeo",
    name: "LINKEO · Identidad digital NFC",
    shortName: "LINKEO",
    category: "Producto digital",
    eyebrow: "Co-Founder & Lead Full-Stack",
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
    id: "calera-report",
    name: "CaleraReport · Automatización SAP",
    shortName: "CaleraReport",
    category: "Automatización",
    eyebrow: "Automation & Data Engineering",
    description:
      "Consolidador de archivos de pago y automatización de plantillas para reducir trabajo manual en procesos SAP.",
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
    id: "sales-etl",
    name: "ETL & Forecasting de Ventas",
    shortName: "Sales ETL",
    category: "Data Engineering",
    eyebrow: "Pipeline end-to-end",
    description:
      "Pipeline automatizado que limpia ventas, realiza cargas incrementales y proyecta ingresos a 30 días.",
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
    dashboardGallery: [etlImg1, etlImg2],
    client: "Proyecto personal",
    date: "Caso técnico",
    featured: true,
  },
  {
    id: "finper",
    name: "FinPer · Finanzas personales",
    shortName: "FinPer",
    category: "Aplicación full-stack",
    eyebrow: "Full-Stack Architecture",
    description:
      "Aplicación web y móvil para organizar deudas, tasas, presupuestos y cronogramas con sincronización en la nube.",
    longDescription:
      "FinPer centraliza obligaciones financieras y automatiza cálculos que normalmente se resuelven en hojas separadas. La experiencia combina visualización, tipado estricto y persistencia segura, con una base preparada para uso móvil mediante Capacitor.",
    technologies: ["React", "TypeScript", "Supabase", "Zustand", "Capacitor", "Recharts"],
    image: finanzasPerfil,
    github: "https://github.com/LuisRomero20/Finanzas",
    demo: "https://finanzas-tau-three.vercel.app/",
    metrics: { Experiencia: "Web + móvil", Datos: "Sincronización cloud", Cálculos: "Tasas y cuotas" },
    context: {
      problem: "Gestionar varias deudas y tipos de tasa en herramientas dispersas dificulta entender el calendario real de pagos.",
      solution: "Una interfaz única para registrar obligaciones, calcular escenarios y mantener la información sincronizada.",
      impact: "Mayor claridad sobre compromisos financieros y una base reutilizable para tomar decisiones con contexto.",
    },
    dashboardGallery: [finanzas1, finanzas2, finanzas3],
    client: "Producto personal",
    date: "En evolución",
    featured: true,
  },
  {
    id: "skynet-quant",
    name: "Skynet Quant · Analítica deportiva",
    shortName: "Skynet Quant",
    category: "Machine Learning",
    eyebrow: "Modelado cuantitativo",
    description:
      "Plataforma que combina modelos Poisson y aprendizaje automático para explorar predicciones deportivas trazables.",
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
    id: "ransomware-ml",
    name: "ML para detección de ransomware",
    shortName: "Ransomware ML",
    category: "Investigación",
    eyebrow: "Artículo indexado · IJACSA 2024",
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
