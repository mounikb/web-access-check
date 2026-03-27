import productMouse from "@/assets/product-mouse.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productHeadset from "@/assets/product-headset.jpg";
import productMousepad from "@/assets/product-mousepad.jpg";
import productController from "@/assets/product-controller.jpg";
import productCable from "@/assets/product-cable.jpg";
import productKeycaps from "@/assets/product-keycaps.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Phantom X Pro Mouse",
    price: 4999,
    originalPrice: 6499,
    image: productMouse,
    category: "Mice",
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Nexus 75 Mechanical",
    price: 8999,
    image: productKeyboard,
    category: "Keyboards",
    rating: 4.9,
    reviews: 189,
    isNew: true,
  },
  {
    id: "3",
    name: "Aura Studio Headset",
    price: 6499,
    originalPrice: 7999,
    image: productHeadset,
    category: "Audio",
    rating: 4.7,
    reviews: 312,
    badge: "Hot",
  },
  {
    id: "4",
    name: "Eclipse Desk Mat XL",
    price: 2499,
    image: productMousepad,
    category: "Accessories",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "5",
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
    id: "6",
    name: "Coil USB-C Cable",
    price: 1299,
    image: productCable,
    category: "Accessories",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "7",
    name: "Artisan Keycap Set",
    price: 3999,
    image: productKeycaps,
    category: "Keycaps",
    rating: 4.9,
    reviews: 67,
    isNew: true,
  },
  {
    id: "8",
    name: "Phantom Lite Mouse",
    price: 3499,
    image: productMouse,
    category: "Mice",
    rating: 4.6,
    reviews: 142,
  },
];

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
