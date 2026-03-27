import { motion } from "framer-motion";
import { Shield, Zap, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Every product is rigorously tested to meet our uncompromising standards.",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    desc: "Engineered for competitive edge with pro-grade components.",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    desc: "Free shipping on orders over ₹2,999. Delivered in 24–48 hours.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our gear experts are always ready to help you level up.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3 block">
            The NEXGEAR Difference
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group text-center glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsl(45_100%_55%/0.15)] transition-all duration-500 mb-6">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
