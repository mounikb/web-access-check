import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products, type Product } from "@/lib/data";

interface TrendingSectionProps {
  onAddToCart: (product: Product) => void;
}

const TrendingSection = ({ onAddToCart }: TrendingSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const trending = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 6);

  return (
    <section id="trending" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-2 block">
              What's Hot
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Trending Now
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="border-border hover:border-primary/30">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="border-border hover:border-primary/30">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {trending.map((product, i) => (
            <div key={product.id} className="min-w-[260px] md:min-w-[280px] snap-start">
              <ProductCard product={product} index={i} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
