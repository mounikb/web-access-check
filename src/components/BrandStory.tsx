import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-6 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[0.95]">
              Built for Those
              <br />
              Who <span className="text-gradient">Never Settle</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          >
            We started NEXGEAR with a single belief — that every keystroke, every click, every game matters. Our mission is to craft peripherals that don't just perform, they inspire. No compromises, no shortcuts, just pure excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "2022", label: "Founded" },
              { value: "50K+", label: "Units Sold" },
              { value: "15+", label: "Countries" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
