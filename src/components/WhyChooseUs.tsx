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
    <section className="py-24 md:py-32 border-t border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-2 block">
            The NEXGEAR Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary border border-border group-hover:border-primary/30 group-hover:glow-border transition-all duration-500 mb-5">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
