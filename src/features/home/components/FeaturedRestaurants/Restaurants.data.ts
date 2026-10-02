export interface FeaturedRestaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  rating: number;
  reviewCount: number;
  discountPercent: number;
  deliverySpeed: string;
  isOpen: boolean;
}

export const featuredRestaurants: FeaturedRestaurant[] = [
  {
    id: "urban-burger-co",
    name: "Urban Burger Co.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    reviewCount: 1842,
    discountPercent: 20,
    deliverySpeed: "Fast",
    isOpen: true,
  },
  {
    id: "saffron-bowl",
    name: "Saffron Bowl Kitchen",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
    reviewCount: 1326,
    discountPercent: 15,
    deliverySpeed: "15 min",
    isOpen: true,
  },
  {
    id: "harbor-sushi",
    name: "Harbor Sushi House",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    reviewCount: 2210,
    discountPercent: 25,
    deliverySpeed: "Fast",
    isOpen: false,
  },
  {
    id: "green-bloom-cafe",
    name: "Green Bloom Café",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=200&q=80",
    rating: 4.6,
    reviewCount: 966,
    discountPercent: 10,
    deliverySpeed: "20 min",
    isOpen: true,
  },
];
