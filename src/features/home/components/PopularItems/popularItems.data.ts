import cheeseBurger from "@/assets/images/popular-items/cheese-burger.svg";
import crispySandwich from "@/assets/images/popular-items/crispy-sandwich.svg";
import dancake from "@/assets/images/popular-items/dancake.svg";
import thaiSoup from "@/assets/images/popular-items/thai-soup.svg";
import toffeeCake from "@/assets/images/popular-items/toffee-cake.svg";

export interface PopularItem {
  id: string;
  name: string;
  image: string;
  restaurant: string;
  price: number;
}

export const popularItems: PopularItem[] = [
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    image: cheeseBurger,
    restaurant: "Burger Arena",
    price: 3.88,
  },
  {
    id: "toffees-cake",
    name: "Toffee's Cake",
    image: toffeeCake,
    restaurant: "Top Sticks",
    price: 4.0,
  },
  {
    id: "dancake",
    name: "Dancake",
    image: dancake,
    restaurant: "Cake World",
    price: 1.99,
  },
  {
    id: "crispy-sandwich",
    name: "Crispy Sandwich",
    image: crispySandwich,
    restaurant: "Fastfood Dine",
    price: 3.0,
  },
  {
    id: "thai-soup",
    name: "Thai Soup",
    image: thaiSoup,
    restaurant: "Foody man",
    price: 2.79,
  },
];