import { MapPin } from "lucide-react";

import type { PopularItem } from "./popularItems.data";

export interface PopularItemCardProps {
  item: PopularItem;
}

const formatPrice = (price: number) => `Ksh ${price.toFixed(2)}`;

export function PopularItemCard({ item }: PopularItemCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-surface p-3 shadow-md shadow-secondary/5 transition-shadow duration-200 hover:shadow-lg hover:shadow-secondary/10">
      <div className="overflow-hidden rounded-2xl bg-background-muted">
        <img
          src={item.image}
          alt={`${item.name} from ${item.restaurant}`}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>

      <h3 className="mt-4 line-clamp-2 min-h-10 text-base font-semibold leading-5 text-text-primary">
        {item.name}
      </h3>

      <p className="mt-2 inline-flex w-fit items-center gap-1 text-sm text-text-secondary">
        <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
        <span className="truncate">{item.restaurant}</span>
      </p>

      <p className="mt-4 text-lg font-semibold text-text-primary">
        {formatPrice(item.price)}
      </p>

      <button
        type="button"
        className={[
          "mt-auto w-full cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white",
          "transition-colors duration-200",
          "hover:bg-primary-dark active:bg-primary-dark/90",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        ].join(" ")}
      >
        Order Now
      </button>
    </article>
  );
}