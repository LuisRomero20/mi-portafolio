import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__bottom">
        <div>
          <strong>{profile.shortName}</strong>
          <span>{profile.role}</span>
        </div>
        <div className="footer-links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Luis Romero">
            <SiLinkedin size={19} />
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub de Luis Romero">
            <SiGithub size={19} />
          </a>
          <a href={profile.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp de Luis Romero">
            <SiWhatsapp size={19} />
          </a>
          <a href={profile.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Luis Romero">
            <SiInstagram size={19} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Lima, Perú</p>
      </div>
    </footer>
  );
}
