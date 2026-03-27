import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingSection from "@/components/TrendingSection";
import BrandStory from "@/components/BrandStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import CartDrawer, { type CartItem } from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";
import CursorGlow from "@/components/CursorGlow";
import type { Product } from "@/lib/data";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i))
      );
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        cartCount={cartCount}
      />
      <HeroSection />
      <MarqueeBanner />
      <FeaturedProducts onAddToCart={addToCart} />
      <CategoriesSection />
      <WhyChooseUs />
      <TrendingSection onAddToCart={addToCart} />
      <BrandStory />
      <TestimonialsSection />
      <FooterSection />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default Index;
