import { type LucideIcon } from "lucide-react";

export interface AppDownloadBenefit {
  id: string;
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface AppDownloadBenefitsProps {
  benefits: AppDownloadBenefit[];
}

const ICON_TILE_CLASSES = [
  "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
  "bg-[#fff1e6] ring-1 ring-primary/15",
  "shadow-[0_14px_28px_-16px_rgba(31,41,55,0.45)]",
].join(" ");

export function AppDownloadBenefits({ benefits }: AppDownloadBenefitsProps) {
  return (
    <ul className="flex flex-wrap gap-6 md:gap-8">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <li key={benefit.id} className="flex items-center gap-3 md:gap-4">
            <span className={ICON_TILE_CLASSES}>
              <Icon
                className="h-7 w-7 text-primary"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-text-primary md:text-lg">
                {benefit.title}
              </h3>
              {benefit.description && (
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
