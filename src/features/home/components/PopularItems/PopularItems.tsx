import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { PopularItemCard } from "./PopularItemCard";
import { popularItems } from "./popularItems.data";

const SCROLL_TOLERANCE = 1;
const VISIBLE_ITEM_COUNT = 5;

const NAV_BUTTON_CLASSES = [
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white",
  "shadow-lg shadow-primary/30 cursor-pointer",
  "transition-colors duration-200",
  "hover:bg-primary-dark active:bg-primary-dark/90",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:bg-primary disabled:opacity-50 disabled:shadow-none",
].join(" ");

function getScrollStep(track: HTMLElement) {
  const firstItem = track.firstElementChild as HTMLElement | null;

  if (!firstItem) {
    return track.clientWidth;
  }

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;

  return firstItem.offsetWidth + gap;
}

export function PopularItems() {
  const trackRef = useRef<HTMLUListElement>(null);
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

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    syncScrollState();

    const observer = new ResizeObserver(syncScrollState);
    observer.observe(track);

    return () => observer.disconnect();
  }, [syncScrollState]);

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const step = getScrollStep(track);
    const cardsPerView = Math.max(1, Math.round(track.clientWidth / step));

    track.scrollBy({ left: direction * step * cardsPerView, behavior: "smooth" });
  }, []);

  const showNavigation = popularItems.length > VISIBLE_ITEM_COUNT;

  return (
    <section
      aria-labelledby="popular-items-heading"
      className="bg-background px-4 py-16 md:px-24 md:py-24"
    >
      <h2
        id="popular-items-heading"
        className="text-center font-display text-2xl font-bold text-text-primary md:text-3xl"
      >
        Popular items
      </h2>

      <div className="relative mt-12 flex items-center gap-3">
        {showNavigation && (
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous popular items"
            className={`${NAV_BUTTON_CLASSES} lg:absolute lg:left-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2`}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </button>
        )}

        <ul
          ref={trackRef}
          onScroll={syncScrollState}
          className="no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 lg:gap-6"
        >
          {popularItems.map((item) => (
            <li
              key={item.id}
              className="w-[82%] flex-none snap-start sm:w-[46%] md:w-[31%] lg:w-[calc((100%_-_6rem)/5)]"
            >
              <PopularItemCard item={item} />
            </li>
          ))}
        </ul>

        {showNavigation && (
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!canScrollNext}
            aria-label="Next popular items"
            className={`${NAV_BUTTON_CLASSES} lg:absolute lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2`}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}