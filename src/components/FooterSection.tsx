import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Shop: ["Mice", "Mousepads", "Keyboards", "Mouse Feet", "Grips", "Accessories"],
  Support: ["Contact Us", "FAQ", "Shipping", "Returns", "Warranty"],
  Company: ["About", "Blog", "Careers", "Reviews"],
};

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-transparent" />

      {/* Newsletter */}
      <div className="container mx-auto px-4 md:px-8 py-10 relative border-b border-border/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Subscribe Newsletter</h3>
            <p className="text-sm text-muted-foreground">Sign up for our newsletter and stay up to date.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto md:min-w-[360px]">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass border-border/30 text-foreground placeholder:text-muted-foreground focus:border-primary/40"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 btn-glow btn-shine relative z-10 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <span className="font-display text-2xl font-bold text-foreground block mb-4">
              NEX<span className="text-gradient">GEAR</span>
            </span>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Your one-stop shop for premium gaming peripherals. Quality gear for competitive gamers.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
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

        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
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
