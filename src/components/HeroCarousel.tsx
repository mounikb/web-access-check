import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import apexGlasspad from "@/assets/heroes/apex-glasspad.webp";
import asr68he from "@/assets/heroes/asr68he.webp";
import aulaH68xs from "@/assets/heroes/aula-h68xs.webp";
import mad60V2 from "@/assets/heroes/mad60-v2.webp";
import mchK7V2 from "@/assets/heroes/mch-k7-v2.webp";

const slides = [
  {
    src: apexGlasspad,
    alt: "Apex by Tekkusai limited-edition glass mousepad",
    href: "/collections/mousepads",
  },
  {
    src: asr68he,
    alt: "ASR68HE gaming keyboard",
    href: "/collections/keyboards",
  },
  {
    src: aulaH68xs,
    alt: "Aula H68XS gaming keyboard",
    href: "/products/aula-hero-68-he",
  },
  {
    src: mad60V2,
    alt: "MAD 60 HE V2 gaming keyboard",
    href: "/products/mad-60-he-flagship-v2",
  },
  {
    src: mchK7V2,
    alt: "MCHOSE K7 V2 gaming keyboard",
    href: "/collections/keyboards",
  },
] as const;

const AUTOPLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 45;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const isInteracting = isHovered || isFocusWithin || isTouching;

  const next = useCallback(() => {
    setCurrent((slide) => (slide + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((slide) => (slide - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (
      !isPlaying ||
      isInteracting ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(next, AUTOPLAY_DELAY);
    return () => window.clearInterval(interval);
  }, [isInteracting, isPlaying, next]);

  const handleTouchEnd = (endX: number) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 400);
    if (distance > 0) next();
    else prev();
  };

  return (
    <section
      aria-label="Featured products"
      aria-roledescription="carousel"
      className="group relative aspect-video w-full overflow-hidden bg-black touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
      }}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") prev();
        if (event.key === "ArrowRight") next();
      }}
      onTouchStart={(event) => {
        setIsTouching(true);
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchCancel={() => {
        setIsTouching(false);
        touchStartX.current = null;
      }}
      onTouchEnd={(event) => {
        setIsTouching(false);
        handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
      }}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <a
            key={slide.src}
            href={slide.href}
            aria-label={`${slide.alt}. View products.`}
            aria-hidden={index !== current}
            tabIndex={index === current ? 0 : -1}
            className="relative h-full w-full shrink-0"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              draggable={false}
              className="h-full w-full select-none object-cover"
            />
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous hero image"
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white opacity-100 backdrop-blur-sm transition hover:border-white/50 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-5 md:h-12 md:w-12 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next hero image"
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white opacity-100 backdrop-blur-sm transition hover:border-white/50 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-5 md:h-12 md:w-12 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1.5 backdrop-blur-sm md:bottom-5 md:gap-2 md:px-3 md:py-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show hero image ${index + 1} of ${slides.length}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:h-2 ${
              index === current ? "w-5 bg-white md:w-7" : "w-1.5 bg-white/45 hover:bg-white/75 md:w-2"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          setIsPlaying((playing) => !playing);
          setIsFocusWithin(false);
        }}
        aria-label={isPlaying ? "Pause hero slideshow" : "Play hero slideshow"}
        className="absolute bottom-1 right-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-5 md:right-5 md:h-9 md:w-9"
      >
        {isPlaying ? (
          <Pause className="h-3 w-3 fill-current md:h-4 md:w-4" aria-hidden="true" />
        ) : (
          <Play className="h-3 w-3 fill-current md:h-4 md:w-4" aria-hidden="true" />
        )}
      </button>

      <p className="sr-only" aria-live={isPlaying && !isInteracting ? "off" : "polite"}>
        Hero image {current + 1} of {slides.length}: {slides[current].alt}
      </p>
    </section>
  );
};

export default HeroCarousel;
