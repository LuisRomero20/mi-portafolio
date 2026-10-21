import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { id: "home", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "credentials", label: "Formación" },
  { id: "skills", label: "Capacidades" },
  { id: "recommendations", label: "Recomendaciones" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.toggle("menu-is-open", menuOpen);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.2, 0.45] },
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
        <button className="brand-mark" onClick={() => goToSection("home")} aria-label="LR Luis Romero — ir al inicio">
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

        {menuOpen && <button className="nav-scrim" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" />}

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
