import heroBackground from "@/assets/images/hero/background.svg";
import { OrderCard } from "@/components/ui/OrderCard";
import { HeroImage } from "@/features/home/components/Hero/HeroImage";


export function Hero() {
  return (
    <div
      className="mt-8 relative flex flex-col overflow-hidden py-16 gap-4 h-[461px] bg-cover bg-center bg-no-repeat p-4 md:px-24"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="relative z-20 flex w-full flex-col gap-4 self-start md:w-[58%]">
        <h1 className="text-6xl text-primary-light font-bold">
          Are you starving?
        </h1>
        <p className="text-text-primary/80 text-sm">Within a few clicks, find meals that are accessible near you</p>
        <OrderCard />
      </div>
      <HeroImage />
    </div>
  );
}