import { Header } from "@/components/layout/Header";
import { FlashDeals, Hero } from "@/features/home/components";

export function HomePage(){
    return(
        <div>
            <Header />
            <Hero />
            <FlashDeals />
        </div>
    )
}