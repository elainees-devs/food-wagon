import type { LucideIcon } from "lucide-react";

export interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ICON_TILE_CLASSES = [
  "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl",
  "bg-[#FFF6E8] ring-1 ring-primary/15",
  "shadow-[0_14px_28px_-16px_rgba(31,41,55,0.45)]",
].join(" ");

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-4 md:gap-5">
      <span className={ICON_TILE_CLASSES}>
        <Icon
          className="h-8 w-8 text-[#FFB52E]"
          strokeWidth={2}
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-[#FFD166]"
        />
      </span>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold text-[#FF6B00] md:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}