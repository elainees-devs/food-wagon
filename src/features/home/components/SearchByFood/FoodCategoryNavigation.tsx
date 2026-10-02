import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FoodCategoryNavigationProps {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const NAV_BUTTON_CLASSES = [
  "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-amber-400 text-white shadow-md",
  "transition-all hover:bg-amber-500 hover:shadow-lg",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-400",
].join(" ");

export function FoodCategoryNavigation({
  canScrollPrev,
  canScrollNext,
  onPrevious,
  onNext,
}: FoodCategoryNavigationProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canScrollPrev}
        aria-label="Previous food categories"
        className={NAV_BUTTON_CLASSES}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next food categories"
        className={NAV_BUTTON_CLASSES}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
}
