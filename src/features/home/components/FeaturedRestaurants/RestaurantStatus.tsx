interface RestaurantStatusProps {
  isOpen: boolean;
}

export function RestaurantStatus({ isOpen }: RestaurantStatusProps) {
  const text = isOpen ? "Open Now" : "Opens tomorrow";

  const classes = isOpen
    ? "bg-success/10 text-success ring-1 ring-success/20"
    : "bg-warning/10 text-warning ring-1 ring-warning/20";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-semibold ${classes}`}>
      {text}
    </span>
  );
}
