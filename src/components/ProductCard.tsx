import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, index, onAddToCart }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass border border-border/30 hover:border-primary/40 transition-all duration-500 hover-lift">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        </div>

        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badges */}
          {(product.badge || product.isNew) && (
            <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {product.isNew ? "New" : product.badge}
            </span>
          )}

          {discount && (
            <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-destructive/90 text-destructive-foreground backdrop-blur-sm">
              -{discount}%
            </span>
          )}

          {/* Quick add */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="w-full glass-strong text-foreground hover:bg-primary hover:text-primary-foreground font-medium text-xs transition-all duration-300 btn-shine"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 relative z-10">
          <p className="text-[10px] text-primary/70 uppercase tracking-widest mb-1 font-medium">
            {product.category}
          </p>
          <h3 className="font-display font-semibold text-sm text-foreground mb-2.5 truncate group-hover:text-primary/90 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-[11px] text-primary font-medium">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
