import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar el backend para enviar el correo
    alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
  };

  return (
    <div className="py-24 bg-transparent text-[var(--color-text)]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-wider">Contact</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-[var(--color-muted)] text-lg">
            ¿Tienes alguna consulta o propuesta? Envíame un mensaje y te responderé a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Columna Izquierda - Información de Contacto y Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0b1120] border border-[#1e293b] p-8 rounded-xl shadow-lg flex flex-col h-full"
          >
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full flex-shrink-0 mt-1">
                  <MapPin size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Address</h3>
                  <p className="text-[var(--color-muted)]">Lima, Perú</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full flex-shrink-0 mt-1">
                  <Phone size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                  <p className="text-[var(--color-muted)]">+51 907 362 779</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full flex-shrink-0 mt-1">
                  <Mail size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                  <p className="text-[var(--color-muted)] break-all">luis_jesusrc@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps (Lima, Peru) */}
            <div className="w-full h-64 rounded-lg overflow-hidden border border-[#1e293b] flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124869.60105315842!2d-77.10860589635791!3d-12.043328225575514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec3%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Columna Derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0b1120] border border-[#1e293b] p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
