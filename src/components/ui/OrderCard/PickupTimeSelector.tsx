import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";

type PickupTimeType = "asap" | "scheduled";
type PickupDate = "today" | "tomorrow";

const PICKUP_TIMES: string[] = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
];

const TIME_OPTIONS: { id: PickupTimeType; label: string; hint?: string }[] = [
  {
    id: "asap",
    label: "As Soon As Possible",
    hint: "Ready in approximately 20–30 minutes",
  },
  { id: "scheduled", label: "Schedule for Later" },
];

const DATE_OPTIONS: { id: PickupDate; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "tomorrow", label: "Tomorrow" },
];

export function PickupTimeSelector() {
  const [pickupTimeType, setPickupTimeType] = useState<PickupTimeType>("asap");
  const [pickupDate, setPickupDate] = useState<PickupDate>("today");
  const [pickupTime, setPickupTime] = useState("");

  return (
    <fieldset className="mt-4 rounded-xl border border-border bg-background-muted p-4">
      <legend className="flex items-center gap-2 px-1 text-sm font-semibold text-text-primary">
        <Clock className="h-4 w-4 text-primary" strokeWidth={2} />
        Pickup Time
      </legend>

      <div className="space-y-2" role="radiogroup" aria-label="Pickup Time">
        {TIME_OPTIONS.map((option) => {
          const selected = pickupTimeType === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setPickupTimeType(option.id)}
              className={[
                "flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                selected
                  ? "border-primary bg-primary-light"
                  : "border-border bg-surface hover:bg-background-muted",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={[
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
                  selected ? "border-primary" : "border-text-muted",
                ].join(" ")}
              >
                {selected && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </span>
              <span className="min-w-0">
                <span
                  className={[
                    "block text-sm font-medium",
                    selected ? "text-primary" : "text-text-primary",
                  ].join(" ")}
                >
                  {option.label}
                </span>
                {option.hint && (
                  <span className="mt-0.5 block text-xs text-text-secondary">
                    {option.hint}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {pickupTimeType === "scheduled" && (
        <div className="mt-4 space-y-4 border-t border-border pt-4">
          <div>
            <span
              id="pickup-date-label"
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text-secondary"
            >
              Date
            </span>
            <div
              className="flex gap-2"
              role="radiogroup"
              aria-labelledby="pickup-date-label"
            >
              {DATE_OPTIONS.map((option) => {
                const selected = pickupDate === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setPickupDate(option.id)}
                    className={[
                      "flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      selected
                        ? "border-primary bg-primary-light text-primary"
                        : "border-border bg-surface text-text-secondary hover:bg-background-muted",
                    ].join(" ")}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="pickup-time"
              className="mb-2 block text-xs font-semibold uppercase tracking-wide text-text-secondary"
            >
              Time
            </label>
            <div className="relative">
              <select
                id="pickup-time"
                value={pickupTime}
                onChange={(event) => setPickupTime(event.target.value)}
                className={[
                  "w-full appearance-none rounded-lg border border-border bg-surface px-3 py-2.5 pr-10 text-sm text-text-primary",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                ].join(" ")}
              >
                <option value="">Select pickup time</option>
                {PICKUP_TIMES.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      )}
    </fieldset>
  );
}
