import { Search } from "lucide-react";

export interface FoodButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function FoodButton({ onClick, disabled, className }: FoodButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-5 py-2.5",
        "text-sm font-semibold text-white cursor-pointer",
        "transition-colors duration-200",
        "hover:bg-primary-dark active:bg-primary-dark/90",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary",
        className ?? "",
      ].join(" ")}
    >
      <Search className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden="true" />
      Find Food
    </button>
  );
}
