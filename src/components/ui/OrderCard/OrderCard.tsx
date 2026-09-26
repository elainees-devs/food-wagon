import { useState } from "react";
import {
  Bike,
  MapPin,
  ShoppingBag,
  Store,
  X,
  type LucideIcon,
} from "lucide-react";
import { PickupTimeSelector } from "./PickupTimeSelector";
import { FoodButton } from "@/components/ui/Button/FoodButton";

type TabId = "delivery" | "pickup";

interface Tab {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

const TABS: Tab[] = [
  { id: "delivery", label: "Delivery", icon: Bike },
  { id: "pickup", label: "Pickup", icon: ShoppingBag },
];

interface TabButtonProps {
  active: boolean;
  label: string;
  icon: LucideIcon;
  onSelect: () => void;
}

function TabButton({
  active,
  label,
  icon: Icon,
  onSelect,
}: TabButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={[
        "flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold",
        "transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        active
          ? "bg-primary-light text-primary"
          : "text-text-muted hover:bg-background-muted hover:text-text-secondary",
      ].join(" ")}
    >
      <Icon
        className={`h-5 w-5 ${
          active ? "text-primary" : "text-text-muted"
        }`}
        strokeWidth={2}
      />
      {label}
    </button>
  );
}

function DeliveryAddress() {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl bg-background-muted px-4 py-3.5 text-left transition-colors duration-200 hover:bg-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <MapPin className="h-5 w-5 shrink-0 text-primary" />
      <span className="truncate text-sm text-text-muted">
        Enter Your Address
      </span>
    </button>
  );
}

function PickupLocation() {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl bg-background-muted px-4 py-3.5 text-left transition-colors duration-200 hover:bg-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <Store className="h-5 w-5 shrink-0 text-primary" />
      <span className="truncate text-sm text-text-muted">
        Select Pickup Location
      </span>
    </button>
  );
}

export function OrderCard() {
  const [activeTab, setActiveTab] = useState<TabId>("delivery");
  const [pickupOpen, setPickupOpen] = useState(false);

  const handleTabSelect = (tabId: TabId) => {
    setActiveTab(tabId);

    if (tabId === "pickup") {
      setPickupOpen(true);
    } else {
      setPickupOpen(false);
    }
  };

  return (
    <div className="flex w-full items-center rounded-2xl border-t-4 border-primary bg-surface shadow-md">
      
      {/* Left section */}
      <div className="flex-1 p-4">
        <div className="flex items-center gap-2">
          <div
            role="tablist"
            aria-label="Order type"
            className="flex flex-1 gap-2"
          >
            {TABS.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                icon={tab.icon}
                onSelect={() => handleTabSelect(tab.id)}
              />
            ))}
          </div>

          {/* Close Pickup */}
          {activeTab === "pickup" && pickupOpen && (
            <button
              type="button"
              onClick={() => setPickupOpen(false)}
              aria-label="Close pickup options"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-background-muted hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div
          role="tabpanel"
          aria-label={activeTab === "delivery" ? "Delivery" : "Pickup"}
          className="mt-4"
        >
          {activeTab === "delivery" ? (
            <DeliveryAddress />
          ) : (
            pickupOpen && (
              <div className="max-h-[200px] overflow-y-auto pr-1.5 scrollbar-subtle sm:max-h-[240px]">
                <div className="space-y-3">
                  <PickupLocation />
                  <PickupTimeSelector />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Food button */}
      <div className="flex w-1/4 justify-end p-4">
        <FoodButton />
      </div>
    </div>
  );
}