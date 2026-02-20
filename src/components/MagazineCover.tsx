import { motion } from "framer-motion";
import { getCoverPhotos } from "@/utils/photos";
import magazineBg from "@/assets/magazine-bg.jpg";

const coverPhotos = getCoverPhotos();
const coverPhoto = coverPhotos[0];

const MagazineCover = () => (
  <section className="py-20 px-4 flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-primary/10"
      style={{ aspectRatio: "3/4" }}
    >
      {coverPhoto ? (
        <img
          src={coverPhoto.src}
          alt="Настя — обложка журнала"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <img src={magazineBg} alt="" className="w-full h-full object-cover" />
      )}

      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div>
          <p className="font-cursive text-4xl md:text-5xl text-foreground/80">Nastya</p>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-muted-foreground mt-1">
            Love Magazine · Vol. 20
          </p>
        </div>

        <div>
          <p className="font-serif text-2xl md:text-3xl font-medium text-foreground/80 leading-tight">
            20 ЛЕТ
          </p>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
            Style · Beauty · Grace
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default MagazineCover;
