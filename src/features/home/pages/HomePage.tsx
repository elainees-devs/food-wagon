import { Header } from "@/components/layout/Header";
import { BestDeals } from "@/features/home/BestDeals/BestDeals";
import {
  AppDownload,
  Benefits,
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
      <Benefits />
      <AppDownload />
      <BestDeals />
    </div>
  );
}
