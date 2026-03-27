const items = [
  "FREE SHIPPING OVER ₹2,999",
  "◆",
  "30-DAY RETURNS",
  "◆",
  "PREMIUM QUALITY",
  "◆",
  "1 YEAR WARRANTY",
  "◆",
  "24/7 SUPPORT",
  "◆",
];

const MarqueeBanner = () => {
  const content = items.join("   ");
  return (
    <div className="relative overflow-hidden py-3 border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="animate-marquee whitespace-nowrap flex relative">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="text-[11px] font-semibold tracking-[0.2em] text-primary/80 mx-4">
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
