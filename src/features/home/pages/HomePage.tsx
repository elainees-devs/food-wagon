import { Header } from "@/components/layout/Header";
import {
  FeaturedRestaurants,
  FlashDeals,
  Hero,
  HowItWorks,
  PopularItems,
} from "@/features/home/components";

export function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <FlashDeals />
      <FeaturedRestaurants />
      <PopularItems />
      <HowItWorks />
    </div>
  );
}