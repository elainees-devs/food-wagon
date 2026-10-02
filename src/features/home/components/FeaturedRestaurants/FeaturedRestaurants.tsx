

import { ArrowRight } from "lucide-react";

import { featuredRestaurants } from "@/features/home/components/FeaturedRestaurants/Restaurants.data";
import { RestaurantCard } from "./RestaurantCard";

export function FeaturedRestaurants() {
  return (
    <section aria-labelledby="featured-restaurants-heading" className="bg-background-muted px-4 py-16 md:px-8 md:py-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Top picks
            </p>
            <h2
              id="featured-restaurants-heading"
              className="mt-2 font-display text-2xl font-bold text-text-primary md:text-3xl"
            >
              Featured Restaurants
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            View All
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
