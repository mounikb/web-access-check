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
    <section id="categories" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-2 block">
            Browse
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl aspect-[16/10] ${cat.span}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={1200}
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {cat.count} →
                </p>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
