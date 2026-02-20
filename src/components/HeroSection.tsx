import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import textureBg from "@/assets/texture-bg.jpg";

interface Props {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRunaway = useCallback(() => {
    setBtnPos({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 150,
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={textureBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-8"
        >
          22 февраля 2026 · exclusive
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.05] mb-3"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-cursive text-4xl md:text-6xl text-gradient mb-6"
        >
          Анастасия
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mb-8"
        >
          <div className="divider" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="font-serif text-lg md:text-xl text-muted-foreground italic mb-12 leading-relaxed"
        >
          Твой персональный журнал любви
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-5"
        >
          <button onClick={onEnter} className="btn-primary px-10 py-3.5 text-sm">
            Открыть твой журнал
          </button>

          <motion.button
            onMouseEnter={handleRunaway}
            onClick={() => { setShowModal(true); setTimeout(() => setShowModal(false), 2000); }}
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="font-sans text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
          >
            Я не Настя
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/10 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="editorial-card p-8 max-w-xs text-center"
            >
              <p className="font-serif text-xl text-foreground mb-1">Только для именинницы</p>
              <p className="font-sans text-sm text-muted-foreground">Этот подарок — для Насти</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
