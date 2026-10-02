import type { FoodCategory } from "./foodCategories.data";

export interface FoodCategoryCardProps {
  category: FoodCategory;
  onSelect: (category: FoodCategory) => void;
}

export function FoodCategoryCard({
  category,
  onSelect,
}: FoodCategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      aria-label={`Browse ${category.name}`}
      className="group flex w-28 min-w-[100px] flex-shrink-0 cursor-pointer flex-col items-center gap-3 rounded-xl text-center focus:outline-none"
    >
      <span className="block h-24 w-24 overflow-hidden rounded-full border-2 border-transparent transition-all duration-200 group-hover:scale-105 group-hover:border-amber-400 group-focus-visible:ring-2 group-focus-visible:ring-amber-400 group-focus-visible:ring-offset-2 md:h-28 md:w-28">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </span>

      <span className="break-words text-xs font-semibold text-gray-800 transition-colors group-hover:text-amber-500 md:text-sm">
        {category.name}
      </span>
    </button>
  );
}
