import { FlashDealCard } from "./FlashDealCard";
import { flashDeals } from "./flashDeals.data";

export function FlashDeals() {
  return (
    <section aria-labelledby="flash-deals-heading" className="mt-12 p-4 md:px-24">
      <div className="mb-5">
        <h2
          id="flash-deals-heading"
          className="font-display text-2xl font-bold text-text-primary md:text-3xl"
        >
          Flash Deals
        </h2>
        <p className="mt-1 text-sm text-text-secondary">
          Limited-time discounts on your favourite meals
        </p>
      </div>

      <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
        {flashDeals.map((deal) => (
          <li
            key={deal.id}
            className="w-[70%] flex-none snap-start sm:w-[45%] lg:w-auto lg:flex-1"
          >
            <FlashDealCard deal={deal} />
          </li>
        ))}
      </ul>
    </section>
  );
}
