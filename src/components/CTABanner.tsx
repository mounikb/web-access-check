import { motion } from "framer-motion";
import heroImage from "@/assets/hero-banner-1.jpg";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const CTABanner = ({ title, subtitle, ctaText, ctaLink, image }: CTABannerProps) => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img
            src={image || heroImage}
            alt={title}
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-14 max-w-lg">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                {title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                {subtitle}
              </p>
              <a
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-xl btn-glow btn-shine relative z-10 transition-transform duration-300 hover:scale-105"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
