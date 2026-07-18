import { useState, useEffect } from "react";
import { Home, User, FileText, Briefcase, Code, Award, MessageSquare, Mail, Github, Linkedin, Menu, X, Layers, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import perfilImg from "../assets/images/perfil.JPEG";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const PROFILE = {
    name: "Luis Romero",
    email: "luis_jesusrc@hotmail.com",
    github: "https://github.com/LuisRomero20",
    linkedin: "https://www.linkedin.com/in/luisjesusromerocastro/",
  };

  const navLinks = [
    { id: "home", label: "Inicio", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "resume", label: "Resume", icon: <FileText size={20} /> },
    { id: "skills", label: "Skills", icon: <Code size={20} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={20} /> },
    { id: "services", label: "Servicios", icon: <Layers size={20} /> },
    { id: "certifications", label: "Certificaciones", icon: <Award size={20} /> },
    { id: "recommendations", label: "Testimonios y Reconocimientos", icon: <Trophy size={20} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={20} /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // ScrollSpy logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -49% 0px", // Detecta cuando la sección cruza la mitad exacta de la pantalla
      }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Botón Hamburguesa Móvil (Flotante) */}
      <button
        onClick={toggleSidebar}
        className="xl:hidden fixed top-4 right-4 z-[60] p-3 rounded-full bg-[#1E1B4B] text-white shadow-lg border border-white/10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para móviles */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="xl:hidden fixed inset-0 bg-black/60 z-[40]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#040b14] text-white z-[50] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
        } overflow-y-auto scrollbar-hide`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6">
          <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-700/50 mb-4 overflow-hidden flex items-center justify-center">
            <img src={perfilImg} alt="Luis Romero" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-center">{PROFILE.name}</h1>
          
          {/* Social Links */}
          <div className="flex gap-3 mb-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#212431] rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#212431] rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-2.5 bg-[#212431] rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 pb-10">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      closeSidebar();
                      setActiveSection(link.id);
                    }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-white bg-blue-500/10 border-l-4 border-blue-500"
                        : "text-[#a8a9b4] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`${isActive ? 'text-blue-500' : 'text-[#a8a9b4]'}`}>
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer info */}
        <div className="p-4 text-center text-xs text-[#a8a9b4]">
          <p>© Copyright <strong>{PROFILE.name}</strong></p>
          <p className="mt-1">Designed for Data Engineering</p>
        </div>
      </aside>
    </>
  );
}
