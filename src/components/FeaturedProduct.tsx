import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import productMouse2 from "@/assets/product-mouse-2.jpg";
import productMouse from "@/assets/product-mouse.jpg";
import productGripTape from "@/assets/product-grip-tape.jpg";
import type { Product } from "@/lib/data";

const images = [productMouse2, productMouse, productGripTape];

const featuredProduct: Product = {
  id: "featured-1",
  name: "Carbon Fiber 8K Wireless Gaming Mouse",
  price: 5990,
  category: "Mice",
  rating: 4.9,
  reviews: 67,
  isNew: true,
  image: productMouse2,
};

interface FeaturedProductProps {
  onAddToCart: (product: Product) => void;
}

const FeaturedProduct = ({ onAddToCart }: FeaturedProductProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start glass rounded-2xl p-4 md:p-8 border border-border/20"
        >
          {/* Image gallery */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary/10 mb-3">
              <img
                src={images[selectedImage]}
                alt={featuredProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    i === selectedImage ? "border-primary" : "border-border/30 hover:border-primary/40"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
              {featuredProduct.name}
            </h2>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-foreground">
                ₹{featuredProduct.price.toLocaleString()}
              </span>
            </div>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Color: <span className="text-foreground">{selectedColor}</span></p>
              <div className="flex gap-2">
                {["Black", "White"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                      selectedColor === color
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border/30 text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Quantity</p>
              <div className="inline-flex items-center gap-3 glass rounded-xl px-1 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-foreground w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={() => onAddToCart(featuredProduct)}
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-10 py-6 text-base btn-glow btn-shine relative z-10 transition-transform duration-300 hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
