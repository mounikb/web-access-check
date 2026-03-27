import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data";

interface ProductCarouselProps {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  viewAllLink?: string;
}

const ProductCarousel = ({ id, title, subtitle, products, onAddToCart, viewAllLink }: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id={id} className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            {viewAllLink && (
              <a href={viewAllLink} className="text-sm text-primary hover:text-primary/80 transition-colors font-medium hidden md:block">
                View all
              </a>
            )}
            <div className="hidden md:flex gap-1.5">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="h-8 w-8 glass border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="h-8 w-8 glass border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-muted-foreground/60">
            {products.length} products
          </div>
          {viewAllLink && (
            <a href={viewAllLink} className="text-xs text-primary hover:text-primary/80 transition-colors font-medium md:hidden">
              View all →
            </a>
          )}
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
        >
          {products.map((product, i) => (
            <div key={product.id} className="min-w-[200px] md:min-w-[240px] lg:min-w-[260px] snap-start">
              <ProductCard product={product} index={i} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
