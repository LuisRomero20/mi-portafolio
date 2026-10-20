import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Perfil" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contexts", label: "Entornos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const goToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="brand-mark" onClick={() => goToSection("home")} aria-label="Ir al inicio">
          <span>LR</span>
          <span className="brand-mark__text">Luis Romero</span>
        </button>

        <nav className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className={activeSection === link.id && location.pathname === "/" ? "is-active" : ""}
            >
              {link.label}
            </button>
          ))}
          <button className="header-cta" onClick={() => goToSection("contact")}>
            Conversemos
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
