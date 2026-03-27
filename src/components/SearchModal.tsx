import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal = ({ open, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filtered = query.length > 0
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-background/80 backdrop-blur-2xl flex items-start justify-center pt-[12vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl mx-4"
          >
            <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-background/80">
              <div className="flex items-center gap-3 px-5 border-b border-border/20">
                <Search className="h-5 w-5 text-primary/60 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent py-4 text-foreground placeholder:text-muted-foreground outline-none font-body text-sm"
                />
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-secondary/50">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {filtered.length > 0 && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {filtered.map((p) => (
                    <a
                      key={p.id}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <img src={p.image} alt={p.name} className="w-12 h-12 rounded-xl object-cover ring-1 ring-border/20" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{p.name}</p>
                        <p className="text-[11px] text-muted-foreground">{p.category}</p>
                      </div>
                      <span className="text-sm font-display font-bold text-foreground">₹{p.price.toLocaleString()}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              )}

              {query.length > 0 && filtered.length === 0 && (
                <div className="p-10 text-center">
                  <p className="text-sm text-muted-foreground">No products found for "{query}"</p>
                </div>
              )}

              {query.length === 0 && (
                <div className="p-6">
                  <p className="text-[11px] text-muted-foreground/60 mb-3 uppercase tracking-wider font-medium">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Keyboard", "Mouse", "Headset", "Keycaps", "Controller"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setQuery(t)}
                        className="px-4 py-2 text-xs font-medium text-muted-foreground glass rounded-full hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
