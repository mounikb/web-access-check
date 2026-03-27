import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onCartOpen: () => void;
  onSearchOpen: () => void;
  cartCount: number;
}

const navLinks = [
  { label: "Shop", href: "#featured" },
  { label: "Keyboards", href: "#categories" },
  { label: "Mice", href: "#categories" },
  { label: "Accessories", href: "#categories" },
  { label: "New Arrivals", href: "#trending" },
];

const Navbar = ({ onCartOpen, onSearchOpen, cartCount }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-strong shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground group">
            NEX<span className="text-gradient transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(45_100%_55%/0.5)]">GEAR</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 line-reveal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
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
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              className="relative text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
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
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-xl font-bold text-foreground">
                NEX<span className="text-gradient">GEAR</span>
              </span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
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
