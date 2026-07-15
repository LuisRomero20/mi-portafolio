import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "../assets/images/home.JPEG";

export default function HomePage() {
  const words = ["Data Engineer", "Developer", "Freelancer", "Photographer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pausa al completar la palabra
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div 
      className="h-screen w-full relative flex items-center justify-center lg:justify-start lg:pl-32 bg-cover bg-no-repeat bg-[center_80%]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay oscuro sutil para que el texto resalte (opcional) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 px-4 text-center lg:text-left w-full max-w-4xl mx-auto lg:mx-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Luis Romero
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          I'm <span className="border-b-4 border-blue-500 pb-1">{currentText}</span>
          <span className="animate-ping font-light">|</span>
        </motion.p>
      </div>
    </div>
  );
}
