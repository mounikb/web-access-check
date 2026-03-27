import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const announcements = [
  { text: "Free Shipping on orders over ₹2,999!", link: "#" },
  { text: "New Arrivals every week — Stay tuned!", link: "#new-stuff" },
  { text: "30-Day Easy Returns on all products", link: "#" },
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const prev = () => setCurrent((c) => (c === 0 ? announcements.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === announcements.length - 1 ? 0 : c + 1));

  return (
    <div className="relative bg-primary/10 border-b border-primary/20 py-2.5 px-4">
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="text-primary/60 hover:text-primary transition-colors p-0.5">
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <a
          href={announcements[current].link}
          className="text-[12px] font-semibold tracking-wide text-primary hover:text-primary/80 transition-colors text-center"
        >
          {announcements[current].text}
        </a>
        <button onClick={next} className="text-primary/60 hover:text-primary transition-colors p-0.5">
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
