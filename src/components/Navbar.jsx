import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasPublishedBlog = blogPosts.some((post) => post.published);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Proyectos" },
    { path: "/skills", label: "Skills" },
    { path: "/certifications", label: "Certificaciones" },
    { path: "/testimonials", label: "Testimonios" },
    { path: "/contact", label: "Contacto" },
  ];

  const visibleLinks = hasPublishedBlog
    ? [...navLinks.slice(0, 4), { path: "/blog", label: "Blog" }, ...navLinks.slice(4)]
    : navLinks;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur border-b border-blue-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[var(--color-text)]">
          LR.Dev
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {visibleLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                isActive(link.path)
                  ? "text-[var(--color-primary)] font-bold border-b-2 border-[var(--color-primary)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[var(--color-bg)] px-4 py-4 space-y-2 border-t border-blue-100">
          {visibleLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
