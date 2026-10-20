import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__cta">
        <p className="eyebrow">¿Construimos algo confiable?</p>
        <a href={`mailto:${profile.email}?subject=Oportunidad%20profesional%20%7C%20Luis%20Romero`}>
          {profile.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="section-shell site-footer__bottom">
        <div>
          <strong>{profile.shortName}</strong>
          <span>Data Engineering · DataOps · AI Systems</span>
        </div>
        <div className="footer-links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Luis Romero">
            <Linkedin size={20} />
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub de Luis Romero">
            <Github size={20} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Lima, Perú</p>
      </div>
    </footer>
  );
}
