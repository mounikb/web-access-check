import { motion } from "framer-motion";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import productGlassPad from "@/assets/product-glass-pad.jpg";

const highlights = [
  {
    title: "Precision Mice",
    subtitle: "Ultralight & Wireless",
    image: heroBanner3,
    link: "#mice",
  },
  {
    title: "Wired Champions",
    subtitle: "The Kings of Low Latency",
    image: heroBanner2,
    link: "#mice",
  },
  {
    title: "Glass Mousepads",
    subtitle: "Smooth. Premium. Durable.",
    image: productGlassPad,
    link: "#mousepads",
  },
];

const CategoryHighlights = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-primary/20 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
