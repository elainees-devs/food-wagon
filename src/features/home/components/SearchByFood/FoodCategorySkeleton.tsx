export function FoodCategorySkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex w-28 min-w-[100px] flex-shrink-0 flex-col items-center gap-3"
    >
      <div className="h-24 w-24 animate-pulse rounded-full bg-gray-200 md:h-28 md:w-28" />
      <div className="h-3 w-16 animate-pulse rounded-full bg-gray-200" />
    </div>
  );
}
