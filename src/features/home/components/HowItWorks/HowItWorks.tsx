import {
  ClipboardList,
  MapPin,
  Receipt,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { HowItWorksStep } from "./HowItWorksStep";

interface HowItWorksEntry {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: HowItWorksEntry[] = [
  {
    id: "select-location",
    icon: MapPin,
    title: "Select location",
    description: "Choose the location where your food will be delivered.",
  },
  {
    id: "choose-order",
    icon: ClipboardList,
    title: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food",
  },
  {
    id: "pay-advanced",
    icon: Receipt,
    title: "Pay advanced",
    description:
      "It's quick, safe, and simple. Select several methods of payment",
  },
  {
    id: "enjoy-meals",
    icon: UtensilsCrossed,
    title: "Enjoy meals",
    description: "Food is made and delivered directly to your home.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-[linear-gradient(90deg,#FFCE67_0%,#FDEDCA_100%)] px-4 py-16 md:px-24 md:py-24"
    >
      <h2
        id="how-it-works-heading"
        className="text-center font-display text-2xl font-bold text-primary-dark md:text-3xl"
      >
        How does it work
      </h2>

      <ol className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <HowItWorksStep
            key={step.id}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </ol>
    </section>
  );
}
