import { useState } from "react";
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
  const [hovered, setHovered] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border/20 hover:border-primary/30 transition-all duration-500 hover-lift">
        {/* Image with swap on hover */}
        <div className="relative aspect-square overflow-hidden bg-secondary/10">
          <img
            src={hovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          {/* Sold out overlay */}
          {product.isSoldOut && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground rounded-full">
                Sold Out
              </span>
            </div>
          )}

          {/* Badges */}
          {(product.badge || product.isNew) && !product.isSoldOut && (
            <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {product.isNew ? "New" : product.badge}
            </span>
          )}

          {discount && !product.isSoldOut && (
            <span className="absolute top-2.5 right-2.5 px-2 py-1 text-[10px] font-bold rounded-full bg-destructive/90 text-destructive-foreground backdrop-blur-sm">
              -{discount}%
            </span>
          )}

          {/* Quick add overlay */}
          {!product.isSoldOut && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
              <Button
                size="sm"
                onClick={() => onAddToCart(product)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs transition-all duration-300"
              >
                <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
                Add to Cart
              </Button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3.5">
          <h3 className="font-body text-sm text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary/90 transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-foreground text-sm">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-[11px] text-muted-foreground">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
