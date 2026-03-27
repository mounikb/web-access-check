import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Shop: ["Keyboards", "Mice", "Controllers", "Accessories", "New Arrivals"],
  Support: ["Contact Us", "FAQ", "Shipping", "Returns", "Warranty"],
  Company: ["About", "Blog", "Careers", "Press"],
};

const FooterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand + Newsletter */}
          <div className="col-span-2">
            <span className="font-display text-xl font-bold text-foreground block mb-4">
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
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                Join
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 NEXGEAR. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Discord", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
