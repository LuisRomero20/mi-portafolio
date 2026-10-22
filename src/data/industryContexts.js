import bbvaLogo from "../assets/brands/bbva.png";
import laCaleraLogo from "../assets/brands/la-calera.png";
import angloAmericanLogo from "../assets/brands/transparent/anglo-american-v2.png";
import antaminaLogo from "../assets/brands/transparent/antamina-v2.png";
import cerroVerdeLogo from "../assets/brands/transparent/cerro-verde-v2.png";
import indraLogo from "../assets/brands/transparent/indra-v2.png";
import linkeoLogo from "../assets/brands/transparent/linkeo-v2.png";
import miconLogo from "../assets/brands/transparent/micon-v2.png";
import renovaLogo from "../assets/brands/transparent/renova-v2.png";
import yanacochaLogo from "../assets/brands/transparent/yanacocha-v2.png";

const brands = {
  angloAmerican: { name: "Anglo American Quellaveco", logo: angloAmericanLogo, logoClass: "anglo-american" },
  antamina: { name: "Compañía Minera Antamina", logo: antaminaLogo, logoClass: "antamina" },
  bbva: { name: "BBVA", logo: bbvaLogo, logoClass: "bbva" },
  cerroVerde: { name: "Sociedad Minera Cerro Verde", logo: cerroVerdeLogo, logoClass: "cerro-verde" },
  indra: { name: "Indra / Minsait", logo: indraLogo, logoClass: "indra" },
  laCalera: { name: "La Calera", logo: laCaleraLogo, logoClass: "la-calera" },
  linkeo: { name: "LINKEO", logo: linkeoLogo, logoClass: "linkeo" },
  micon: { name: "2M MICON S.A.C.", logo: miconLogo, logoClass: "micon" },
  renova: { name: "RENOVA S.A.C.", logo: renovaLogo, logoClass: "renova" },
  yanacocha: { name: "Minera Yanacocha", logo: yanacochaLogo, logoClass: "yanacocha" },
};

export const industryBrands = Object.values(brands);

export const industryGroups = [
  {
    company: brands.indra,
    sector: "Ingeniería de datos · Servicios tecnológicos",
    clients: [brands.bbva],
    relationship:
      "Servicios de ingeniería, calidad y operación de datos para BBVA dentro de un entorno financiero regulado.",
    contribution:
      "Continuidad de procesos batch, análisis de causa raíz, controles preventivos, trazabilidad y automatización del soporte operativo.",
  },
  {
    company: brands.renova,
    sector: "Tecnología y automatización · Gran minería",
    featured: true,
    clients: [brands.angloAmerican, brands.antamina, brands.yanacocha, brands.cerroVerde],
    relationship:
      "RENOVA brinda reencauche, reparación y soluciones técnicas para neumáticos OTR, además de servicios especializados para operaciones mineras.",
    contribution:
      "Mi participación se concentró en soporte TI, consolidación de información, automatización de reportes y seguimiento operativo para contextos vinculados a cuatro clientes mineros.",
  },
  {
    company: brands.laCalera,
    sector: "Industria alimentaria · Automatización",
    clients: [],
    engagement: "Organización vinculada a un proyecto de automatización",
    relationship:
      "Automatización de la preparación y consolidación documental asociada a procesos de carga en SAP.",
    contribution:
      "Conciliación, validaciones bloqueantes, estandarización de plantillas y generación de evidencia auditable con datos sintéticos en la demostración pública.",
  },
  {
    company: brands.linkeo,
    sector: "Producto digital · Identidad y operación comercial",
    clients: [],
    engagement: "Emprendimiento tecnológico propio",
    relationship:
      "Plataforma de identidad digital que conecta perfiles administrables con experiencias NFC y QR.",
    contribution:
      "Dirección técnica, arquitectura de producto, experiencia móvil, trazabilidad y herramientas para la operación comercial.",
  },
  {
    company: brands.micon,
    sector: "Desarrollo web · Analítica digital",
    clients: [],
    engagement: "Experiencia laboral",
    relationship:
      "Desarrollo y optimización de una experiencia web corporativa con instrumentación de analítica digital.",
    contribution:
      "Mejora reportada del 20 % en tiempo de carga, accesibilidad técnica, SEO y seguimiento de objetivos comerciales.",
  },
];
