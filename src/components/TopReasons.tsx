import { motion } from "framer-motion";
import reasons from "@/data/reasons";

const TopReasons = () => (
  <section className="py-24 px-4 max-w-2xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <span className="tag">Top 10</span>
      <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
        Почему Настя — лучшая
      </h2>
      <div className="divider mx-auto" />
    </motion.div>

    <div className="space-y-3">
      {reasons.map((reason, i) => (
        <motion.div
          key={reason.number}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="reason-card flex items-start gap-4"
        >
          <span className="font-serif text-2xl font-light text-primary/40 flex-shrink-0 w-8 text-right">
            {reason.number}
          </span>
          <p className="font-sans text-sm text-foreground/75 leading-relaxed pt-1">
            {reason.text}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TopReasons;
