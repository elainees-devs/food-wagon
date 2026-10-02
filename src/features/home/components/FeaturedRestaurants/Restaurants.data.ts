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
  {
    id: "sunset-noodle-house",
    name: "Sunset Noodle House",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1525351481790-6d7bb32f2f79?auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    reviewCount: 1735,
    discountPercent: 18,
    deliverySpeed: "13 min",
    isOpen: true,
  },
  {
    id: "basil-brick",
    name: "Basil & Brick",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
    reviewCount: 1489,
    discountPercent: 12,
    deliverySpeed: "25 min",
    isOpen: true,
  },
  {
    id: "crimson-ember-grill",
    name: "Crimson Ember Grill",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    reviewCount: 2450,
    discountPercent: 30,
    deliverySpeed: "Fast",
    isOpen: true,
  },
  {
    id: "citrus-lane-bistro",
    name: "Citrus Lane Bistro",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    logo:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=200&q=80",
    rating: 4.5,
    reviewCount: 824,
    discountPercent: 14,
    deliverySpeed: "18 min",
    isOpen: false,
  },
];
