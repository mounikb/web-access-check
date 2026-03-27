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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          {(product.badge || product.isNew) && (
            <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary text-primary-foreground">
              {product.isNew ? "New" : product.badge}
            </span>
          )}

          {/* Discount badge */}
          {discount && (
            <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground">
              -{discount}%
            </span>
          )}

          {/* Quick add button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-display font-semibold text-sm text-foreground mb-2 truncate">
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
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
