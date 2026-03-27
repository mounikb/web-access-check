import { useState, useCallback } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductCarousel from "@/components/ProductCarousel";
import CTABanner from "@/components/CTABanner";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeaturedProduct from "@/components/FeaturedProduct";
import ServiceBanner from "@/components/ServiceBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import CartDrawer, { type CartItem } from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";
import RecentPurchase from "@/components/RecentPurchase";
import { newProducts, miceProducts, mousepadProducts, skatesProducts } from "@/lib/data";
import type { Product } from "@/lib/data";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

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
      <AnnouncementBar />
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        cartCount={cartCount}
      />
      <HeroCarousel />
      <MarqueeBanner />

      {/* New Stuff */}
      <ProductCarousel
        id="new-stuff"
        title="NEW STUFF 💯"
        products={newProducts}
        onAddToCart={addToCart}
        viewAllLink="#"
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Click Heads?"
        subtitle="Level up your game with premium peripherals."
        ctaText="Shop Now"
        ctaLink="#mice"
        image={heroBanner3}
      />

      {/* Fresh Gaming Mouse */}
      <ProductCarousel
        id="mice"
        title="Fresh Baked Gaming Mouse 🖱️"
        products={miceProducts}
        onAddToCart={addToCart}
        viewAllLink="#"
      />

      {/* Featured Product */}
      <FeaturedProduct onAddToCart={addToCart} />

      {/* Mousepad Heaven */}
      <ProductCarousel
        id="mousepads"
        title="MOUSEPAD HEAVEN 🏔️"
        products={mousepadProducts}
        onAddToCart={addToCart}
        viewAllLink="#"
      />

      {/* Category Highlights */}
      <CategoryHighlights />

      {/* Service Banner */}
      <ServiceBanner />

      {/* Mouse Skates */}
      <ProductCarousel
        id="skates"
        title="YUMMY MOUSE SKATES 🛹"
        products={skatesProducts}
        onAddToCart={addToCart}
        viewAllLink="#"
      />

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
      <RecentPurchase />
    </div>
  );
};

export default Index;
