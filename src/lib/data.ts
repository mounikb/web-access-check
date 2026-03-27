import productMouse from "@/assets/product-mouse.jpg";
import productMouse2 from "@/assets/product-mouse-2.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productHeadset from "@/assets/product-headset.jpg";
import productMousepad from "@/assets/product-mousepad.jpg";
import productMousepad2 from "@/assets/product-mousepad-2.jpg";
import productGlassPad from "@/assets/product-glass-pad.jpg";
import productController from "@/assets/product-controller.jpg";
import productCable from "@/assets/product-cable.jpg";
import productKeycaps from "@/assets/product-keycaps.jpg";
import productMouseSkates from "@/assets/product-mouse-skates.jpg";
import productGripTape from "@/assets/product-grip-tape.jpg";
import productIem from "@/assets/product-iem.jpg";
import productMonitorArm from "@/assets/product-monitor-arm.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

// New Stuff
export const newProducts: Product[] = [
  {
    id: "n1",
    name: "Phantom X Pro Wireless Gaming Mouse",
    price: 4999,
    originalPrice: 6499,
    image: productMouse,
    hoverImage: productMouse2,
    category: "Mice",
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
  },
  {
    id: "n2",
    name: "Nexus 75 Mechanical Keyboard",
    price: 8999,
    image: productKeyboard,
    category: "Keyboards",
    rating: 4.9,
    reviews: 189,
    isNew: true,
  },
  {
    id: "n3",
    name: "Aura Studio Gaming IEM",
    price: 2390,
    originalPrice: 2990,
    image: productIem,
    hoverImage: productHeadset,
    category: "Audio",
    rating: 4.7,
    reviews: 312,
    isNew: true,
  },
  {
    id: "n4",
    name: "Eclipse Desk Mat XL",
    price: 2499,
    image: productMousepad,
    hoverImage: productMousepad2,
    category: "Mousepads",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "n5",
    name: "Polarity Glass Mousepad",
    price: 3899,
    image: productGlassPad,
    category: "Mousepads",
    rating: 4.9,
    reviews: 88,
    isNew: true,
  },
  {
    id: "n6",
    name: "Titan Pro Controller",
    price: 5499,
    originalPrice: 6999,
    image: productController,
    category: "Controllers",
    rating: 4.8,
    reviews: 278,
    badge: "Sale",
  },
  {
    id: "n7",
    name: "Artisan Keycap Set PBT",
    price: 3999,
    image: productKeycaps,
    category: "Keycaps",
    rating: 4.9,
    reviews: 67,
    isNew: true,
  },
  {
    id: "n8",
    name: "Monitor Arm Pro Mount",
    price: 3499,
    image: productMonitorArm,
    category: "Accessories",
    rating: 4.5,
    reviews: 45,
  },
  {
    id: "n9",
    name: "Coil USB-C Cable",
    price: 1299,
    image: productCable,
    category: "Accessories",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "n10",
    name: "Grip Tape Universal Set",
    price: 899,
    image: productGripTape,
    category: "Grips",
    rating: 4.4,
    reviews: 120,
  },
];

// Mice
export const miceProducts: Product[] = [
  {
    id: "m1",
    name: "Phantom X Pro Wireless Gaming Mouse",
    price: 4999,
    originalPrice: 6499,
    image: productMouse,
    hoverImage: productMouse2,
    category: "Mice",
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
  },
  {
    id: "m2",
    name: "Blazing Sky Zero Wireless Mouse",
    price: 3590,
    image: productMouse2,
    hoverImage: productMouse,
    category: "Mice",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: "m3",
    name: "Dragonfly Y9 Wireless Gaming Mouse",
    price: 2690,
    originalPrice: 3390,
    image: productGripTape,
    hoverImage: productMouse,
    category: "Mice",
    rating: 4.6,
    reviews: 142,
  },
  {
    id: "m4",
    name: "Phantom Lite Wired Mouse",
    price: 2200,
    originalPrice: 3990,
    image: productMouse,
    hoverImage: productMouse2,
    category: "Mice",
    rating: 4.5,
    reviews: 98,
    badge: "Sale",
  },
  {
    id: "m5",
    name: "Carbon Fiber 8K Wireless Mouse",
    price: 5990,
    image: productMouse2,
    hoverImage: productMouse,
    category: "Mice",
    rating: 4.9,
    reviews: 67,
    isNew: true,
  },
  {
    id: "m6",
    name: "Ghost Hollow Carbon Mouse",
    price: 3590,
    originalPrice: 4290,
    image: productMouse,
    hoverImage: productMouse2,
    category: "Mice",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: "m7",
    name: "F1 V2 Series Wireless Mouse",
    price: 2200,
    originalPrice: 3990,
    image: productMouse2,
    hoverImage: productGripTape,
    category: "Mice",
    rating: 4.4,
    reviews: 210,
    badge: "Sale",
  },
  {
    id: "m8",
    name: "IPI Fly 8K Wireless Mouse",
    price: 3090,
    image: productMouse,
    hoverImage: productMouse2,
    category: "Mice",
    rating: 4.7,
    reviews: 78,
  },
];

