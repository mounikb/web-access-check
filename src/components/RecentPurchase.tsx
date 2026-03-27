import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import productMouse from "@/assets/product-mouse.jpg";
import productMousepad from "@/assets/product-mousepad.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";

const purchases = [
  { name: "Phantom X Pro Wireless Mouse", image: productMouse, time: "2 hours ago" },
  { name: "Eclipse Desk Mat XL", image: productMousepad, time: "5 hours ago" },
  { name: "Nexus 75 Mechanical Keyboard", image: productKeyboard, time: "1 day ago" },
];

const RecentPurchase = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimeout);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hideTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % purchases.length);
        setVisible(true);
      }, 8000);
    }, 5000);
    return () => clearTimeout(hideTimeout);
  }, [visible, current]);

  const purchase = purchases[current];
  const maskedName = "X" + "*".repeat(7);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 z-50 max-w-xs"
        >
          <div className="flex items-center gap-3 glass-strong rounded-xl p-3 pr-10 border border-border/30 shadow-xl">
            <img
              src={purchase.image}
              alt=""
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                {maskedName} just purchased
              </p>
              <p className="text-sm font-medium text-foreground truncate">
                {purchase.name}
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                {purchase.time}
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentPurchase;
