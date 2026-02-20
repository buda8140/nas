import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MagazineCover from "@/components/MagazineCover";
import PhotoCarousel from "@/components/PhotoCarousel";
import TopReasons from "@/components/TopReasons";
import BentoGrid from "@/components/BentoGrid";
import Compliments from "@/components/Compliments";
import Footer from "@/components/Footer";

const Index = () => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div key="hero" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <HeroSection onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagazineCover />
            <PhotoCarousel />
            <TopReasons />
            <BentoGrid />
            <Compliments />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
