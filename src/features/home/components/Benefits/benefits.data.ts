import { BadgePercent, Bike, MapPinned, type LucideIcon } from "lucide-react";

export interface Benefit {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: "daily-discounts",
    icon: BadgePercent,
    title: "Daily Discounts",
    description:
      "Grab fresh deals and special offers on your order, every single day.",
  },
  {
    id: "live-tracing",
    icon: MapPinned,
    title: "Live Tracing",
    description:
      "Follow your rider's journey in real time, from our kitchen to your door.",
  },
  {
    id: "quick-delivery",
    icon: Bike,
    title: "Quick Delivery",
    description:
      "Get the meals you love delivered fast, right when you are hungry.",
  },
];