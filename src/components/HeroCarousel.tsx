import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import { heroSlides } from "@/lib/data";

const bannerImages = [heroBanner1, heroBanner2, heroBanner3];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? heroSlides.length - 1 : c - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative w-full aspect-[21/9] md:aspect-[2.4/1] overflow-hidden bg-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={bannerImages[current]}
            alt={heroSlides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-lg"
              >
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 leading-[0.95]">
                  {heroSlides[current].title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  {heroSlides[current].subtitle}
                </p>
                <a
                  href={heroSlides[current].ctaLink}
                  className="inline-flex items-center px-7 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-xl btn-glow btn-shine relative z-10 transition-transform duration-300 hover:scale-105"
                >
                  {heroSlides[current].cta}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
