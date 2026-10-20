import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiVsco, SiWhatsapp, SiX } from "react-icons/si";
import SectionIntro from "../components/SectionIntro";
import { profile } from "../data/profile";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xykrkkpo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("No se pudo enviar el formulario");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="section-shell section-block">
      <SectionIntro
        eyebrow="Contacto"
        title="Hablemos de datos, automatización o sistemas de IA."
        description="Si necesitas fortalecer una plataforma de datos, convertir un proceso manual en una solución medible o explorar una automatización con IA, conversemos."
      />

      <div className="contact-layout">
        <Motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-panel__label">Canal directo</div>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}<ArrowUpRight />
          </a>
          <p>Respondo oportunidades profesionales, colaboraciones técnicas y conversaciones sobre productos de datos e IA aplicada.</p>
          <div className="contact-details">
            <span><MapPin size={17} /> {profile.location}</span>
            <span><Mail size={17} /> Respuesta por correo</span>
            <a href={profile.links.whatsapp} target="_blank" rel="noreferrer"><SiWhatsapp /> {profile.phoneDisplay}</a>
          </div>
          <div className="contact-socials" aria-label="Redes y presencia digital">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><SiLinkedin /> LinkedIn</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer"><SiGithub /> GitHub</a>
            <a href={profile.links.whatsapp} target="_blank" rel="noreferrer"><SiWhatsapp /> WhatsApp</a>
            <a href={profile.links.instagram} target="_blank" rel="noreferrer"><SiInstagram /> Instagram</a>
            <a href={profile.links.vsco} target="_blank" rel="noreferrer"><SiVsco /> VSCO</a>
            <a href={profile.links.tiktok} target="_blank" rel="noreferrer"><SiTiktok /> TikTok</a>
            <a href={profile.links.x} target="_blank" rel="noreferrer"><SiX /> X</a>
          </div>
        </Motion.div>

        <Motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <div className="form-row">
            <label>
              Nombre
              <input name="name" type="text" autoComplete="name" required placeholder="Tu nombre" />
            </label>
            <label>
              Correo
              <input name="email" type="email" autoComplete="email" required placeholder="tu@empresa.com" />
            </label>
          </div>
          <label>
            Asunto
            <input name="subject" type="text" required placeholder="¿En qué podemos colaborar?" />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="6" required placeholder="Cuéntame brevemente el contexto, objetivo y próximos pasos." />
          </label>
          <div className="contact-form__footer">
            <p>Los datos se usan únicamente para responder este mensaje.</p>
            <button className="button-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}<Send size={17} />
            </button>
          </div>
          <div className={`form-status form-status--${status}`} role="status" aria-live="polite">
            {status === "success" && "Mensaje enviado. Gracias, te responderé por correo."}
            {status === "error" && <>No se pudo enviar. Puedes escribirme a <a href={`mailto:${profile.email}`}>{profile.email}</a>.</>}
          </div>
        </Motion.form>
      </div>
    </div>
  );
}
