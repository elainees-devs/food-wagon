import { Clock } from "lucide-react";

import type { FlashDeal } from "./flashDeals.data";

export interface FlashDealCardProps {
  deal: FlashDeal;
}

function getRemainingLabel(daysRemaining: number) {
  if (daysRemaining <= 0) {
    return "Deal ended";
  }

  if (daysRemaining === 1) {
    return "1 day left";
  }

  return `${daysRemaining} days left`;
}

export function FlashDealCard({ deal }: FlashDealCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-background-muted">
        <img
          src={deal.image}
          alt={deal.name}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-lg bg-primary px-2.5 py-1 text-xs font-semibold text-white">
          {deal.discount}% OFF
        </span>
      </div>

      <h3 className="mt-3 truncate text-sm font-semibold text-text-primary">
        {deal.name}
      </h3>

      <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary-light px-2.5 py-1 text-xs font-medium text-primary">
        <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        {getRemainingLabel(deal.daysRemaining)}
      </span>
    </article>
  );
}
