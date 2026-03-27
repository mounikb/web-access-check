import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Shop: ["Keyboards", "Mice", "Controllers", "Accessories", "New Arrivals"],
  Support: ["Contact Us", "FAQ", "Shipping", "Returns", "Warranty"],
  Company: ["About", "Blog", "Careers", "Press"],
};

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand + Newsletter */}
          <div className="col-span-2">
            <span className="font-display text-2xl font-bold text-foreground block mb-4">
              NEX<span className="text-gradient">GEAR</span>
            </span>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Premium gaming peripherals for those who refuse to compromise.
            </p>
            <div className="flex gap-2 max-w-sm">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-border/30 text-foreground placeholder:text-muted-foreground focus:border-primary/40"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 btn-glow btn-shine relative z-10">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-foreground mb-5 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2026 NEXGEAR. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Discord", "YouTube"].map((s) => (
              <motion.a
                key={s}
                href="#"
                whileHover={{ y: -2 }}
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {s}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
