import { motion } from "framer-motion";
import { getMemoryPhotos } from "@/utils/photos";
import memoriesCaptions from "@/data/memoriesCaptions";

const photos = getMemoryPhotos();

// Bento span pattern repeats every 6 photos for any number of images.
function getSpan(index: number): string {
  const pattern: Record<number, string> = {
    0: "row-span-2",
    3: "col-span-2",
  };
  return pattern[index % 6] ?? "";
}

const BentoGrid = () => {
  if (photos.length === 0) {
    return (
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="tag">Memories</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
            Воспоминания
          </h2>
          <div className="divider mx-auto" />
        </motion.div>
        <p className="font-sans text-sm text-muted-foreground text-center">
          Воспоминания скоро появятся
        </p>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="tag">Memories</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
          Воспоминания
        </h2>
        <div className="divider mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
        {photos.map((photo, i) => {
          const label = memoriesCaptions[photo.filename];
          return (
            <motion.div
              key={photo.filename}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`photo-card relative group overflow-hidden cursor-pointer ${getSpan(i)}`}
            >
              <img
                src={photo.src}
                alt={label ?? `Воспоминание ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {label && (
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="font-sans text-xs text-white font-medium tracking-wider uppercase">
                    {label}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BentoGrid;
