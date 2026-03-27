const items = [
  "FREE SHIPPING OVER ₹2,999",
  "★",
  "30-DAY RETURNS",
  "★",
  "PREMIUM QUALITY",
  "★",
  "1 YEAR WARRANTY",
  "★",
  "24/7 SUPPORT",
  "★",
];

const MarqueeBanner = () => {
  const content = items.join("   ");
  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-xs font-semibold tracking-widest mx-4">{content}</span>
        <span className="text-xs font-semibold tracking-widest mx-4">{content}</span>
        <span className="text-xs font-semibold tracking-widest mx-4">{content}</span>
        <span className="text-xs font-semibold tracking-widest mx-4">{content}</span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
