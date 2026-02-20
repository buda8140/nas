import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { getCarouselPhotos } from "@/utils/photos";
import captions from "@/data/captions";

const photos = getCarouselPhotos();

const PhotoCarousel = () => {
  const [selected, setSelected] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  if (photos.length === 0) {
    return (
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 px-4"
        >
          <span className="tag">Gallery</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
            Наши фотографии
          </h2>
          <div className="divider mx-auto" />
        </motion.div>
        <p className="font-sans text-sm text-muted-foreground mt-8">
          Фотографии скоро появятся
        </p>
      </section>
    );
  }

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 px-4"
      >
        <span className="tag">Gallery</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-5 mb-3">
          Наши фотографии
        </h2>
        <div className="divider mx-auto" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Предыдущее фото"
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:shadow-lg transition-all text-lg"
        >
          ‹
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Следующее фото"
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:shadow-lg transition-all text-lg"
        >
          ›
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {photos.map((photo, index) => {
              const isActive = index === selected;
              const caption = captions[photo.filename] ?? "";

              return (
                <div
                  key={photo.filename}
                  className="flex-shrink-0 w-[260px] md:w-[300px] transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.5,
                    transform: isActive ? "scale(1)" : "scale(0.9)",
                  }}
                >
                  <div className="photo-card">
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        src={photo.src}
                        alt={caption || `Фото ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {caption && (
                      <div className="p-4">
                        <p className="font-serif text-base text-foreground/80 italic mb-1">
                          {caption}
                        </p>
                        <p className="font-sans text-[10px] text-muted-foreground tracking-wider uppercase">
                          Photo {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Перейти к фото ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected ? "bg-primary w-6" : "bg-border w-1.5 hover:bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
