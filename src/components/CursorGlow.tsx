import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-screen"
      animate={{
        x: pos.x - 200,
        y: pos.y - 200,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[80px]" />
    </motion.div>
  );
};

export default CursorGlow;
