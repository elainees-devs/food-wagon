import { BenefitCard } from "./BenefitCard";
import { benefits } from "./benefits.data";

const SECTION_CLASSES = "bg-[#FFF1D6] px-4 py-16 md:px-24 md:py-24";

const CONTAINER_CLASSES = [
  "mx-auto max-w-7xl rounded-[36px] bg-white",
  "px-6 py-10 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.45)]",
  "md:px-14 md:py-14",
].join(" ");

const ITEM_CLASSES = [
  "border-t border-[#D1D1D1] pt-8 first:border-t-0 first:pt-0",
  "md:border-l md:border-t-0 md:px-10 md:py-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0",
].join(" ");

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className={SECTION_CLASSES}>
      <h2 id="benefits-heading" className="sr-only">
        Why order with Food Wagon
      </h2>

      <div className={CONTAINER_CLASSES}>
        <ul className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-y-0">
          {benefits.map((benefit) => (
            <li key={benefit.id} className={ITEM_CLASSES}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}