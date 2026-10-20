import antaminaLogo from "../assets/brands/antamina.png";
import bbvaLogo from "../assets/brands/bbva.png";
import laCaleraLogo from "../assets/brands/la-calera.png";

export const industryContexts = [
  {
    name: "BBVA",
    sector: "Banca · Operación de datos",
    relationship:
      "Experiencia en servicios tecnológicos para un entorno financiero asociado a BBVA, desde Indra / Minsait.",
    contribution:
      "Confiabilidad batch, controles de calidad y trazabilidad de procesos de datos en un contexto regulado.",
    logo: bbvaLogo,
    logoClass: "bbva",
    website: "https://www.bbva.com/",
  },
  {
    name: "La Calera",
    sector: "Industria alimentaria · Automatización",
    relationship:
      "Proyecto de automatización relacionado con la preparación y consolidación de información para procesos SAP.",
    contribution:
      "Validación por lotes, estandarización de plantillas y reducción de pasos manuales antes de la carga.",
    logo: laCaleraLogo,
    logoClass: "la-calera",
    website: "https://www.lacalera.pe/",
    projectId: "calera-report",
  },
  {
    name: "Antamina",
    sector: "Gran minería · Operaciones",
    relationship:
      "Trabajo de soporte TI y automatización en operaciones vinculadas a gran minería, desde RENOVA S.A.C.",
    contribution:
      "Integración de reportes, seguimiento de KPI y soporte técnico para procesos industriales.",
    logo: antaminaLogo,
    logoClass: "antamina",
    website: "https://www.antamina.com/",
  },
];
