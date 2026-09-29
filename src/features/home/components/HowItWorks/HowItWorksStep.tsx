import type { LucideIcon } from "lucide-react";

export interface HowItWorksStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HowItWorksStep({
  icon: Icon,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <li className="flex flex-col items-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary shadow-lg shadow-primary/20">
        <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
      </span>

      <h3 className="mt-4 text-base font-semibold text-text-primary">
        {title}
      </h3>

      <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </li>
  );
}
