import { ChevronRight } from "lucide-react";

import bestDealsImage from "@/assets/images/deals/best-deals.svg";

export function BestDeals() {
  return (
    <section
      aria-labelledby="best-deals-heading"
      className="bg-background px-4 py-16 md:px-24 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-32px_rgba(31,41,55,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr]">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2
                id="best-deals-heading"
                className="max-w-sm font-display text-3xl font-bold leading-tight text-text-primary md:text-4xl"
              >
                Best deals <span className="text-primary">Crispy Sandwiches</span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary md:text-base">
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>

              <button
                type="button"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF8A00] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 md:w-fit"
              >
                Proceed to order
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-[240px] md:min-h-[380px]">
              <img
                src={bestDealsImage}
                alt="Crispy sandwiches with fresh vegetables"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}