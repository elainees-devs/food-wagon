

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
