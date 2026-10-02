import { Header } from "@/components/layout/Header";
import {
  FeaturedRestaurants,
  FlashDeals,
  Hero,
  HowItWorks,
  PopularItems,
  SearchByFood,
} from "@/features/home/components";

export function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <FlashDeals />
      <FeaturedRestaurants />
      <SearchByFood />
      <PopularItems />
      <HowItWorks />
    </div>
  );
}