// Mousepads
export const mousepadProducts: Product[] = [
  {
    id: "p1",
    name: "Polarity Glass Mousepad",
    price: 3899,
    image: productGlassPad,
    hoverImage: productMousepad,
    category: "Mousepads",
    rating: 4.9,
    reviews: 88,
    isNew: true,
  },
  {
    id: "p2",
    name: "Superglide Glass Mousepad V3",
    price: 3880,
    originalPrice: 4290,
    image: productGlassPad,
    hoverImage: productMousepad2,
    category: "Mousepads",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: "p3",
    name: "Eclipse Desk Mat XL Cloth",
    price: 2499,
    image: productMousepad,
    hoverImage: productMousepad2,
    category: "Mousepads",
    rating: 4.6,
    reviews: 234,
  },
  {
    id: "p4",
    name: "Flow Cloth Mousepad",
    price: 1690,
    image: productMousepad2,
    hoverImage: productMousepad,
    category: "Mousepads",
    rating: 4.5,
    reviews: 189,
  },
  {
    id: "p5",
    name: "Tempered Glass Pad - Crimson",
    price: 1990,
    image: productGlassPad,
    category: "Mousepads",
    rating: 4.7,
    reviews: 67,
    badge: "Limited",
  },
  {
    id: "p6",
    name: "Nana Balance Gaming Pad",
    price: 890,
    image: productMousepad,
    hoverImage: productMousepad2,
    category: "Mousepads",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: "p7",
    name: "Sayo Glass Mousepad",
    price: 2890,
    image: productGlassPad,
    hoverImage: productMousepad,
    category: "Mousepads",
    rating: 4.8,
    reviews: 45,
    isSoldOut: true,
  },
  {
    id: "p8",
    name: "Micro-Etched Glass Pad",
    price: 1490,
    image: productGlassPad,
    hoverImage: productMousepad2,
    category: "Mousepads",
    rating: 4.6,
    reviews: 112,
  },
];

// Mouse Skates
export const skatesProducts: Product[] = [
  {
    id: "s1",
    name: "PTFE Mouse Skates Universal Dots",
    price: 200,
    image: productMouseSkates,
    category: "Mouse Feet",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: "s2",
    name: "Fox Gaze Mouse Skates Universal",
    price: 1190,
    image: productMouseSkates,
    category: "Mouse Feet",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: "s3",
    name: "Titanium U9 Premium Skates",
    price: 500,
    image: productMouseSkates,
    category: "Mouse Feet",
    rating: 4.7,
    reviews: 67,
    isSoldOut: true,
  },
  {
    id: "s4",
    name: "IRIS Custom Mouse Skates",
    price: 430,
    image: productMouseSkates,
    category: "Mouse Feet",
    rating: 4.6,
    reviews: 34,
  },
];

// All products combined for search
export const products: Product[] = [...newProducts, ...miceProducts, ...mousepadProducts, ...skatesProducts];

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  tag: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex R.",
    avatar: "AR",
    text: "The Nexus 75 completely changed my typing experience. The build quality is insane for the price.",
    rating: 5,
    tag: "Verified Buyer",
  },
  {
    id: "2",
    name: "Priya M.",
    avatar: "PM",
    text: "Fast shipping, premium packaging. The Phantom X Pro is the best mouse I've ever used.",
    rating: 5,
    tag: "Top Reviewer",
  },
  {
    id: "3",
    name: "Jordan K.",
    avatar: "JK",
    text: "Customer support went above and beyond. Will definitely be buying more from NEXGEAR.",
    rating: 4,
    tag: "Verified Buyer",
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "New Collection 2026",
    subtitle: "Premium Gaming Peripherals",
    cta: "Shop Now",
    ctaLink: "#new-stuff",
  },
  {
    id: 2,
    title: "Mousepad Heaven",
    subtitle: "Glass, Cloth & More",
    cta: "Explore Pads",
    ctaLink: "#mousepads",
  },
  {
    id: 3,
    title: "Fresh Gaming Mice",
    subtitle: "Ultralight. Wireless. 8K Polling.",
    cta: "Shop Mice",
    ctaLink: "#mice",
  },
];
