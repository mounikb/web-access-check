import { motion } from "framer-motion";
import categoryKeyboards from "@/assets/category-keyboards.jpg";
import categoryMice from "@/assets/category-mice.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  { name: "Keyboards", count: "42 Products", image: categoryKeyboards, span: "md:col-span-2" },
  { name: "Mice", count: "28 Products", image: categoryMice, span: "" },
  { name: "Accessories", count: "65 Products", image: categoryAccessories, span: "md:col-span-3" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3 block">
            Browse
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl aspect-[16/10] ${cat.span}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={1200}
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {cat.count}
                  <motion.span
                    className="inline-block ml-1"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </p>
              </div>
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 group-hover:shadow-[inset_0_0_30px_hsl(45_100%_55%/0.05)] transition-all duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
