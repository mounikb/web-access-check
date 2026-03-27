import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, type Product } from "@/lib/data";

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  return (
    <section id="featured" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-2 block">
              Curated Selection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Gear
            </h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors line-reveal hidden md:block">
            View All →
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
