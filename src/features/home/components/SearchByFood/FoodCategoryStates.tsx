import { AlertCircle, UtensilsCrossed } from "lucide-react";

export interface FoodCategoryEmptyStateProps {
  onViewAll: () => void;
}

export function FoodCategoryEmptyState({
  onViewAll,
}: FoodCategoryEmptyStateProps) {
  return (
    <div
      role="status"
      className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white/60 px-6 py-10 text-center"
    >
      <UtensilsCrossed
        className="h-8 w-8 text-amber-400"
        strokeWidth={2}
        aria-hidden="true"
      />
      <p className="text-sm font-semibold text-gray-900">
        No food categories yet
      </p>
      <p className="max-w-sm text-sm text-gray-600">
        We could not find any categories to show. Browse the full menu in the
        meantime.
      </p>
      <button
        type="button"
        onClick={onViewAll}
        className="mt-1 cursor-pointer rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
      >
        Browse all food
      </button>
    </div>
  );
}

export interface FoodCategoryErrorStateProps {
  onRetry: () => void;
}

export function FoodCategoryErrorState({ onRetry }: FoodCategoryErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-red-200 bg-red-50/60 px-6 py-10 text-center"
    >
      <AlertCircle className="h-8 w-8 text-red-500" strokeWidth={2} aria-hidden="true" />
      <p className="text-sm font-semibold text-gray-900">
        We could not load food categories
      </p>
      <p className="max-w-sm text-sm text-gray-600">
        Something went wrong on our end. Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-1 cursor-pointer rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
