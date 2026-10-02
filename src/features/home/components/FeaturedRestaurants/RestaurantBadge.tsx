interface RestaurantBadgeProps {
  label: string;
  tone?: "discount" | "speed";
}

export function RestaurantBadge({ label, tone = "discount" }: RestaurantBadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.02em] shadow-sm";

  const toneClasses =
    tone === "discount"
      ? "bg-primary text-white"
      : "bg-white/85 text-text-primary backdrop-blur-sm";

  return <span className={`${baseClasses} ${toneClasses}`}>{label}</span>;
}
