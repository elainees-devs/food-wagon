import { useCallback, useEffect, useState } from "react";

import type { FoodCategory } from "./foodCategories.data";
import { fetchFoodCategories } from "./foodCategories.service";

export type FoodCategoriesStatus = "loading" | "success" | "error";

export interface UseFoodCategoriesResult {
  categories: FoodCategory[];
  status: FoodCategoriesStatus;
  retry: () => void;
}

export function useFoodCategories(): UseFoodCategoriesResult {
  const [categories, setCategories] = useState<FoodCategory[]>([]);
  const [status, setStatus] = useState<FoodCategoriesStatus>("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    fetchFoodCategories(controller.signal)
      .then((result) => {
        if (!active) {
          return;
        }

        setCategories(result);
        setStatus("success");
      })
      .catch(() => {
        if (!active || controller.signal.aborted) {
          return;
        }

        setCategories([]);
        setStatus("error");
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [attempt]);

  const retry = useCallback(() => {
    setCategories([]);
    setStatus("loading");
    setAttempt((current) => current + 1);
  }, []);

  return { categories, status, retry };
}
