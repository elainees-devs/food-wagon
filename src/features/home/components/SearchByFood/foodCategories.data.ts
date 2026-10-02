import burger from "@/assets/images/foods/burger.svg";
import chowmein from "@/assets/images/foods/chowmein.svg";
import noodles from "@/assets/images/foods/noodles.svg";
import pizza from "@/assets/images/foods/pizza.svg";
import steak from "@/assets/images/foods/steak.svg";
import subSandwich from "@/assets/images/foods/sub-sandwich.svg";

export interface FoodCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export const foodCategories: FoodCategory[] = [
  {
    id: "food-category-pizza",
    name: "Pizza",
    slug: "pizza",
    image: pizza,
  },
  {
    id: "food-category-burger",
    name: "Burger",
    slug: "burger",
    image: burger,
  },
  {
    id: "food-category-noodles",
    name: "Noodles",
    slug: "noodles",
    image: noodles,
  },
  {
    id: "food-category-sub-sandwich",
    name: "Sub-sandwich",
    slug: "sub-sandwich",
    image: subSandwich,
  },
  {
    id: "food-category-chowmein",
    name: "Chowmein",
    slug: "chowmein",
    image: chowmein,
  },
  {
    id: "food-category-steak",
    name: "Steak",
    slug: "steak",
    image: steak,
  },
];
