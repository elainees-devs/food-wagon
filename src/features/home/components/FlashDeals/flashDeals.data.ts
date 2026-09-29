import bestDeals from "@/assets/images/deals/best-deals.svg";
import friedChicken from "@/assets/images/deals/fried-chicken.svg";
import pizza from "@/assets/images/deals/pizza.svg";
import salad from "@/assets/images/deals/salad.svg";

export interface FlashDeal {
  id: string;
  name: string;
  image: string;
  discount: number;
  daysRemaining: number;
}

export const flashDeals: FlashDeal[] = [
  {
    id: "deal-kfc-bucket",
    name: "KFC Crispy Deal Bucket",
    image: friedChicken,
    discount: 35,
    daysRemaining: 2,
  },
  {
    id: "deal-pizza-party",
    name: "Pizza Party Bundle",
    image: pizza,
    discount: 20,
    daysRemaining: 1,
  },
  {
    id: "deal-garden-salad",
    name: "Garden Fresh Salad",
    image: salad,
    discount: 15,
    daysRemaining: 4,
  },
  {
    id: "deal-best-bites",
    name: "Best Bites Combo",
    image: bestDeals,
    discount: 50,
    daysRemaining: 1,
  },
];
