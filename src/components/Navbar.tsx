import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onCartOpen: () => void;
  onSearchOpen: () => void;
  cartCount: number;
}

const categories = [
  { label: "Home", href: "#" },
  { label: "Mousepads", href: "#mousepads" },
  { label: "Mice", href: "#mice" },
  { label: "Keyboards", href: "#new-stuff" },
  { label: "Mouse Feet", href: "#skates" },
  { label: "Grips", href: "#new-stuff" },
  { label: "Accessories", href: "#new-stuff" },
  { label: "Audio", href: "#new-stuff" },
  { label: "SALE!!!", href: "#new-stuff", highlight: true },
];

const Navbar = ({ onCartOpen, onSearchOpen, cartCount }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-background/50 border-b border-border/30"
            : "bg-card/80 backdrop-blur-md border-b border-border/20"
        }`}
      >
        {/* Main navbar row */}
        <div className="container mx-auto flex items-center justify-between h-16 md:h-[72px] px-4 md:px-8 gap-4">
          {/* Logo */}
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground group shrink-0">
            NEX<span className="text-gradient transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(45_100%_55%/0.5)]">GEAR</span>
          </a>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <button
              onClick={onSearchOpen}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">Search products...</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              className="md:hidden text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 hidden md:flex transition-all duration-300"
            >
              <User className="h-[18px] w-[18px]" />
            </Button>
            <span className="hidden md:inline text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Login
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              className="relative text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 ml-1"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>
            <span className="hidden md:inline text-sm text-muted-foreground ml-1">Cart</span>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Category nav row - desktop */}
        <div className="hidden md:block border-t border-border/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-1 h-11 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={cat.href}
                  className={`px-3.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-all duration-300 rounded-lg hover:bg-primary/10 ${
                    cat.highlight
                      ? "text-destructive font-bold hover:text-destructive"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-display text-xl font-bold text-foreground">
                NEX<span className="text-gradient">GEAR</span>
              </span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              {categories.map((cat, i) => (
                <motion.a
                  key={cat.label}
                  href={cat.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-display font-semibold py-3 px-4 rounded-xl transition-colors ${
                    cat.highlight
                      ? "text-destructive"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {cat.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
