import heroBackground from "@/assets/images/hero/background.svg";
import { OrderCard } from "@/components/ui/OrderCard";


export function Hero() {
  return (
    <div
      className="flex flex-col py-16 gap-4 h-[361px] bg-cover bg-center bg-no-repeat p-4 md:px-24"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <h1 className="text-4xl text-primary-light font-bold">
        Are you starving?
      </h1>
      <p className="text-text-primary text-sm">Within a few clicks, find meals that are accessible near you</p>
      <OrderCard />
    </div>
  );
}