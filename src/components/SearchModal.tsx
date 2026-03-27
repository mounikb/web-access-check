import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
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
          className="fixed inset-0 z-[70] bg-background/80 backdrop-blur-xl flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 px-5 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent py-4 text-foreground placeholder:text-muted-foreground outline-none font-body text-sm"
                />
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {filtered.length > 0 && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {filtered.map((p) => (
                    <a
                      key={p.id}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.category}</p>
                      </div>
                      <span className="text-sm font-display font-semibold text-foreground">₹{p.price.toLocaleString()}</span>
                    </a>
                  ))}
                </div>
              )}

              {query.length > 0 && filtered.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-sm text-muted-foreground">No products found for "{query}"</p>
                </div>
              )}

              {query.length === 0 && (
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-3">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {["Keyboard", "Mouse", "Headset", "Keycaps"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setQuery(t)}
                        className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary rounded-full hover:text-foreground transition-colors"
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
