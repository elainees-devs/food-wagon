import { foodCategories } from "./foodCategories.data";
import type { FoodCategory } from "./foodCategories.data";

const CATEGORY_FETCH_DELAY_MS = 350;

function wait(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const timeoutId = setTimeout(resolve, ms);

    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeoutId);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  });
}

export async function fetchFoodCategories(
  signal?: AbortSignal
): Promise<FoodCategory[]> {
  await wait(CATEGORY_FETCH_DELAY_MS, signal);

  return foodCategories;
}
