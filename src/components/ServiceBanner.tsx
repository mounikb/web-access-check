import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";

const ServiceBanner = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 glass rounded-2xl p-6 md:p-10 border border-border/20 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Wrench className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">Repair Service</span>
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2">
              Have issues with your mouse?
            </h2>
            <p className="text-lg font-display font-bold text-primary mb-3">
              WE CAN FIX THAT!
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Fix your double click issues, scroll wheel issues and more! Expert repairs with genuine parts.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-xl btn-glow btn-shine relative z-10 transition-transform duration-300 hover:scale-105"
            >
              Check it!
            </a>
          </div>

          <div className="w-full md:w-80 h-48 md:h-64 rounded-xl overflow-hidden shrink-0">
            <img
              src={heroBanner1}
              alt="Mouse repair service"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBanner;
