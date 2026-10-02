import { Star } from "lucide-react";



import { RestaurantBadge } from "./RestaurantBadge";
import { RestaurantStatus } from "./RestaurantStatus";
import type { FeaturedRestaurant } from "@/features/home/components/FeaturedRestaurants/Restaurants.data";

interface RestaurantCardProps {
  restaurant: FeaturedRestaurant;
}

const formatReviewCount = (count: number) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k`;
  }

  return `${count}`;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_12px_30px_rgba(17,24,39,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(17,24,39,0.12)]">
      <div className="relative overflow-hidden rounded-[1.75rem]">
        <img
          src={restaurant.image}
          alt={`${restaurant.name} restaurant dish`}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute left-3 top-3 flex items-center gap-2">
          <RestaurantBadge label={`${restaurant.discountPercent}% off`} tone="discount" />
          <RestaurantBadge label={restaurant.deliverySpeed} tone="speed" />
        </div>
      </div>

      <div className="flex items-start gap-3 px-4 pb-4 pt-4">
        <img
          src={restaurant.logo}
          alt={`${restaurant.name} logo`}
          className="h-11 w-11 shrink-0 rounded-2xl border border-border bg-background-muted object-cover"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold leading-6 text-text-primary">
            {restaurant.name}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-text-secondary">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
            <span className="font-medium text-text-primary">{restaurant.rating.toFixed(1)}</span>
            <span>({formatReviewCount(restaurant.reviewCount)} reviews)</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <RestaurantStatus isOpen={restaurant.isOpen} />
      </div>
    </article>
  );
}
