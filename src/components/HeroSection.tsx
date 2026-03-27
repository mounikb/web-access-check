import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-keyboard.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-[120px] animate-float pointer-events-none" />

      {/* Light streaks */}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 right-[20%] w-px h-[40vh] bg-gradient-to-b from-primary/30 via-primary/5 to-transparent"
      />
      <motion.div
        style={{ opacity }}
        className="absolute top-[10%] right-[35%] w-px h-[25vh] bg-gradient-to-b from-primary/20 via-primary/3 to-transparent"
      />

      {/* Background image with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium mechanical keyboard with RGB lighting"
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="relative container mx-auto px-4 md:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-primary glass rounded-full mb-8">
                <Sparkles className="h-3 w-3" />
                New Collection 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.92] tracking-tight text-foreground mb-6"
            >
              Gear That
              <br />
              <span className="text-gradient">Defines</span> You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Premium peripherals crafted for those who demand precision, performance, and uncompromising quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 group btn-glow btn-shine relative z-10 transition-transform duration-300 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass text-foreground hover:bg-secondary/50 font-display font-semibold px-8 transition-transform duration-300 hover:scale-105"
              >
                Explore Gear
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex gap-10 mt-16 pt-8 border-t border-border/30"
            >
              {[
                { value: "50K+", label: "Happy Gamers" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "24h", label: "Fast Shipping" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating product image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 2, 0],
                rotateX: [0, -1, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                x: mousePos.x,
                y: mousePos.y,
              }}
              className="relative"
            >
              {/* Glow behind product */}
              <div className="absolute inset-0 -m-10 bg-primary/10 rounded-3xl blur-[60px]" />
              <div className="relative glass-strong rounded-2xl p-2 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Featured product"
                  className="w-full max-w-md rounded-xl object-cover aspect-square"
                  width={500}
                  height={500}
                />
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2"
                >
                  <span className="text-xs font-display font-bold text-primary">★ 4.9</span>
                  <span className="text-[10px] text-muted-foreground ml-1">Rating</span>
                </motion.div>
                {/* Floating price */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  className="absolute -bottom-3 -left-3 glass-strong rounded-xl px-4 py-2"
                >
                  <span className="text-xs font-display font-bold text-foreground">₹8,999</span>
                  <span className="text-[10px] text-muted-foreground ml-1 line-through">₹12,999</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
