import { motion } from "framer-motion";
import compliments from "@/data/compliments";

const Compliments = () => (
  <section className="py-24 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <span className="tag">Compliments</span>
      <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
        Комплименты
      </h2>
      <div className="divider mx-auto" />
    </motion.div>

    <div className="max-w-lg mx-auto space-y-4">
      {compliments.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="editorial-card px-8 py-6"
        >
          <p className="font-serif text-lg md:text-xl text-foreground/80 italic leading-relaxed">
            «{item.text}»
          </p>
          <p className="font-sans text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase mt-3">
            — {item.from}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Compliments;
