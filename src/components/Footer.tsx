import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const share = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="py-24 px-4 text-center">
      <div className="divider mx-auto mb-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-cursive text-4xl md:text-5xl text-gradient mb-3">
          С любовью
        </p>
        <p className="font-sans text-xs text-muted-foreground tracking-wider mb-10">
          22 ФЕВРАЛЯ 2026
        </p>

        <button onClick={share} className="btn-primary px-8 py-3 text-sm">
          {copied ? "Скопировано" : "Поделиться"}
        </button>

        <p className="font-sans text-[10px] text-muted-foreground/30 mt-16 tracking-[0.3em] uppercase">
          For Анастасия Щербакова
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
