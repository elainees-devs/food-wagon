import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { FoodCategory } from "./foodCategories.data";
import { FoodCategoryCard } from "./FoodCategoryCard";
import { FoodCategoryNavigation } from "./FoodCategoryNavigation";
import { FoodCategorySkeleton } from "./FoodCategorySkeleton";
import {
  FoodCategoryEmptyState,
  FoodCategoryErrorState,
} from "./FoodCategoryStates";
import { useFoodCategories } from "./useFoodCategories";

const SCROLL_TOLERANCE = 1;
const SKELETON_COUNT = 6;

const VIEW_ALL_CLASSES = [
  "hidden text-xs font-medium text-amber-500 transition-colors hover:text-amber-600 sm:block",
  "cursor-pointer rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2",
].join(" ");

function getScrollStep(track: HTMLElement) {
  const firstItem = track.firstElementChild as HTMLElement | null;

  if (!firstItem) {
    return track.clientWidth;
  }

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;

  return firstItem.offsetWidth + gap;
}

export function SearchByFood() {
  const navigate = useNavigate();
  const { categories, status, retry } = useFoodCategories();
  const trackRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const syncScrollState = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;

    setCanScrollPrev(track.scrollLeft > SCROLL_TOLERANCE);
    setCanScrollNext(track.scrollLeft < maxScroll - SCROLL_TOLERANCE);
  }, []);

  const handleScroll = useCallback(() => {
    if (frameRef.current !== null) {
      return;
    }

    if (typeof window.requestAnimationFrame !== "function") {
      syncScrollState();
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      syncScrollState();
    });
  }, [syncScrollState]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    syncScrollState();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(syncScrollState);
    observer.observe(track);

    return () => observer.disconnect();
  }, [categories, status, syncScrollState]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const step = getScrollStep(track);
    const cardsPerView = Math.max(1, Math.round(track.clientWidth / step));

    track.scrollBy({ left: direction * step * cardsPerView, behavior: "smooth" });
  }, []);

  const handleSelect = useCallback(
    (category: FoodCategory) => {
      navigate(`/foods?category=${encodeURIComponent(category.slug)}`);
    },
    [navigate]
  );

  const handleViewAll = useCallback(() => {
    navigate("/foods");
  }, [navigate]);

  const isLoading = status === "loading";

  return (
    <section
      aria-labelledby="search-by-food-heading"
      className="w-full bg-[#fffaf1] px-6 py-8 md:px-12 md:py-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-3">
          <h2
            id="search-by-food-heading"
            className="pl-4 text-xl font-bold tracking-tight text-gray-900 md:text-2xl"
          >
            Search by Food
          </h2>

          <div className="flex items-center gap-3">
            <button type="button" onClick={handleViewAll} className={VIEW_ALL_CLASSES}>
              View All
            </button>

            {status === "success" && categories.length > 0 && (
              <FoodCategoryNavigation
                canScrollPrev={canScrollPrev}
                canScrollNext={canScrollNext}
                onPrevious={() => scrollByPage(-1)}
                onNext={() => scrollByPage(1)}
              />
            )}
          </div>
        </div>

        {isLoading && (
          <ul
            className="no-scrollbar flex gap-6 overflow-x-auto pb-3 pl-2 md:gap-8"
            aria-busy="true"
            aria-label="Loading food categories"
          >
            {Array.from({ length: SKELETON_COUNT }, (_, index) => (
              <li key={index} className="flex flex-shrink-0">
                <FoodCategorySkeleton />
              </li>
            ))}
          </ul>
        )}

        {status === "error" && <FoodCategoryErrorState onRetry={retry} />}

        {status === "success" && categories.length === 0 && (
          <FoodCategoryEmptyState onViewAll={handleViewAll} />
        )}

        {status === "success" && categories.length > 0 && (
          <ul
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto overscroll-x-contain pb-3 pl-2 md:gap-8"
            aria-label="Food categories"
          >
            {categories.map((category) => (
              <li key={category.id} className="flex flex-shrink-0 pl-8">
                <FoodCategoryCard
                  category={category}
                  onSelect={handleSelect}
                />
              </li>
            ))}

            <li className="flex flex-shrink-0 items-center">
              <button
                type="button"
                onClick={handleViewAll}
                className="cursor-pointer rounded-sm text-xs font-medium text-amber-500 transition-colors hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:hidden"
              >
                View All
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
