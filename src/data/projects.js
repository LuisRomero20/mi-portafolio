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
    id: 1,
    name: "Plataforma de Análisis Cuantitativo Skynet",
    description: "Plataforma de análisis cuantitativo deportivo con ML + Poisson para predicciones FIFA World Cup 2026",
    longDescription: "Plataforma sofisticada que combina modelos Random Forest (250 árboles) con análisis estadístico Poisson. Entrenada con 25+ años de datos de partidos internacionales, prediciendo resultados, probabilidades de goles y mercados secundarios (corners, tarjetas). Incluye reentrenamiento automático de modelos, sincronización de resultados en tiempo real desde GitHub, y auditoría completa de predicciones vs resultados reales.",
    technologies: ["Python", "Streamlit", "scikit-learn", "SQLite", "Pandas"],
    image: skynetImg,
    github: "https://github.com/LuisRomero20/skynet-quant-platform",
    demo: "https://skynet-quant-platform-ad5w7seuajetmp7mcnsip4.streamlit.app/",
    metrics: {
      "Modelo": "80% Poisson + 20% ML",
      "Precisión": "53.79%",
      "Datos": "25+ años históricos"
    },
    context: {
      problem: "El análisis de históricos deportivos y mercados secundarios se hacía de forma manual, con baja trazabilidad y tiempos altos de ajuste.",
      solution: "Diseñé un flujo automatizado que combina Poisson y ML, reentrena modelos y publica resultados en una app Streamlit con sincronización continua.",
      impact: "Aumento de velocidad de análisis y decisiones de predicción con trazabilidad completa de resultados."
    },
    dashboardGallery: [
      skynetMain,
      skynetImg1,
      skynetImg2,
      skynetImg3
    ],
    category: "Software & Data",
    client: "Proyecto Personal",
    date: "2023 - Presente",
    featured: true
  },
  {
    id: 2,
    name: "Sistema Integrado ETL y Forecasting de Ventas",
    description: "Pipeline automatizado de datos de ventas con limpieza, forecasting usando Prophet, y dashboard web en Streamlit.",
    longDescription: "Proyecto de Ingeniería y Análisis de Datos diseñado para resolver la limpieza manual de reportes de ventas y la falta de visibilidad en tiempo real. Automatiza la ingesta de datos sucios (CSVs con errores, nulos, formatos inconsistentes), los procesa con Python, entrena un modelo de forecasting (Prophet) para predecir ingresos de los próximos 30 días, y orquesta una carga incremental en SQLite para exponerlos en un dashboard.",
    technologies: ["Python", "Streamlit", "Prophet", "SQLite", "Power BI", "PowerShell"],
    image: etlPerfil,
    github: "https://github.com/LuisRomero20/end-to-end-sales-etl-pipeline",
    demo: "https://end-to-end-sales-etl-pipeline-6ao8esedhqua4app97w2o2g.streamlit.app/",
    metrics: {
      "Forecast": "Predicción 30 días",
      "Automatización": "Programado diario 7 AM",
      "Gestión de Data": "Carga incremental"
    },
    context: {
      problem: "Limpieza manual de reportes de ventas (archivos CSV con errores humanos y formatos inconsistentes) y falta de visibilidad en tiempo real de ingresos.",
      solution: "Un pipeline ETL en Python orquestado con PowerShell que limpia la data, predice ventas futuras con Prophet, y guarda en SQLite para un dashboard en Streamlit y Power BI.",
      impact: "Disponibilidad inmediata y automatizada de KPIs limpios de ventas, con proyección confiable a 30 días y cero esfuerzo manual."
    },
    dashboardGallery: [
      etlImg1,
      etlImg2
    ],
    category: "Software & Data",
    client: "Proyecto Personal",
    date: "2023 - Presente",
    featured: true
  },
  {
    id: 3,
    name: "Sistema de Gestión Financiera Personal",
    description: "DeudaTracker: Aplicación web moderna para gestionar deudas con cálculos automáticos, gráficos y sincronización en la nube.",
    longDescription: "Plataforma completa (DeudaTracker) para el control financiero personal. Permite realizar cálculos automáticos de cuotas e intereses, gestionar múltiples monedas, y ofrece seguimiento en tiempo real con gráficos interactivos. Cuenta con autenticación segura, sincronización en la nube mediante Supabase, y una arquitectura moderna orientada a rendimiento.",
    technologies: ["React", "TypeScript", "Zustand", "Supabase", "Tailwind CSS", "Vite"],
    image: finanzasPerfil,
    github: "https://github.com/LuisRomero20/Finanzas",
    demo: "https://finanzas-tau-three.vercel.app",
    metrics: {
      "Frontend": "React + TypeScript",
      "Backend": "Supabase (PostgreSQL)",
      "UI": "Tailwind + Recharts"
    },
    context: {
      problem: "Dificultad para llevar un control exacto de múltiples deudas, calcular intereses (tasas nominales/efectivas), y visualizar proyecciones de pagos de manera amigable.",
      solution: "Se desarrolló una aplicación web responsiva y tipada (TypeScript) que centraliza el estado de las deudas, automatiza la matemática financiera y guarda todo de forma segura en la nube.",
      impact: "Proporciona claridad total sobre las obligaciones financieras y cronogramas de pago, permitiendo al usuario tomar mejores decisiones económicas."
    },
    dashboardGallery: [
      finanzas1,
      finanzas2,
      finanzas3
    ],
    category: "Software & Data",
    client: "Proyecto Personal",
    date: "2023 - Presente",
    featured: true
  },
  {
    id: 4,
    name: "Machine Learning as a Tool to Combat Ransomware in Resource-Constrained Business Environment",
    description: "Artículo científico publicado en el International Journal of Advanced Computer Science and Applications (IJACSA) 2024.",
    longDescription: "Investigación que propone un modelo de ciberseguridad basado en Machine Learning (Random Forest y SVM) diseñado específicamente para detectar y mitigar ataques de ransomware en microempresas con recursos limitados. El modelo logró una precisión superior al 90% en entornos controlados, ofreciendo una arquitectura ligera y adaptable.",
    technologies: ["Machine Learning", "Random Forest", "SVM", "Cybersecurity", "Python"],
    image: ransomwarePerfil,
    github: "",
    demo: "http://dx.doi.org/10.14569/IJACSA.2024.0151253",
    pdfUrl: "/papers/ransomware.pdf",
    citation: "Luis Jesús Romero Castro, Piero Alexander Cruz Aquino and Fidel Eugenio Garcia Rojas. “Machine Learning as a Tool to Combat Ransomware in Resource-Constrained Business Environment”. International Journal of Advanced Computer Science and Applications (ijacsa) 15.12 (2024). http://dx.doi.org/10.14569/IJACSA.2024.0151253",
    metrics: {
      "Precisión del Modelo": "> 90%",
      "Algoritmos": "Random Forest, SVM, NN",
      "Revista": "IJACSA (Scopus)"
    },
    context: {
      problem: "Las microempresas carecen de recursos financieros y tecnológicos para implementar sistemas avanzados de protección contra el ransomware, dejándolas altamente vulnerables.",
      solution: "Se diseñó y validó un modelo de ML escalable y eficiente, apoyado por una arquitectura integrada, para identificar patrones de comportamiento malicioso en tiempo real.",
      impact: "Reducción significativa en los tiempos de respuesta ante ataques (hasta un 70% menos) y prevención del impacto financiero asociado al secuestro de datos."
    },
    category: "Investigación",
    client: "Universidad Peruana de Ciencias Aplicadas",
    date: "Diciembre 2024",
    featured: true
  },
  {
    id: 5,
    name: "Portafolio de Fotografía Arquitectónica y Paisajes",
    description: "Colección de fotografías profesionales enfocadas en arquitectura urbana y paisajes naturales.",
    longDescription: "Espacio en construcción. Muy pronto podrás visualizar mi galería completa de fotografía arquitectónica y de paisajes, capturando la esencia de diferentes entornos urbanos y naturales con un enfoque en simetría, contrastes y texturas.",
    technologies: ["Lightroom", "Adobe Photoshop", "Fotografía Digital"],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    dashboardGallery: [],
    github: "",
    category: "Fotografía",
    client: "Proyecto Personal",
    date: "Próximamente",
    featured: false,
    comingSoon: true
  }
];
